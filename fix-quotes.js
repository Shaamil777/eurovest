const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.jsx') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.ts')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('src');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Fix mismatched quotes in url(...)
    content = content.replace(/url\([\"']?(\/assets\/img\/[^\"')]+)[\"']?\)/g, 'url("$1")');
    
    if (original !== content) {
        fs.writeFileSync(file, content);
        console.log('Fixed quotes in ' + file);
    }
});
