import React from 'react';

export default function Map() {
    return (
        <>
           {/*  Map-section Start  */}
        <div className="map-section section-padding pt-0">
            <div className="container">
                <div className="map-items" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
                    <div className="googpemap">
                        <iframe src="https://maps.google.com/maps?q=24.2019863,55.7622986&hl=en&z=15&output=embed" style={{ border: 0, width: '100%', height: '750px', display: 'block' }} allowFullScreen loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
