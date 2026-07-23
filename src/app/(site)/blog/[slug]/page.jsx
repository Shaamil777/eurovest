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

const portableTextComponents = {
    types: {
        image: ({ value }) => {
            if (!value?.imageUrl && !value?.asset) return null;
            const src = value.imageUrl || (value.asset?.url || '');
            return (
                <figure style={{ float: 'right', width: '45%', margin: '0 0 24px 32px' }}>
                    <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 15px 30px rgba(0,0,0,0.08)' }}>
                        <img src={src} alt={value.alt || 'Blog Image'} style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
                    </div>
                    {value.alt && <figcaption style={{ marginTop: '12px', fontSize: '14px', color: '#6B7280', fontStyle: 'italic', textAlign: 'center' }}>{value.alt}</figcaption>}
                </figure>
            );
        }
    },
    block: {
        normal: ({ children }) => <p style={{ fontSize: '1.125rem', lineHeight: 1.85, color: '#374151', marginBottom: '1.75rem', letterSpacing: '0.2px' }}>{children}</p>,
        h3: ({ children }) => (
            <h3 style={{ fontSize: '1.875rem', fontWeight: 800, color: '#111827', marginTop: '3.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '12px', letterSpacing: '-0.3px' }}>
                <span style={{ display: 'inline-block', width: '5px', height: '28px', background: 'linear-gradient(180deg, #B58524, #D4A84B)', borderRadius: '4px' }}></span>
                {children}
            </h3>
        ),
        blockquote: ({ children }) => (
            <blockquote style={{ position: 'relative', margin: '3rem 0', padding: '2rem 2.5rem', background: 'linear-gradient(145deg, #FDFBF7, #F4F0E6)', borderLeft: '4px solid #B58524', borderRadius: '0 12px 12px 0', boxShadow: '0 10px 30px rgba(181, 133, 36, 0.05)' }}>
                <i className="fa-solid fa-quote-left" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontSize: '3rem', color: 'rgba(181, 133, 36, 0.1)' }}></i>
                <div style={{ position: 'relative', zIndex: 1, fontStyle: 'italic', fontSize: '1.35rem', color: '#1F2937', lineHeight: 1.7, fontWeight: 500 }}>
                    {children}
                </div>
            </blockquote>
        )
    },
    list: {
        bullet: ({ children }) => (
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', listStyle: 'none', padding: 0, margin: '2.5rem 0' }}>
                {children}
            </ul>
        ),
        number: ({ children }) => (
            <ol style={{ paddingLeft: '1.5rem', margin: '2rem 0', fontSize: '1.125rem', lineHeight: 1.8, color: '#374151' }}>
                {children}
            </ol>
        )
    },
    listItem: {
        bullet: ({ children }) => (
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', background: '#FFFFFF', padding: '24px', borderRadius: '16px', border: '1px solid #F3F4F6', boxShadow: '0 10px 25px rgba(0,0,0,0.03)', transition: 'transform 0.3s ease' }}>
                <div style={{ marginTop: '2px', width: '32px', height: '32px', flexShrink: 0, borderRadius: '50%', background: 'linear-gradient(135deg, rgba(181, 133, 36, 0.15), rgba(212, 168, 75, 0.25))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B58524' }}>
                    <i className="fa-solid fa-arrow-right" style={{ fontSize: '14px' }}></i>
                </div>
                <span style={{ fontSize: '1.125rem', color: '#1F2937', fontWeight: 500, lineHeight: 1.6 }}>{children}</span>
            </li>
        ),
        number: ({ children }) => (
            <li style={{ marginBottom: '12px' }}>{children}</li>
        )
    }
};



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
                        <div className={blog.id && String(blog.id).startsWith('fb-') ? "col-lg-10 offset-lg-1" : "col-lg-8"}>
                            {blog.id && String(blog.id).startsWith('fb-') ? (
                                <article style={{ textAlign: 'left' }}>
                                    {/* Header Section */}
                                    <header style={{ marginBottom: '40px', textAlign: 'center' }}>
                                        {/* Category Badge */}
                                        {blog.category && (
                                            <div style={{ display: 'inline-block', padding: '8px 20px', background: 'linear-gradient(135deg, rgba(181, 133, 36, 0.1), rgba(212, 168, 75, 0.15))', color: '#B58524', borderRadius: '30px', fontSize: '14px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px', border: '1px solid rgba(181, 133, 36, 0.2)' }}>
                                                {blog.category}
                                            </div>
                                        )}

                                        {/* Title */}
                                        <h2 style={{ fontSize: '42px', fontWeight: 800, color: '#061B39', lineHeight: 1.25, marginBottom: '24px', letterSpacing: '-1px' }}>{blog.title}</h2>

                                        {/* Meta Info */}
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', color: '#6B7280', fontSize: '15px', fontWeight: 500 }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#F4F5F7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <i className="fa-solid fa-user-pen" style={{ color: '#B58524' }}></i>
                                                </div>
                                                <span style={{ color: '#111827', fontWeight: 600 }}>{blog.author}</span>
                                            </div>
                                            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#D1D5DB' }}></span>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <i className="fa-regular fa-calendar" style={{ color: '#9CA3AF' }}></i>
                                                <span>{blog.date}</span>
                                            </div>
                                        </div>
                                    </header>

                                    {/* Featured Image */}
                                    <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', position: 'relative', marginBottom: '48px' }}>
                                        <img src={blog.image} alt={blog.title} style={{ width: '100%', display: 'block', objectFit: 'cover', maxHeight: '550px' }} />
                                    </div>

                                    {/* Content */}
                                    <div style={{ fontSize: '16px', lineHeight: 1.85, color: '#374151', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                                        {Array.isArray(blog.content) ? <PortableText value={blog.content} components={portableTextComponents} /> : <p>{blog.content}</p>}
                                        <div style={{ clear: 'both' }}></div>
                                    </div>
                                </article>
                            ) : (
                                <article style={{ textAlign: 'left' }}>
                                    {/* Featured Image */}
                                    <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', marginBottom: '16px' }}>
                                        <img src={blog.image} alt={blog.title} style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
                                    </div>

                                    {/* Title */}
                                    <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#061B39', lineHeight: 1.35, marginBottom: '20px' }}>{blog.title}</h2>

                                    {/* Divider */}
                                    <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #B58524, #D4A84B)', borderRadius: '2px', marginBottom: '28px' }}></div>

                                    {/* Content */}
                                    <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#444', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                                        {Array.isArray(blog.content) ? <PortableText value={blog.content} /> : <p>{blog.content}</p>}
                                    </div>
                                </article>
                            )}
                        </div>

                        {/* Sidebar */}
                        {!(blog.id && String(blog.id).startsWith('fb-')) && (
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
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
