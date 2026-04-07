/**
 * Build script: PugMarp .md courses → templates.json
 * Usage: npx tsx scripts/build.ts
 */
import * as fs from "fs";
import * as path from "path";
// Simple YAML-like frontmatter parser (no dependency)

const COURSES_DIR = path.resolve(__dirname, "../courses");
const OUTPUT_FILE = path.resolve(__dirname, "../dist/templates.json");

interface SlideData {
  type: "title" | "bullets" | "code" | "image";
  title: string;
  subtitle?: string;
  bullets?: string[];
  code?: string;
  note?: string;
  script?: string;
  imageUrl?: string;
  alt?: string;
  caption?: string;
}
interface QA { q: string; a: string; }
interface ToolData { name: string; description: string; url: string; category: string; }
interface LessonData { title: string; order: number; slides: SlideData[]; qa: QA[]; }
interface StageData { title: string; description: string; order: number; lessons: LessonData[]; tools?: ToolData[]; }
interface TemplateData { title: string; description: string; keywords: string[]; stages: StageData[]; }

function parseFrontmatter(content: string): { meta: Record<string, unknown>; body: string } {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: content };

  const meta: Record<string, unknown> = {};
  for (const line of match[1].split("\n")) {
    // title: "value" or title: value
    const kvMatch = line.match(/^(\w+):\s*"?(.*?)"?\s*$/);
    if (!kvMatch) continue;
    const [, key, val] = kvMatch;
    if (key === "keywords") {
      // keywords: [a, b, c] or keywords: ["a", "b"]
      const arrMatch = match[1].match(/keywords:\s*\[([\s\S]*?)\]/);
      if (arrMatch) {
        meta.keywords = arrMatch[1].split(",").map(s => s.trim().replace(/^"|"$/g, ""));
      }
    } else if (val === "true") {
      meta[key] = true;
    } else {
      meta[key] = val;
    }
  }
  return { meta, body: match[2] };
}

function parseSlideBlock(block: string): SlideData {
  const lines = block.trim().split("\n");
  let title = "";
  let subtitle = "";
  const bullets: string[] = [];
  let code = "";
  let note = "";
  let script = "";
  let imageUrl = "";
  let alt = "";
  let caption = "";
  let inCode = false;
  const codeLines: string[] = [];

  for (const line of lines) {
    // Script directive
    const scriptMatch = line.match(/<!--\s*script:\s*(.*?)\s*-->/);
    if (scriptMatch) { script = scriptMatch[1]; continue; }

    // Skip other directives
    if (/<!--\s*\+/.test(line)) continue;

    // Note
    if (line.startsWith("> 참고:")) { note = line.slice(5).trim(); continue; }

    // Code fence
    if (line.startsWith("```")) {
      if (inCode) { code = codeLines.join("\n"); inCode = false; }
      else { inCode = true; }
      continue;
    }
    if (inCode) { codeLines.push(line); continue; }

    // Image
    const imgMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)/);
    if (imgMatch) { alt = imgMatch[1]; imageUrl = imgMatch[2]; continue; }

    // Caption (italic after image)
    if (imageUrl && line.match(/^\*.*\*$/)) { caption = line.slice(1, -1); continue; }

    // Heading
    if (line.startsWith("# ")) { title = line.slice(2).trim(); continue; }

    // Bullets
    if (line.startsWith("- ")) { bullets.push(line.slice(2).trim()); continue; }

    // Subtitle text (non-empty, non-heading, non-bullet)
    if (line.trim() && !title) continue;
    if (line.trim() && !bullets.length && !code && !imageUrl) {
      subtitle += (subtitle ? "\n" : "") + line.trim();
    }
  }

  if (imageUrl && !bullets.length && !code) return { type: "image", title, imageUrl, alt, caption, script: script || undefined, note: note || undefined };
  if (code) return { type: "code", title, code, note: note || undefined, script: script || undefined, imageUrl: imageUrl || undefined, alt: alt || undefined };
  if (bullets.length) return { type: "bullets", title, bullets, note: note || undefined, script: script || undefined, imageUrl: imageUrl || undefined, alt: alt || undefined, caption: caption || undefined };
  if (imageUrl) return { type: "image", title, imageUrl, alt, caption, script: script || undefined, note: note || undefined };
  return { type: "title", title, subtitle: subtitle || undefined, script: script || undefined, note: note || undefined };
}

