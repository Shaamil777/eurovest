import React from 'react';
// import Link from 'next/link';

const newsData = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&h=400&q=80",
        category: "Student Visa",
        comments: "Comment (08)",
        date: "20 August, 2025",
        title: "How Immigration Policies Impact Global Travelers",
        authorImage: "assets/img/home-1/news/client.png",
        author: "Sohel"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&h=400&q=80",
        category: "IELTS / TOEFL",
        comments: "Comment (08)",
        date: "20 August, 2025",
        title: "Travel Visa Made Easy A Step-by-Step Guide",
        authorImage: "assets/img/home-1/news/client.png",
        author: "Sohel"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&h=400&q=80",
        category: "Study Abroad",
        comments: "Comment (08)",
        date: "20 August, 2025",
        title: "The Importance of Legal Support in Immigration Cases",
        authorImage: "assets/img/home-1/news/client.png",
        author: "Sohel"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&h=400&q=80",
        category: "Student Visa",
        comments: "Comment (08)",
        date: "20 August, 2025",
        title: "Work Visa vs. Student Visa Which is Right for You?",
        authorImage: "assets/img/home-1/news/client.png",
        author: "Sohel"
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&h=400&q=80",
        category: "IELTS / TOEFL",
        comments: "Comment (08)",
        date: "20 August, 2025",
        title: "How to Choose the Right Immigration Consultancy",
        authorImage: "assets/img/home-1/news/client.png",
        author: "Sohel"
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&h=400&q=80",
        category: "Study Abroad",
        comments: "Comment (08)",
        date: "20 August, 2025",
        title: "Preparing Your Family for Immigration Abroad",
        authorImage: "assets/img/home-1/news/client.png",
        author: "Sohel"
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&h=400&q=80",
        category: "Student Visa",
        comments: "Comment (08)",
        date: "20 August, 2025",
        title: "Tips to Improve Your Chances of Visa Approval",
        authorImage: "assets/img/home-1/news/client.png",
        author: "Sohel"
    },
    {
        id: 8,
        image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=600&h=400&q=80",
        category: "IELTS / TOEFL",
        comments: "Comment (08)",
        date: "20 August, 2025",
        title: "Future Trends in Global Immigration and Visa Services",
        authorImage: "assets/img/home-1/news/client.png",
        author: "Sohel"
    },
    {
        id: 9,
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&h=400&q=80",
        category: "Study Abroad",
        comments: "Comment (08)",
        date: "20 August, 2025",
        title: "Scholarships and Grants for International Students",
        authorImage: "assets/img/home-1/news/client.png",
        author: "Sohel"
    }
];

export default function NewsGrid() {
    const noProfileImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E";

    return (
        <>
      {/* News Section Start  */}
        <section className="news-section section-padding fix">
            <div className="container">
                <div className="row g-4">
                    {newsData.map((item) => (
                        <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                            <div className="news-card-item">
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
                                        <a href="news-details.html">
                                            {item.title}
                                        </a>
                                    </h3>
                                    <div className="news-bottom">
                                        <div className="info-item">
                                            <img src={noProfileImg} alt="img" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                                            <span>By {item.author}</span>
                                        </div>
                                        <a href="news-details.html" className="link-btn">View Articles<i className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
}
