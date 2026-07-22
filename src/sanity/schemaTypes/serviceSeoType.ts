import { defineField, defineType } from 'sanity'
import { DynamicSeoInput } from '../components/DynamicSeoInput'

export const serviceSeoType = defineType({
  name: 'serviceSeo',
  title: 'Program SEO',
  type: 'document',
  fields: [
    defineField({
      name: 'programSlug',
      title: 'Program',
      type: 'string',
      description: 'Select the program you want to update SEO for.',
      options: {
        list: [
          { title: 'Dominica Citizenship', value: 'dominica-citizenship' },
          { title: 'Saint Kitts & Nevis Citizenship', value: 'saint-kitts-nevis-citizenship' },
          { title: 'Vanuatu Citizenship', value: 'vanuatu-citizenship' },
          { title: 'Saint Lucia Citizenship', value: 'saint-lucia-citizenship' },
          { title: 'Nauru Citizenship', value: 'nauru-citizenship' },
          { title: 'Grenada Citizenship', value: 'grenada-citizenship' },
          { title: 'Spain Residency', value: 'spain-residency' },
          { title: 'Greece Residency', value: 'greece-residency' },
          { title: 'Portugal Residency', value: 'portugal-residency' },
          { title: 'USA Residency', value: 'usa-residency' },
          { title: 'Australia Residency', value: 'australia-residency' },
          { title: 'LMIA Programs', value: 'LMIA-Programs' },
          { title: 'UK Skilled Worker Visa', value: 'uk-skilled-worker-visa' },
          { title: 'UK Creative Worker Visa', value: 'uk-creative-worker-visa' },
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
      description: 'Comma separated keywords for SEO.',
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
      title: 'programSlug',
      subtitle: 'metaTitle',
    },
    prepare({ title, subtitle }) {
      return {
        title: title ? `Program SEO: ${title}` : 'Program SEO',
        subtitle: subtitle || 'No meta title set',
      }
    },
  },
})
