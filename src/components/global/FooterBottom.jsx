import React from 'react';

export default function FooterBottom() {
    return (
        <div style={{ backgroundColor: 'var(--color-blue)', color: '#666666', position: 'relative', overflow: 'hidden' }}>
            <div className="container" style={{ position: 'relative', zIndex: 2, paddingBottom: '40px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '30px' }}>
                    <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>
                        © Copyright 2025 EuroVest
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                        <li>
                            <a href="/terms" className="footer-bottom-link">Terms of Service</a>
                        </li>
                        <li>
                            <a href="/privacy" className="footer-bottom-link">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/tos" className="footer-bottom-link">Data Platform TOS</a>
                        </li>
                    </ul>
                </div>
            </div>
            
            {/* Massive Faded Text */}
            <div style={{
                position: 'relative',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                overflow: 'hidden',
                lineHeight: '0.75',
                marginTop: '0px',
                paddingBottom: '20px'
            }}>
                <h1 style={{
                    fontSize: 'clamp(80px, 25vw, 400px)',
                    fontWeight: '900',
                    color: 'rgba(255, 255, 255, 0.03)',
                    margin: 0,
                    textTransform: 'uppercase',
                    letterSpacing: '-2px',
                    whiteSpace: 'nowrap',
                    userSelect: 'none'
                }}>
                    EUROVEST
                </h1>
            </div>
        </div>
    );
}
