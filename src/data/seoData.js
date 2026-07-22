import { client } from '../sanity/lib/client';
import { pageSeoQuery, serviceSeoQuery } from '../sanity/lib/queries';

export const getPageSeo = async (pageName) => {
    try {
        const seoData = await client.fetch(pageSeoQuery, { pageName }, { next: { revalidate: 10 } });
        return seoData || null;
    } catch (error) {
        console.error(`Error fetching SEO data for ${pageName}:`, error);
        return null;
    }
};

export const getServiceSeo = async (programSlug) => {
    try {
        const seoData = await client.fetch(serviceSeoQuery, { programSlug }, { next: { revalidate: 10 } });
        return seoData || null;
    } catch (error) {
        console.error(`Error fetching SEO data for program ${programSlug}:`, error);
        return null;
    }
};
