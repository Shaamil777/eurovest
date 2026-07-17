import React from 'react';
import Breadcrumb from '../../components/about/Breadcrumb';
import NewsGrid from '../../components/blog/NewsGrid';
import NewsStandard from '../../components/blog/NewsStandard';


export default function Blog() {
    return (
        <>
        <Breadcrumb />
        <NewsGrid />
        <NewsStandard />
        </>
    );
}