import React from 'react';

export default function Map() {
    return (
        <>
           {/*  Map-section Start  */}
        <div className="map-section section-padding pt-0">
            <div className="map-items">
                <div className="googpemap">
                    <iframe src="https://maps.google.com/maps?q=24.2019863,55.7622986&hl=en&z=15&output=embed" style={{ border: 0, width: '100%', height: '750px' }} allowFullScreen loading="lazy"></iframe>
                </div>
            </div>
        </div>
        </>
    );
}
