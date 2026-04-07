/**
 * Migration script: Convert existing TS templates to PugMarp markdown
 * Usage: npx tsx scripts/migrate.ts
 */
import * as fs from "fs";
import * as path from "path";

// Import templates from the app repo
const APP_ROOT = process.env.APP_ROOT || path.resolve(__dirname, "../../../my-company-code");
const TEMPLATES_DIR = path.join(APP_ROOT, "src/lib/templates");
const OUTPUT_DIR = path.resolve(__dirname, "../courses");

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

interface LessonData {
  title: string;
  order: number;
  slides: SlideData[];
  qa: QA[];
  marpContent?: string;
}

interface ToolData {
  name: string;
  description: string;
  url: string;
  category: "essential" | "recommended" | "optional";
}

interface StageData {
  title: string;
  description: string;
  order: number;
  lessons: LessonData[];
  tools?: ToolData[];
}

interface TemplateData {
  title: string;
  description: string;
  keywords: string[];
  stages: StageData[];
}

function slideToMarp(slide: SlideData): string {
  const parts: string[] = [];

  parts.push(`# ${slide.title}`);

  if (slide.type === "title" && slide.subtitle) {
    parts.push("");
    parts.push(slide.subtitle);
  }

  if (slide.type === "bullets" && slide.bullets) {
    parts.push("");
    for (const b of slide.bullets) {
      parts.push(`- ${b}`);
    }
  }

  if (slide.type === "code" && slide.code) {
    parts.push("");
    parts.push("```");
    parts.push(slide.code);
    parts.push("```");
  }

  if (slide.type === "image" && slide.imageUrl) {
    parts.push("");
    parts.push(`![${slide.alt || slide.title}](${slide.imageUrl})`);
    if (slide.caption) {
      parts.push("");
      parts.push(`*${slide.caption}*`);
    }
  }

  if (slide.note) {
    parts.push("");
    parts.push(`> 참고: ${slide.note}`);
  }

  if (slide.script) {
    parts.push("");
    parts.push(`<!-- script: ${slide.script} -->`);
  }

  return parts.join("\n");
}

function templateToMarp(template: TemplateData): string {
  const parts: string[] = [];

  // Frontmatter
  parts.push("---");
  parts.push("marp: true");
  parts.push(`title: "${template.title}"`);
  parts.push(`description: "${template.description}"`);
  parts.push(`keywords: [${template.keywords.map(k => `"${k}"`).join(", ")}]`);
  parts.push("theme: koreatech-v3");
  parts.push("---");
  parts.push("");

  for (const stage of template.stages) {
    // Stage directive
    parts.push(`<!-- +stage: ${stage.order} | ${stage.title} | ${stage.description} -->`);

    // Tools directives
    if (stage.tools) {
      for (const tool of stage.tools) {
        parts.push(`<!-- +tools: ${tool.name}|${tool.description}|${tool.url}|${tool.category} -->`);
      }
    }
    parts.push("");

    for (const lesson of stage.lessons) {
      // Lesson directive
      parts.push(`<!-- +lesson: ${lesson.order} | ${lesson.title} -->`);
      parts.push("");

      // Slides
      for (let i = 0; i < lesson.slides.length; i++) {
        parts.push(slideToMarp(lesson.slides[i]));
        if (i < lesson.slides.length - 1) {
          parts.push("");
          parts.push("---");
          parts.push("");
        }
      }

      // QA section
      if (lesson.qa && lesson.qa.length > 0) {
        parts.push("");
        parts.push("---");
        parts.push("");
        parts.push("<!-- +qa -->");
        for (const qa of lesson.qa) {
          parts.push(`- q: "${qa.q}"`);
          parts.push(`  a: "${qa.a}"`);
        }
      }

      parts.push("");
      parts.push("---");
      parts.push("");
    }
  }

  return parts.join("\n").trim() + "\n";
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

async function main() {
  // Dynamically import all templates
  const indexPath = path.join(TEMPLATES_DIR, "index.ts");

  // Use tsx to evaluate the templates
  const { execSync } = await import("child_process");

  const evalScript = `
    const path = require('path');
    process.chdir('${APP_ROOT}');
    const { templates } = require('./src/lib/templates/index.ts');
    console.log(JSON.stringify(templates));
  `;

  let templates: TemplateData[];
  try {
    const result = execSync(`cd "${APP_ROOT}" && npx tsx -e "const { templates } = require('./src/lib/templates'); console.log(JSON.stringify(templates))"`, {
      encoding: "utf-8",
      maxBuffer: 50 * 1024 * 1024,
    });
    templates = JSON.parse(result.trim());
  } catch (e) {
    console.error("Failed to load templates. Make sure APP_ROOT is set correctly.");
    console.error(e);
    process.exit(1);
  }

  console.log(`Found ${templates.length} templates`);

  // Create output directories and files
  for (const template of templates) {
    const slug = slugify(template.title).slice(0, 50) || `course-${templates.indexOf(template)}`;
    const courseDir = path.join(OUTPUT_DIR, slug);

    fs.mkdirSync(courseDir, { recursive: true });

    const marp = templateToMarp(template);
    fs.writeFileSync(path.join(courseDir, "course.md"), marp, "utf-8");

    console.log(`  ✓ ${slug}/ (${template.stages.length} stages, ${template.stages.reduce((a, s) => a + s.lessons.length, 0)} lessons)`);
  }

  console.log(`\nMigration complete! ${templates.length} courses written to ${OUTPUT_DIR}`);
}

main().catch(console.error);
