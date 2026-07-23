import { client } from '../sanity/lib/client';
import { allPostsQuery, postBySlugQuery } from '../sanity/lib/queries';

const fallbackBlogs = [
    {
        id: "fb-1",
        slug: "navigating-schengen-visa-requirements-2026",
        title: "Navigating Schengen Visa Requirements in 2026: What You Need to Know",
        metaTitle: "Schengen Visa Requirements 2026 | Eurovest",
        metaDescription: "A comprehensive guide to navigating the updated Schengen Visa requirements and application processes for 2026.",
        metaKeywords: "Schengen visa, Europe travel, visa requirements, Eurovest, immigration",
        date: "July 15, 2026",
        author: "Sarah Jenkins",
        authorPosition: "Senior Immigration Consultant",
        authorImage: "assets/img/home-1/news/client.png",
        category: "Immigration",
        image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        content: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Obtaining a Schengen Visa can often feel like a daunting process, especially with the recent regulatory updates introduced in 2026. However, understanding the core requirements can significantly streamline your application and ensure a seamless entry into Europe.' }]
            },
            {
                _type: 'block',
                style: 'h3',
                children: [{ _type: 'span', text: 'Essential Documentation Updates' }]
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'First and foremost, ensuring your travel itinerary is well-documented is crucial. Consulates are now placing a higher emphasis on confirmed accommodation and clear travel routes within the Schengen area. Additionally, financial proof remains a cornerstone of a successful application.' }]
            },
            {
                _type: 'block',
                listItem: 'bullet',
                children: [{ _type: 'span', text: 'Faster Processing: New digital systems allow for quicker turnaround.' }]
            },
            {
                _type: 'block',
                listItem: 'bullet',
                children: [{ _type: 'span', text: 'Unified Requirements: Same standards apply across all 27 member states.' }]
            },
            {
                _type: 'block',
                listItem: 'bullet',
                children: [{ _type: 'span', text: 'Extended Validity: Higher chances of receiving multiple-entry visas.' }]
            },
            {
                _type: 'block',
                listItem: 'bullet',
                children: [{ _type: 'span', text: 'Family Reunification: Streamlined processes for dependent family members.' }]
            },
            {
                _type: 'image',
                imageUrl: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                alt: 'European Passport and Travel Documents'
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'At Eurovest, we highly recommend initiating your application process at least two months prior to your intended travel date. This buffer allows ample time to address any unforeseen documentation requests and ensures a stress-free preparation for your European journey. Rushing the process often leads to minor errors in the application, which can cause significant delays or even rejections under the strict new 2026 regulations. Our dedicated team of immigration experts is here to assist you at every step—from gathering the right financial statements and securing certified translations, to preparing you for potential consulate interviews. We understand that every traveler’s situation is unique, and taking a proactive approach is the single best way to guarantee a smooth and successful entry into the Schengen zone.' }]
            }
        ]
    },
    {
        id: "fb-2",
        slug: "top-european-countries-for-expats-and-investors",
        title: "Top 5 European Countries for Expats and Investors This Year",
        metaTitle: "Top European Countries for Expats | Eurovest",
        metaDescription: "Discover the top 5 European destinations for expatriates and investors looking for robust economies and high quality of life.",
        metaKeywords: "Expats in Europe, European investment, moving to Europe, immigration, business",
        date: "July 02, 2026",
        author: "Marcus Thorne",
        authorPosition: "Investment Strategist",
        authorImage: "assets/img/home-1/news/client.png",
        category: "Investment",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        content: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Europe continues to be a highly attractive destination for global citizens seeking new opportunities, both in terms of lifestyle and investment. This year, several countries stand out due to their favorable tax regimes, robust healthcare systems, and vibrant expat communities.' }]
            },
            {
                _type: 'block',
                style: 'h3',
                children: [{ _type: 'span', text: 'Why Invest in Europe Right Now?' }]
            },
            {
                _type: 'block',
                listItem: 'bullet',
                children: [{ _type: 'span', text: 'High Quality of Life: World-class healthcare and public services.' }]
            },
            {
                _type: 'block',
                listItem: 'bullet',
                children: [{ _type: 'span', text: 'Economic Stability: Strong markets with favorable investment conditions.' }]
            },
            {
                _type: 'block',
                listItem: 'bullet',
                children: [{ _type: 'span', text: 'Global Mobility: Visa-free access across the Schengen Area.' }]
            },
            {
                _type: 'block',
                listItem: 'bullet',
                children: [{ _type: 'span', text: 'Tax Incentives: Special tax regimes for new residents in specific countries.' }]
            },
            {
                _type: 'image',
                imageUrl: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                alt: 'Scenic view of a European coastal city'
            },
            {
                _type: 'block',
                style: 'h3',
                children: [{ _type: 'span', text: 'Portugal: The Golden Standard' }]
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Portugal remains a top contender, largely driven by its popular Golden Visa program and exceptional quality of life. The country offers a blend of historic charm and modern amenities, making it ideal for retirees and digital nomads alike.' }]
            },
            {
                _type: 'block',
                style: 'blockquote',
                children: [{ _type: 'span', text: 'Investors are increasingly drawn to Portugal not just for its climate, but for its thriving tech ecosystem and advantageous tax conditions for new residents.' }]
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Other notable mentions include Spain, for its rich culture and climate; Ireland, boasting a booming tech sector and English-speaking environment; and Switzerland, unparalleled in wealth management and scenic beauty. Choosing the right country depends heavily on your long-term personal and financial goals.' }]
            }
        ]
    },
    {
        id: "fb-3",
        slug: "understanding-the-eu-blue-card-benefits",
        title: "Understanding the EU Blue Card: Benefits and Eligibility",
        metaTitle: "EU Blue Card Benefits & Eligibility | Eurovest",
        metaDescription: "Everything you need to know about the EU Blue Card for highly skilled non-EU nationals.",
        metaKeywords: "EU Blue Card, European work permit, highly skilled workers, Europe immigration",
        date: "June 28, 2026",
        author: "Elena Rossi",
        authorPosition: "Corporate Relocation Expert",
        authorImage: "assets/img/home-1/news/client.png",
        category: "Work Permits",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        content: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'The EU Blue Card is a highly sought-after residence and work permit designed for highly qualified non-EU nationals. It aims to make Europe a more attractive destination for global talent by simplifying the immigration process and offering significant benefits.' }]
            },
            {
                _type: 'block',
                style: 'h3',
                children: [{ _type: 'span', text: 'Core Blue Card Advantages' }]
            },
            {
                _type: 'block',
                listItem: 'bullet',
                children: [{ _type: 'span', text: 'Equal Work Conditions: Same salary and work rights as EU citizens.' }]
            },
            {
                _type: 'block',
                listItem: 'bullet',
                children: [{ _type: 'span', text: 'Fast-Track Residency: Quicker pathway to permanent residency.' }]
            },
            {
                _type: 'block',
                listItem: 'bullet',
                children: [{ _type: 'span', text: 'Family Unification: Bring your spouse and children without delays.' }]
            },
            {
                _type: 'block',
                listItem: 'bullet',
                children: [{ _type: 'span', text: 'Mobility: Move and work in other EU countries after 12 months.' }]
            },
            {
                _type: 'image',
                imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                alt: 'Professionals meeting in a modern European office'
            },
            {
                _type: 'block',
                style: 'h3',
                children: [{ _type: 'span', text: 'Core Eligibility Criteria' }]
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'To be eligible, applicants must possess a higher education qualification or substantial professional experience, along with a binding job offer or a valid work contract in an EU Member State. The salary offered must also meet a specific threshold, which varies by country.' }]
            }
        ]
    },
    {
        id: "fb-4",
        slug: "real-estate-investment-in-spain",
        title: "Real Estate Investment in Spain: A Lucrative Opportunity",
        metaTitle: "Real Estate Investment in Spain | Eurovest",
        metaDescription: "Explore the benefits and trends of investing in the Spanish real estate market.",
        metaKeywords: "Spain real estate, property investment Europe, Spanish Golden Visa",
        date: "June 10, 2026",
        author: "Javier Fernandez",
        authorPosition: "Real Estate Consultant",
        authorImage: "assets/img/home-1/news/client.png",
        category: "Real Estate",
        image: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        content: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Spain\'s real estate market has shown remarkable resilience and steady growth, making it a prime target for international investors. Whether you are looking for a holiday home on the Costa del Sol or a lucrative rental property in Barcelona, the options are diverse and promising.' }]
            },
            {
                _type: 'image',
                imageUrl: 'https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                alt: 'Beautiful Spanish architecture and real estate'
            },
            {
                _type: 'block',
                style: 'h3',
                children: [{ _type: 'span', text: 'The Golden Visa Advantage' }]
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'One of the major draws for non-EU investors is the Spanish Golden Visa program. By investing a minimum of €500,000 in real estate, investors and their families can obtain Spanish residency, offering visa-free travel across the Schengen zone. This program has significantly fueled high-end property developments across the country.' }]
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Before investing, it is crucial to understand the local tax implications and property laws. Working with experienced consultants can help you navigate the complexities of the Spanish market, ensuring your investment is both secure and profitable.' }]
            }
        ]
    },
    {
        id: "fb-5",
        slug: "student-visas-europe-guide",
        title: "The Ultimate Guide to European Student Visas",
        metaTitle: "European Student Visas Guide | Eurovest",
        metaDescription: "A complete guide for international students seeking to study in Europe and obtain the necessary visas.",
        metaKeywords: "Student visa Europe, study abroad, European education, immigration for students",
        date: "May 22, 2026",
        author: "Sarah Jenkins",
        authorPosition: "Senior Immigration Consultant",
        authorImage: "assets/img/home-1/news/client.png",
        category: "Education",
        image: "https://images.unsplash.com/photo-1473951574080-01fe45ec8643?q=80&w=1204&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Europe is home to some of the world\'s oldest and most prestigious universities. For international students, gaining admission is just the first step; securing a student visa is the crucial next hurdle. The process can vary significantly from one country to another.' }]
            },
            {
                _type: 'image',
                imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                alt: 'European university campus life'
            },
            {
                _type: 'block',
                style: 'h3',
                children: [{ _type: 'span', text: 'Preparing Your Application' }]
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Generally, you will need a letter of acceptance from a recognized educational institution, proof of sufficient financial resources to cover your tuition and living expenses, and comprehensive health insurance. In some countries, you may also need to demonstrate proficiency in the local language or English.' }]
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'A major advantage of studying in the Schengen area is the ability to travel freely between member states during your studies. Furthermore, many countries offer post-graduation work visas, allowing you to kickstart your career in Europe after completing your degree.' }]
            }
        ]
    },
    {
        id: "fb-6",
        slug: "corporate-relocation-to-germany",
        title: "Seamless Corporate Relocation to Germany: A Checklist",
        metaTitle: "Corporate Relocation to Germany | Eurovest",
        metaDescription: "An essential checklist for businesses planning to relocate their operations or staff to Germany.",
        metaKeywords: "Corporate relocation, Germany business, expat employees, German work visa",
        date: "May 05, 2026",
        author: "Marcus Thorne",
        authorPosition: "Investment Strategist",
        authorImage: "assets/img/home-1/news/client.png",
        category: "Corporate Services",
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        content: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Germany\'s robust economy and central location make it a top choice for corporate expansion in Europe. However, relocating a business or moving employees requires meticulous planning and adherence to strict German regulations.' }]
            },
            {
                _type: 'image',
                imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                alt: 'Modern corporate buildings in Frankfurt'
            },
            {
                _type: 'block',
                style: 'h3',
                children: [{ _type: 'span', text: 'Work Permits and Taxation' }]
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'A key aspect of corporate relocation is managing employee visas and work permits. Germany offers several pathways, including the standard work visa, the EU Blue Card for highly skilled professionals, and intra-corporate transfer (ICT) cards. Ensuring your staff meets the criteria for these permits is essential for a smooth transition.' }]
            },
            {
                _type: 'block',
                style: 'blockquote',
                children: [{ _type: 'span', text: 'Navigating local employment laws proactively is critical. An expert corporate consultant can mitigate risks associated with new labor markets.' }]
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Beyond visas, businesses must consider corporate taxation, employment laws, and finding suitable commercial real estate. Partnering with a specialized consultancy firm can alleviate the administrative burden, allowing your team to focus on establishing a successful presence in the German market.' }]
            }
        ]
    }
];

export const getBlogs = async () => {
    try {
        const posts = await client.fetch(allPostsQuery, {}, { next: { revalidate: 10 } });
        
        let formattedPosts = [];
        if (posts && posts.length > 0) {
            formattedPosts = posts.map(post => ({
                ...post,
                id: post._id,
                date: post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Unknown Date',
                content: post.body
            }));
        }

        return [...formattedPosts, ...fallbackBlogs];
    } catch (error) {
        console.error("Error fetching blogs from Sanity:", error);
        return fallbackBlogs;
    }
};

export const getBlogBySlug = async (slug) => {
    try {
        const post = await client.fetch(postBySlugQuery, { slug }, { next: { revalidate: 10 } });
        
        if (!post) {
            const fallback = fallbackBlogs.find(b => b.slug === slug);
            if (fallback) return fallback;
            return null;
        }
        
        return {
            ...post,
            id: post._id,
            date: post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Unknown Date',
            content: post.body
        };
    } catch (error) {
        console.error("Error fetching blog by slug:", error);
        const fallback = fallbackBlogs.find(b => b.slug === slug);
        if (fallback) return fallback;
        return null;
    }
};
