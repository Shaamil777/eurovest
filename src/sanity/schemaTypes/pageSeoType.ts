import { defineField, defineType } from 'sanity'
import { DynamicSeoInput } from '../components/DynamicSeoInput'

export const pageSeoType = defineType({
  name: 'pageSeo',
  title: 'Page SEO',
  type: 'document',
  fields: [
    defineField({
      name: 'pageName',
      title: 'Page Name',
      type: 'string',
      options: {
        list: [
          { title: 'Home Page', value: 'home' },
          { title: 'About Page', value: 'about' },
          { title: 'Services Page', value: 'service' },
          { title: 'Blog Page', value: 'blog' },
          { title: 'Contact Page', value: 'contact' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title (SEO)',
      type: 'string',
      description: 'The title used for search engines. Keep it under 60 characters.',
      components: { input: DynamicSeoInput },
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description (SEO)',
      type: 'text',
      description: 'The description used for search engines. Keep it under 160 characters.',
      components: { input: DynamicSeoInput },
    }),
    defineField({
      name: 'metaKeywords',
      title: 'Meta Keywords (SEO)',
      type: 'string',
      description: 'Comma separated keywords for SEO. E.g., finance, investment, eurovest.',
      components: { input: DynamicSeoInput },
    }),
    defineField({
      name: 'metaRobots',
      title: 'Meta Robots (SEO)',
      type: 'string',
      description: 'Instructions for search engine crawlers (e.g., index, follow or noindex, nofollow). Default is index, follow.',
      initialValue: 'index, follow',
    }),
  ],
  preview: {
    select: {
      title: 'pageName',
      subtitle: 'metaTitle',
    },
    prepare({ title, subtitle }) {
      return {
        title: title ? `${title.charAt(0).toUpperCase() + title.slice(1)} SEO` : 'Page SEO',
        subtitle: subtitle || 'No meta title set',
      }
    },
  },
})
