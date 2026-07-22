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
                        {/* Main Content */}
                        <div className="col-lg-8">
                            <article style={{ textAlign: 'left' }}>
                                {/* Featured Image */}
                                <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
                                    <img src={blog.image} alt={blog.title} style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
                                </div>

                               

                                {/* Title */}
                                <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#061B39', lineHeight: 1.35, marginTop: '16px', marginBottom: '20px' }}>{blog.title}</h2>

                                {/* Divider */}
                                <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #B58524, #D4A84B)', borderRadius: '2px', marginBottom: '28px' }}></div>

                                {/* Content */}
                                <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#444', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                                    {Array.isArray(blog.content) ? <PortableText value={blog.content} /> : <p>{blog.content}</p>}
                                </div>
                            </article>
                        </div>

                        {/* Sidebar */}
                        <div className="col-lg-4">
                            <aside className="main-sideber">
                                {/* Author Card */}
                                <div className="news-sideber-box" style={{ borderLeft: '3px solid #B58524', position: 'relative' }}>
                                    <div className="wid-title">
                                        <h3 style={{ fontSize: '17px', fontWeight: 600, letterSpacing: '0.3px' }}>About Author</h3>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, #F4F5F7, #E8E9EC)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <i className="fa-solid fa-user" style={{ fontSize: '24px', color: '#B58524' }}></i>
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '16px', fontWeight: 600, color: '#061B39', margin: 0 }}>{blog.author}</h4>
                                            {blog.authorPosition && <p style={{ fontSize: '13px', color: '#6C6D6F', margin: '4px 0 0' }}>{blog.authorPosition}</p>}
                                        </div>
                                    </div>
                                </div>

                                {/* Post Details Card */}
                                <div className="news-sideber-box" style={{ borderLeft: '3px solid #B58524' }}>
                                    <div className="wid-title">
                                        <h3 style={{ fontSize: '17px', fontWeight: 600, letterSpacing: '0.3px' }}>Post Details</h3>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 0', borderBottom: '1px solid rgba(203,204,207,0.2)' }}>
                                            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#F4F5F7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                                <i className="fa-regular fa-calendar-days" style={{ color: '#B58524', fontSize: '14px' }}></i>
                                            </div>
                                            <div>
                                                <span style={{ fontSize: '11px', color: '#999', fontWeight: 500, letterSpacing: '0.5px' }}>DATE</span>
                                                <p style={{ fontSize: '14px', color: '#333', margin: 0, fontWeight: 500 }}>{blog.date}</p>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 0', borderBottom: '1px solid rgba(203,204,207,0.2)' }}>
                                            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#F4F5F7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                                <i className="fa-regular fa-user" style={{ color: '#B58524', fontSize: '14px' }}></i>
                                            </div>
                                            <div>
                                                <span style={{ fontSize: '11px', color: '#999', fontWeight: 500, letterSpacing: '0.5px' }}>AUTHOR</span>
                                                <p style={{ fontSize: '14px', color: '#333', margin: 0, fontWeight: 500 }}>{blog.author}</p>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 0' }}>
                                            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#F4F5F7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                                <i className="fa-regular fa-folder-open" style={{ color: '#B58524', fontSize: '14px' }}></i>
                                            </div>
                                            <div>
                                                <span style={{ fontSize: '11px', color: '#999', fontWeight: 500, letterSpacing: '0.5px' }}>CATEGORY</span>
                                                <p style={{ fontSize: '14px', color: '#333', margin: 0, fontWeight: 500 }}>{blog.category}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
