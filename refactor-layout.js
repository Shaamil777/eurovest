const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/tour-packages/TourPackagesContent.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Remove selectedCountry state and useEffect
content = content.replace(/const \[selectedCountry, setSelectedCountry\][\s\S]*?\}, \[\]\);\n/, '');

// 2. Remove AnimatePresence modal (from {/* Country Destinations Modal */} to </AnimatePresence>)
content = content.replace(/\{\/\* Country Destinations Modal \*\/\}\s*<AnimatePresence>[\s\S]*?<\/AnimatePresence>\n/, '');

// 3. Remove modal styles
content = content.replace(/\.modal-content-container[\s\S]*?\.modal-list \{\n\s*gap: 15px;\n\s*\}/, '');

// 4. Replace Country Flags Grid with new layout
const newLayout = `          {/* Country Destinations Sections */}
          <div className="countries-list" style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            {countries.map((country, index) => (
              <motion.div
                key={country.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                style={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  padding: "40px",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.04)",
                }}
              >
                {/* Country Header */}
                <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "30px", borderBottom: "1px solid #eee", paddingBottom: "20px" }}>
                  <div
                    style={{
                      width: "80px",
                      height: "53px",
                      borderRadius: "6px",
                      overflow: "hidden",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      position: "relative",
                      flexShrink: 0
                    }}
                  >
                    <Image
                      src={country.flagUrl}
                      alt={\`\${country.name} flag\`}
                      fill
                      style={{ objectFit: "cover" }}
                      unoptimized
                    />
                  </div>
                  <h3
                    style={{
                      fontSize: "28px",
                      fontWeight: "700",
                      color: "var(--color-blue)",
                      margin: 0,
                    }}
                  >
                    {country.name}
                  </h3>
                </div>

                {/* Destinations List */}
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {country.destinations?.map((dest, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                        background: "#f8f9fa",
                        borderRadius: "16px",
                        padding: "20px",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      }}
                      className="destination-card"
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "120px",
                          height: "120px",
                          borderRadius: "12px",
                          overflow: "hidden",
                          flexShrink: 0,
                          boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                        }}
                      >
                        <Image
                          src={dest.image}
                          alt={dest.name}
                          fill
                          style={{ objectFit: "cover" }}
                          unoptimized
                        />
                      </div>
                      <div>
                        <h4 style={{ margin: "0 0 10px 0", fontSize: "20px", color: "var(--color-blue)", fontWeight: "600" }}>
                          <i className="fa-solid fa-location-dot" style={{ color: "var(--color-primary)", marginRight: "8px", fontSize: "16px" }}></i>
                          {dest.name}
                        </h4>
                        <p style={{ margin: 0, fontSize: "15px", color: "var(--color-grey-text)", lineHeight: "1.6" }}>
                          {dest.description || \`Experience the unique charm, historic landmarks, and vibrant culture of \${dest.name}.\`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>`;

content = content.replace(/\{\/\* Country Flags Grid \*\/\}[\s\S]*?<\/div>\n\s*\{\/\* Why Choose Us Section \*\/\}/, newLayout + '\n\n          {/* Why Choose Us Section */}');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully refactored TourPackagesContent.jsx');
