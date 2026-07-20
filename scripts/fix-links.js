const fs = require('fs');
const path = require('path');

function walkSync(dir, filelist = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      filelist = walkSync(filepath, filelist);
    } else {
      if (file.endsWith('.jsx') || file.endsWith('.tsx')) {
        filelist.push(filepath);
      }
    }
  });
  return filelist;
}

const componentsDir = path.join(__dirname, '../src/components');
const files = walkSync(componentsDir);

let changedFiles = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const originalContent = content;

  // Normalizations for html files in hrefs
  content = content.replace(/href="index\.html"/g, 'href="/"');
  content = content.replace(/href="about\.html"/g, 'href="/about"');
  content = content.replace(/href="contact\.html"/g, 'href="/contact"');
  content = content.replace(/href="news\.html"/g, 'href="/blog"');
  content = content.replace(/href="blog\.html"/g, 'href="/blog"');
  content = content.replace(/href="service\.html"/g, 'href="/service"');
  content = content.replace(/href="news-details\.html"/g, 'href="/blog"');
  content = content.replace(/href="service-details\.html"/g, 'href="/service"');

  // Replace <a href="/...">...</a> with <Link href="/...">...</Link>
  // Also match <a className="..." href="/...">...</a>
  const aTagRegex = /<a\s+([^>]*href=["']\/[^"']*["'][^>]*)>([\s\S]*?)<\/a>/gi;
  
  content = content.replace(aTagRegex, (match, attrs, innerHtml) => {
    return `<Link ${attrs}>${innerHtml}</Link>`;
  });

  if (content !== originalContent) {
    // Check if we need to import Link
    if (content.includes('<Link') && !content.includes("from 'next/link'") && !content.includes('from "next/link"')) {
        const lines = content.split('\n');
        let lastImportIndex = -1;
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].trim().startsWith('import ')) {
                lastImportIndex = i;
            }
        }
        
        if (lastImportIndex !== -1) {
            lines.splice(lastImportIndex + 1, 0, "import Link from 'next/link';");
        } else {
            if (lines[0] && lines[0].includes('use client')) {
                lines.splice(1, 0, "import Link from 'next/link';");
            } else {
                lines.unshift("import Link from 'next/link';");
            }
        }
        content = lines.join('\n');
    }
    
    fs.writeFileSync(file, content, 'utf8');
    changedFiles++;
    console.log(`Fixed: ${file}`);
  }
});

console.log(`Total files changed: ${changedFiles}`);
