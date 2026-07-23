"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { tourPackagesData } from "../../data/tourPackagesData";

export default function TourPackagesContent() {
  const { title, description, extendedDescription, countries, benefits } =
    tourPackagesData;

  const [selectedCountry, setSelectedCountry] = useState(null);

  // Close modal when pressing escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedCountry(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

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

          {/* Country Flags Grid */}
          <div
            className="countries-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "24px",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            {countries.map((country, index) => (
              <motion.div
                key={country.code}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
              >
                <div
                  style={{
                    background: "#ffffff",
                    borderRadius: "16px",
                    padding: "30px 20px",
                    textAlign: "center",
                    border: "1px solid rgba(0, 0, 0, 0.06)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
                    transition: "all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "14px",
                  }}
                  className="country-card"
                  onClick={() => setSelectedCountry(country)}
                >
                  <div
                    style={{
                      width: "90px",
                      height: "60px",
                      borderRadius: "8px",
                      overflow: "hidden",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.12)",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={country.flagUrl}
                      alt={`${country.name} flag`}
                      fill
                      style={{ objectFit: "cover" }}
                      unoptimized
                    />
                  </div>
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "var(--color-blue)",
                      fontFamily: "'Poppins', sans-serif",
                      lineHeight: "1.3",
                    }}
                  >
                    {country.name}
                  </span>
                </div>
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

      {/* Country Destinations Modal */}
      <AnimatePresence>
        {selectedCountry && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0, 0, 0, 0.6)",
                backdropFilter: "blur(5px)",
              }}
              onClick={() => setSelectedCountry(null)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
              }}
              style={{
                background: "#fff",
                position: "relative",
                zIndex: 1,
                overflow: "hidden",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                display: "flex",
                flexDirection: "column",
                maxHeight: "90vh",
              }}
              className="modal-content-container"
            >
              {/* Modal Header */}
              <div
                className="modal-header"
                style={{
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "var(--color-blue)",
                  flexShrink: 0,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <div
                    style={{
                      width: "50px",
                      height: "33px",
                      borderRadius: "6px",
                      overflow: "hidden",
                      position: "relative",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                    }}
                  >
                    <Image
                      src={selectedCountry.flagUrl}
                      alt={`${selectedCountry.name} flag`}
                      fill
                      style={{ objectFit: "cover" }}
                      unoptimized
                    />
                  </div>
                  <h3 className="modal-header-title" style={{ color: "#fff", margin: 0, fontWeight: "600" }}>
                    {selectedCountry.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCountry(null)}
                  style={{
                    background: "rgba(255,255,255,0.2)",
                    border: "none",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    cursor: "pointer",
                    transition: "background 0.2s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.3)")}
                  onMouseOut={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
                >
                  <i className="fa-solid fa-xmark" style={{ fontSize: "16px" }}></i>
                </button>
              </div>

              {/* Modal Body */}
              <div className="modal-body" style={{ overflowY: "auto" }}>
                <p
                  style={{
                    fontSize: "16px",
                    color: "var(--color-grey-text)",
                    marginBottom: "25px",
                  }}
                >
                  Discover the most popular destinations we offer in <strong>{selectedCountry.name}</strong>:
                </p>

                <div
                  className="modal-grid"
                  style={{
                    display: "grid",
                  }}
                >
                  {selectedCountry.destinations?.slice(0, 5).map((dest, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      style={{
                        position: "relative",
                        borderRadius: "12px",
                        overflow: "hidden",
                        height: "120px",
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
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: "30px 12px 10px",
                          background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
                          display: "flex",
                          alignItems: "flex-end",
                          gap: "6px"
                        }}
                      >
                        <i className="fa-solid fa-location-dot" style={{ color: "var(--color-primary)", fontSize: "12px", marginBottom: "3px" }}></i>
                        <span style={{ fontWeight: "600", color: "#fff", fontSize: "14px", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
                          {dest.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* And more indicator */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + 5 * 0.05 }}
                    style={{
                      borderRadius: "12px",
                      border: "2px dashed rgba(181, 133, 36, 0.4)",
                      background: "rgba(181, 133, 36, 0.05)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "120px",
                      gap: "8px",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <div style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: "var(--color-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff"
                    }}>
                      <i className="fa-solid fa-plus" style={{ fontSize: "14px" }}></i>
                    </div>
                    <span style={{ fontWeight: "600", color: "var(--color-primary)", fontSize: "14px" }}>
                      More...
                    </span>
                  </motion.div>
                </div>

                <div style={{ marginTop: "35px", textAlign: "center" }}>
                  <Link
                    href="/contact"
                    className="theme-btn"
                    style={{ width: "100%", justifyContent: "center" }}
                    onClick={() => setSelectedCountry(null)}
                  >
                    Enquire Now <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx="true">{`
        .modal-content-container {
          width: 100%;
          max-width: 600px;
          border-radius: 24px;
        }
        .modal-header {
          padding: 30px 40px;
        }
        .modal-header-title {
          font-size: 24px;
        }
        .modal-body {
          padding: 40px;
        }
        .modal-grid {
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 15px;
        }

        @media (max-width: 768px) {
          .modal-content-container {
            max-width: 500px;
            width: 95%;
          }
          .modal-header {
            padding: 20px 25px;
          }
          .modal-body {
            padding: 25px;
          }
        }

        @media (max-width: 480px) {
          .modal-content-container {
            border-radius: 16px;
            width: 98%;
          }
          .modal-header {
            padding: 15px 20px;
          }
          .modal-header-title {
            font-size: 20px;
          }
          .modal-body {
            padding: 20px 15px;
          }
          .modal-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
        }

        .country-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.1);
          border-color: rgba(181, 133, 36, 0.3);
        }
        .benefit-card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </>
  );
}
