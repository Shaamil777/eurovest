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

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  if (content.includes('// import Link from \'next/link\'')) {
    content = content.replace(/\/\/ import Link from 'next\/link';[^\n]*/g, "import Link from 'next/link';");
    changed = true;
  }
  
  // Just in case it used double quotes
  if (content.includes('// import Link from "next/link"')) {
    content = content.replace(/\/\/ import Link from "next\/link";[^\n]*/g, 'import Link from "next/link";');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Uncommented Link in: ${file}`);
  }
});
