const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'src/components/tour-packages/TourPackagesContent.jsx');
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /boxShadow: "0 8px 30px rgba\(0, 0, 0, 0\.04\)",\s*\}\}\s*>/,
  'boxShadow: "0 8px 30px rgba(0, 0, 0, 0.04)",\n                }}\n                className="country-section-card"\n              >'
);

content = content.replace(
  /flexShrink: 0\s*\}\}\s*>/,
  'flexShrink: 0\n                    }}\n                    className="country-flag-container"\n                  >'
);

content = content.replace(
  /margin: 0,\s*flex: 1\s*\}\}\s*>/,
  'margin: 0,\n                      flex: 1\n                    }}\n                    className="country-name-title"\n                  >'
);

const mediaQueryTarget = `@media (max-width: 767px) {
          .destination-card {`;
const mediaQueryReplacement = `@media (max-width: 767px) {
          .country-section-card { padding: 25px !important; }
          .country-flag-container { width: 50px !important; height: 33px !important; }
          .country-name-title { font-size: 20px !important; }
          .destination-card {`;

content = content.replace(mediaQueryTarget, mediaQueryReplacement);

fs.writeFileSync(file, content, 'utf8');
console.log('Update complete!');
