import { groq } from 'next-sanity'

export const allPostsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  "image": mainImage.asset->url,
  category,
  publishedAt,
  author,
  "authorImage": "assets/img/home-1/news/client.png",
  body
}`

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  "image": mainImage.asset->url,
  category,
  publishedAt,
  author,
  "authorImage": "assets/img/home-1/news/client.png",
  metaTitle,
  metaDescription,
  metaKeywords,
  body
}`

export const pageSeoQuery = groq`*[_type == "pageSeo" && pageName == $pageName][0] {
  metaTitle,
  metaDescription,
  metaKeywords,
  metaRobots
}`

export const serviceSeoQuery = groq`*[_type == "serviceSeo" && programSlug == $programSlug][0] {
  metaTitle,
  metaDescription,
  metaKeywords,
  metaRobots
}`
