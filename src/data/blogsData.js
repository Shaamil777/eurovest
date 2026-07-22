import { client } from '../sanity/lib/client';
import { allPostsQuery, postBySlugQuery } from '../sanity/lib/queries';

export const getBlogs = async () => {
    try {
        const posts = await client.fetch(allPostsQuery, {}, { next: { revalidate: 10 } });
        
        // Format dates correctly for the frontend
        return posts.map(post => ({
            ...post,
            id: post._id,
            date: post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Unknown Date',
            content: post.body // We will render portable text later, or pass it directly
        }));
    } catch (error) {
        console.error("Error fetching blogs from Sanity:", error);
        return [];
    }
};

export const getBlogBySlug = async (slug) => {
    try {
        const post = await client.fetch(postBySlugQuery, { slug }, { next: { revalidate: 10 } });
        if (!post) return null;
        
        return {
            ...post,
            id: post._id,
            date: post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Unknown Date',
            content: post.body
        };
    } catch (error) {
        console.error("Error fetching blog by slug:", error);
        return null;
    }
};
