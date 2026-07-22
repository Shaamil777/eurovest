import React from 'react';
import { getBlogBySlug } from '../../../../data/blogsData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const blog = await getBlogBySlug(slug);

    if (!blog) {
        return { title: 'Blog Not Found | Eurovest' };
    }

    return {
        title: blog.metaTitle || `${blog.title} | Eurovest`,
        description: blog.metaDescription || `Read about ${blog.title} by ${blog.author} on the Eurovest Blog.`,
        keywords: blog.metaKeywords || `${blog.category}, eurovest blog, financial news, investment insights`,
        robots: 'index, follow'
    };
}

import { PortableText } from '@portabletext/react';

export default async function BlogDetails({ params }) {
    const { slug } = await params;
    const blog = await getBlogBySlug(slug);

    if (!blog) {
        return notFound();
    }

    return (
        <main>
            {/* Breadcrumb Section */}
            <section className="breadcrumb-wrapper fix bg-cover top-[20px]" style={{ backgroundImage: 'url("/assets/img/inner-page/breadcrumb.png")' }}>
                <div className="shape">
                    <Image src="/assets/img/inner-page/shape.png" alt="img" width={200} height={200} style={{ width: 'auto', height: 'auto' }} />
                </div>
                <div className="container">
                    <div className="page-heading">
                        <h1 className="breadcrumb-title">Blog Details</h1>
                        <ul className="breadcrumb-list">
                            <li><Link href="/">Home</Link></li>
                            <li><i className="fa-solid fa-chevron-right"></i></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><i className="fa-solid fa-chevron-right"></i></li>
                            <li>Blog Details</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Blog Details Section */}
            <section className="news-details-section section-padding">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-8">
                            <div className="news-details-wrapper">
                                <div className="news-image">
                                    <img src={blog.image} alt={blog.title} style={{ width: '100%', borderRadius: '10px' }} />
                                </div>
                                <div className="news-content">
                                    <div className="list">
                                        <span><i className="fa-regular fa-calendar-days"></i> {blog.date}</span>
                                        <span><i className="fa-regular fa-user"></i> By {blog.author}</span>
                                        <span><i className="fa-regular fa-folder-open"></i> {blog.category}</span>
                                    </div>
                                    <h2 className="title">{blog.title}</h2>
                                    <div className="mt-3">
                                        {Array.isArray(blog.content) ? <PortableText value={blog.content} /> : <p>{blog.content}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            {/* Simple Sidebar */}
                            <div className="main-sideber">
                                <div className="news-sideber-box">
                                    <div className="wid-title">
                                        <h3>About Author</h3>
                                    </div>
                                    <div className="about-author-widget">
                                        <div className="author-image">
                                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E" alt={blog.author} style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
                                        </div>
                                        <div className="author-content">
                                            <h4>{blog.author}</h4>
                                            {blog.authorPosition && <p>{blog.authorPosition}</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
