const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/tourPackagesData.js');
let content = fs.readFileSync(filePath, 'utf8');

// Replace { name: "Name", image: "url" } or similar with added description
content = content.replace(/\{ name: "([^"]+)", image: ([^}]+) \}/g, (match, name, imageStr) => {
  if (match.includes('description:')) return match; // Already has description
  return `{ name: "${name}", image: ${imageStr.trim()}, description: "Experience the unique charm, historic landmarks, and vibrant culture of ${name}." }`;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated tourPackagesData.js');
