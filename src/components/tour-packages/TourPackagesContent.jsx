"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { tourPackagesData } from "../../data/tourPackagesData";

export default function TourPackagesContent() {
  const { title, description, extendedDescription, countries } =
    tourPackagesData;

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
                    cursor: "default",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "14px",
                  }}
                  className="country-card"
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
      `}</style>
    </>
  );
}
