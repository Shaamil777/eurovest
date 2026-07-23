"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { tourPackagesData } from "../../data/tourPackagesData";

export default function TourPackagesContent() {
  const { title, description, extendedDescription, countries, benefits } =
    tourPackagesData;

  const [openCountryCode, setOpenCountryCode] = useState(null);
  return (
    <>
      <section
        className="tour-packages-section section-padding fix"
        style={{ paddingBottom: "80px" }}
      >
        <div className="container">
          {/* Title & Description */}
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div style={{ textAlign: "center", marginBottom: "60px" }}>
                <span
                  className="sub-title"
                  style={{
                    display: "inline-block",
                    marginBottom: "20px",
                    letterSpacing: "1.5px",
                    fontSize: "13px",
                  }}
                >
                  Explore the World
                </span>
                <h2
                  style={{
                    color: "var(--color-blue)",
                    fontSize: "clamp(28px, 4vw, 42px)",
                    fontWeight: "700",
                    marginBottom: "20px",
                    lineHeight: "1.3",
                  }}
                >
                  {title}
                </h2>
                <p
                  style={{
                    fontSize: "18px",
                    color: "#555",
                    lineHeight: "1.8",
                    maxWidth: "800px",
                    margin: "0 auto 15px",
                  }}
                >
                  {description}
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "var(--color-grey-text)",
                    lineHeight: "1.7",
                    maxWidth: "800px",
                    margin: "0 auto",
                  }}
                >
                  {extendedDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Destinations Heading */}
          <div style={{ textAlign: "center", marginBottom: "45px" }}>
            <h3
              style={{
                color: "var(--color-blue)",
                fontSize: "clamp(22px, 3vw, 30px)",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              Destinations We Cover
            </h3>
            <p
              style={{
                color: "var(--color-grey-text)",
                fontSize: "16px",
              }}
            >
              Premium tour packages to these amazing destinations
            </p>
          </div>

                    {/* Country Destinations Sections */}
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
                className="country-section-card"
              >
                {/* Country Header */}
                <div 
                  onClick={() => setOpenCountryCode(openCountryCode === country.code ? null : country.code)}
                  style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "20px", 
                    marginBottom: openCountryCode === country.code ? "30px" : "0", 
                    borderBottom: openCountryCode === country.code ? "1px solid #eee" : "none", 
                    paddingBottom: openCountryCode === country.code ? "20px" : "0",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                >
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
                    className="country-flag-container"
                  >
                    <Image
                      src={country.flagUrl}
                      alt={`${country.name} flag`}
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
                      flex: 1
                    }}
                    className="country-name-title"
                  >
                    {country.name}
                  </h3>
                  <div style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(181, 133, 36, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-primary)",
                    transition: "transform 0.3s ease",
                    transform: openCountryCode === country.code ? "rotate(180deg)" : "rotate(0deg)"
                  }}>
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </div>

                {/* Destinations List */}
                <AnimatePresence>
                  {openCountryCode === country.code && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: "hidden" }}
                    >
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
                        className="destination-image-container"
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
                          {dest.description || `Experience the unique charm, historic landmarks, and vibrant culture of ${dest.name}.`}
                        </p>
                      </div>
                    </div>
                  ))}
                  <p style={{ textAlign: "right", fontStyle: "italic", color: "var(--color-grey-text)", marginTop: "10px", marginRight: "10px" }}>
                    and more...
                  </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Why Choose Us Section */}
          <div style={{ marginTop: "80px", marginBottom: "40px" }}>
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <span
                style={{
                  display: "inline-block",
                  marginBottom: "15px",
                  letterSpacing: "1.5px",
                  fontSize: "13px",
                  color: "var(--color-primary)",
                  textTransform: "uppercase",
                  fontWeight: "600",
                }}
              >
                Why Choose Us
              </span>
              <h3
                style={{
                  color: "var(--color-blue)",
                  fontSize: "clamp(24px, 3.5vw, 36px)",
                  fontWeight: "700",
                  marginBottom: "15px",
                }}
              >
                Benefits of Our Tour Packages
              </h3>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "30px",
                maxWidth: "1100px",
                margin: "0 auto",
              }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{
                    background: "#fff",
                    padding: "35px 30px",
                    borderRadius: "16px",
                    boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
                    border: "1px solid rgba(0,0,0,0.03)",
                    transition: "transform 0.3s ease",
                  }}
                  className="benefit-card"
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      background: "rgba(181, 133, 36, 0.1)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <i
                      className="fa-solid fa-check"
                      style={{
                        color: "var(--color-primary)",
                        fontSize: "20px",
                      }}
                    ></i>
                  </div>
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "var(--color-blue)",
                      marginBottom: "12px",
                    }}
                  >
                    {benefit.title}
                  </h4>
                  <p
                    style={{
                      color: "var(--color-grey-text)",
                      lineHeight: "1.6",
                      fontSize: "15px",
                      margin: 0,
                    }}
                  >
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div
            style={{
              marginTop: "70px",
              background:
                "linear-gradient(135deg, var(--color-blue) 0%, #0a2d5c 100%)",
              padding: "60px 40px",
              borderRadius: "16px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative circles */}
            <div
              style={{
                position: "absolute",
                top: "-40px",
                right: "-40px",
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.04)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-30px",
                left: "-30px",
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.03)",
              }}
            />

            <h3
              style={{
                color: "#fff",
                marginBottom: "15px",
                fontSize: "clamp(22px, 3vw, 28px)",
                fontWeight: "600",
                position: "relative",
                zIndex: 1,
              }}
            >
              Ready to Plan Your Next Adventure?
            </h3>
            <p
              style={{
                marginBottom: "30px",
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: "16px",
                maxWidth: "550px",
                margin: "0 auto 30px",
                lineHeight: "1.7",
                position: "relative",
                zIndex: 1,
              }}
            >
              Get in touch with our travel experts to customize a tour package
              that fits your dream destination and budget.
            </p>
            <Link
              href="/contact"
              className="theme-btn"
              style={{
                backgroundColor: "#fff",
                color: "var(--color-blue)",
                position: "relative",
                zIndex: 1,
              }}
            >
              Contact Us Now <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      
      <style jsx="true">{`
        .country-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.1);
          border-color: rgba(181, 133, 36, 0.3);
        }
        .benefit-card:hover {
          transform: translateY(-5px);
        }

        @media (max-width: 767px) {
          .country-section-card { padding: 25px !important; }
          .country-flag-container { width: 50px !important; height: 33px !important; }
          .country-name-title { font-size: 20px !important; }
          .destination-card {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 15px !important;
            padding: 15px !important;
          }
          .destination-image-container {
            width: 100% !important;
            height: 200px !important;
          }
        }
      `}</style>
    </>
  );
}
