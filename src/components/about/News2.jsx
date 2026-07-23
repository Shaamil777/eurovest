import React from "react";
import News from '../home/News';
import { getBlogs } from '@/data/blogsData';

export default async function News2(){
    const allBlogs = await getBlogs();
    const newsData = allBlogs.slice(0, 3).map((item, index) => ({
        ...item,
        delay: `.${3 + index * 2}s`
    }));

    return (
        <News newsData={newsData} />
    )
}