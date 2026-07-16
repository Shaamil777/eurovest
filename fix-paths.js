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
    content = content.replace(/src=[\"']assets\/img\//g, 'src=\"/assets/img/');
    content = content.replace(/url\([\"']?assets\/img\//g, 'url(\"/assets/img/');
    // also handle href if there are any image links
    content = content.replace(/href=[\"']assets\/img\//g, 'href=\"/assets/img/');
    if (original !== content) {
        fs.writeFileSync(file, content);
        console.log('Updated ' + file);
    }
});
