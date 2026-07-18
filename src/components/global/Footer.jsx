import React from 'react';

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#111111', color: '#ffffff', paddingTop: '80px', fontFamily: '"Inter", sans-serif' }}>
            <div className="container">
                {/* Top Section */}
                <div className="row g-4 mb-5" style={{ paddingBottom: '60px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="col-lg-6">
                        <div style={{ marginBottom: '20px' }}>
                            <img src="/assets/img/logo/white-logo.svg" alt="EuroVest Logo" style={{ maxWidth: '150px' }} />
                        </div>
                        <p style={{ fontSize: '20px', color: '#aaaaaa', maxWidth: '400px', lineHeight: '1.4' }}>
                            Expert immigration services, blending deep tech with local context for shared prosperity globally.
                        </p>
                    </div>
                    <div className="col-lg-6 d-flex flex-column align-items-lg-end">
                        <div style={{ maxWidth: '400px', width: '100%' }}>
                            <h5 style={{ fontSize: '14px', color: '#ffffff', marginBottom: '15px', fontWeight: '500' }}>Subscribe to our newsletter</h5>
                            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#1c1c1c', borderRadius: '50px', padding: '5px 5px 5px 20px' }}>
                                <i className="fa-regular fa-envelope" style={{ color: '#666' }}></i>
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    style={{ 
                                        backgroundColor: 'transparent', 
                                        border: 'none', 
                                        outline: 'none', 
                                        color: '#fff', 
                                        padding: '10px 15px', 
                                        width: '100%' 
                                    }} 
                                />
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ backgroundColor: '#ff4444', color: 'white', fontSize: '8px', padding: '2px 5px', borderRadius: '4px' }}>...</span>
                                    <button style={{ 
                                        width: '40px', 
                                        height: '40px', 
                                        borderRadius: '50%', 
                                        backgroundColor: '#333', 
                                        border: 'none', 
                                        color: '#fff', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s ease'
                                    }}
                                    className="newsletter-btn"
                                    >
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                            <p style={{ fontSize: '10px', color: '#666', marginTop: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                By subscribing you agree to our terms.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Middle Section: 4 Columns */}
                <div className="row g-4" style={{ paddingBottom: '60px' }}>
                    <div className="col-lg-3 col-md-6">
                        <h6 style={{ fontSize: '12px', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '30px' }}>Links</h6>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <li><a href="/" className="footer-link">Home</a></li>
                            <li><a href="/about" className="footer-link">About</a></li>
                            <li><a href="/services" className="footer-link">Services</a></li>
                            <li><a href="/careers" className="footer-link">Blog</a></li>
                            <li><a href="/contact" className="footer-link">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h6 style={{ fontSize: '12px', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '30px' }}>Platform</h6>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <li><a href="#" className="footer-link">Why EuroVest?</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h6 style={{ fontSize: '12px', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '30px' }}>Resources</h6>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <li><a href="#" className="footer-link">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h6 style={{ fontSize: '12px', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '30px' }}>Socials</h6>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <li><a href="#" className="footer-link">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