function parseCourseMarkdown(content: string): TemplateData {
  const { meta, body } = parseFrontmatter(content);

  const template: TemplateData = {
    title: (meta.title as string) || "",
    description: (meta.description as string) || "",
    keywords: (meta.keywords as string[]) || [],
    stages: [],
  };

  let currentStage: StageData | null = null;
  let currentLesson: LessonData | null = null;
  let currentSlideContent = "";
  let inQA = false;
  let qaContent = "";

  const lines = body.split("\n");

  function flushSlide() {
    if (currentSlideContent.trim() && currentLesson && !inQA) {
      currentLesson.slides.push(parseSlideBlock(currentSlideContent));
    }
    currentSlideContent = "";
  }

  function flushQA() {
    if (qaContent.trim() && currentLesson) {
      // Parse QA YAML-like content
      const qaLines = qaContent.trim().split("\n");
      let currentQ = "";
      let currentA = "";
      for (const line of qaLines) {
        const qMatch = line.match(/^-\s*q:\s*"?(.*?)"?\s*$/);
        const aMatch = line.match(/^\s+a:\s*"?(.*?)"?\s*$/);
        if (qMatch) {
          if (currentQ && currentA) {
            currentLesson.qa.push({ q: currentQ, a: currentA });
          }
          currentQ = qMatch[1];
          currentA = "";
        } else if (aMatch) {
          currentA = aMatch[1];
        }
      }
      if (currentQ && currentA) {
        currentLesson.qa.push({ q: currentQ, a: currentA });
      }
    }
    qaContent = "";
    inQA = false;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Stage directive
    const stageMatch = line.match(/<!--\s*\+stage:\s*(\d+)\s*\|\s*(.*?)\s*\|\s*(.*?)\s*-->/);
    if (stageMatch) {
      flushSlide();
      flushQA();
      currentStage = {
        order: parseInt(stageMatch[1]),
        title: stageMatch[2],
        description: stageMatch[3],
        lessons: [],
        tools: [],
      };
      template.stages.push(currentStage);
      continue;
    }

    // Tools directive
    const toolsMatch = line.match(/<!--\s*\+tools:\s*(.*?)\s*-->/);
    if (toolsMatch && currentStage) {
      const parts = toolsMatch[1].split("|").map(s => s.trim());
      if (parts.length >= 4) {
        currentStage.tools!.push({
          name: parts[0],
          description: parts[1],
          url: parts[2],
          category: parts[3] as "essential" | "recommended" | "optional",
        });
      }
      continue;
    }

    // Lesson directive
    const lessonMatch = line.match(/<!--\s*\+lesson:\s*(\d+)\s*\|\s*(.*?)\s*-->/);
    if (lessonMatch) {
      flushSlide();
      flushQA();
      if (!currentStage) {
        currentStage = { order: 1, title: "기본", description: "", lessons: [], tools: [] };
        template.stages.push(currentStage);
      }
      currentLesson = {
        order: parseInt(lessonMatch[1]),
        title: lessonMatch[2],
        slides: [],
        qa: [],
      };
      currentStage.lessons.push(currentLesson);
      continue;
    }

    // QA directive
    if (/<!--\s*\+qa\s*-->/.test(line)) {
      flushSlide();
      inQA = true;
      continue;
    }

    // Slide separator
    if (line.trim() === "---") {
      if (inQA) {
        flushQA();
      } else {
        flushSlide();
      }
      continue;
    }

    if (inQA) {
      qaContent += line + "\n";
    } else {
      currentSlideContent += line + "\n";
    }
  }

  flushSlide();
  flushQA();

  return template;
}

function main() {
  const courseDirs = fs.readdirSync(COURSES_DIR).filter(d =>
    fs.statSync(path.join(COURSES_DIR, d)).isDirectory()
  );

  const templates: TemplateData[] = [];

  for (const dir of courseDirs) {
    const mdPath = path.join(COURSES_DIR, dir, "course.md");
    if (!fs.existsSync(mdPath)) continue;

    const content = fs.readFileSync(mdPath, "utf-8");
    const template = parseCourseMarkdown(content);
    templates.push(template);

    const lessonCount = template.stages.reduce((a, s) => a + s.lessons.length, 0);
    const slideCount = template.stages.reduce((a, s) => a + s.lessons.reduce((b, l) => b + l.slides.length, 0), 0);
    console.log(`  ✓ ${dir}: ${template.stages.length} stages, ${lessonCount} lessons, ${slideCount} slides`);
  }

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(templates, null, 2), "utf-8");
  console.log(`\nBuild complete: ${templates.length} courses → ${OUTPUT_FILE}`);
}

main();
