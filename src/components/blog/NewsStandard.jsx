import React from 'react';
import Link from 'next/link';

export default function NewsStandard() {
    const noProfileImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E";

    const blogPosts = [
        {
            id: 1,
            date: "11 March 2025",
            title: "How to Avoid Common Mistakes in Visa Applications",
            author: "Admin",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&h=400&q=80"
        },
        {
            id: 2,
            date: "11 March 2025",
            title: "The Role of Immigration Consultants in Your Journey",
            author: "Admin",
            image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&h=400&q=80"
        },
        {
            id: 3,
            date: "11 March 2025",
            title: "Latest Immigration Policy Updates You Should Know",
            author: "Admin",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&h=400&q=80"
        }
    ];

    return (
        <>
      {/* News Section Start  */}
        <section className="news-standard-section section-padding fix">
            <div className="container">
                <div className="news-standard-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-8 col-12">
                            {blogPosts.map((item, index) => (
                                <div key={item.id} className={`news-card-item ${index !== blogPosts.length - 1 ? 'mb-4' : 'mb-0'}`}>
                                    <div className="news-image">
                                        <img src={item.image} alt="img" />
                                        <div className="news-layer-wrapper">
                                            <div className="news-layer-image" style={{ backgroundImage: `url("${item.image}")` }}></div>
                                            <div className="news-layer-image" style={{ backgroundImage: `url("${item.image}")` }}></div>
                                            <div className="news-layer-image" style={{ backgroundImage: `url("${item.image}")` }}></div>
                                            <div className="news-layer-image" style={{ backgroundImage: `url("${item.image}")` }}></div>
                                        </div>
                                    </div>
                                    <div className="news-content">
                                        <div className="list">
                                            <span>{item.date}</span>
                                        </div>
                                        <h3>
                                            <Link href="/blog">
                                                {item.title}
                                            </Link>
                                        </h3>
                                        <div className="news-bottom">
                                            <div className="info-item">
                                                <img src={noProfileImg} alt="img" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                                                <span>By {item.author}</span>
                                            </div>
                                            <Link href="/blog" className="link-btn">View Articles<i className="fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="main-sideber">
                                <div className="news-sideber-box">
                                    <div className="search-widget">
                                        <form action="#">
                                            <input type="text" placeholder="Search Blog" />
                                            <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                                        </form>
                                    </div>
                                </div>
                                
                                <div className="news-sideber-box">
                                    <div className="wid-title">
                                        <h3>Recent Post</h3>
                                    </div>
                                    <div className="recent-post-area">
                                        <div className="recent-items">
                                            <div className="recent-thumb">
                                                <img src="assets/img/inner-page/news-details/post-1.jpg" alt="img" />
                                            </div>
                                            <div className="recent-content">
                                                <h6>
                                                    <Link href="/blog">
                                                       Top Countries for Higher Education in 2025
                                                    </Link>
                                                </h6>
                                                <ul>
                                                    <li>
                                                        March 26, 2025
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="recent-items">
                                            <div className="recent-thumb">
                                              <img src="assets/img/inner-page/news-details/post-2.jpg" alt="img" />
                                            </div>
                                            <div className="recent-content">
                                                <h6>
                                                    <Link href="/blog">
                                                        The Benefits of Hiring a Visa Consultant
                                                    </Link>
                                                </h6>
                                                <ul>
                                                    <li>
                                                        March 26, 2025
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="recent-items">
                                            <div className="recent-thumb">
                                                <img src="assets/img/inner-page/news-details/post-3.jpg" alt="img" />
                                            </div>
                                            <div className="recent-content">
                                                <h6>
                                                    <Link href="/blog">
                                                       How to Prepare for Your Immigration Interview
                                                    </Link>
                                                </h6>
                                                <ul>
                                                    <li>
                                                        March 26, 2025
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
