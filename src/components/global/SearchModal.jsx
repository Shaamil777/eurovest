import React from 'react';
// import Link from 'next/link';

export default function SearchModal() {
    return (
        <>
        {/*  Search Area Start  */}
        <div className="search-popup">
            <div className="search-popup__overlay search-toggler"></div>
            <div className="search-popup__content">
                <form role="search" method="get" className="search-popup__form" action="#">
                    <input type="text" id="search" name="search" placeholder="Search Here..." />
                    <button type="submit" aria-label="search submit" className="search-btn">
                        <span><i className="fa-regular fa-magnifying-glass"></i></span>
                    </button>
                </form>
            </div>
        </div>

        </>
    );
}
