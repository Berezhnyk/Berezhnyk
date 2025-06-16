import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'Name',
      content: {
        en: 'English.',
        uk_UA: 'Ukraine',
        cz_CZ: 'Czech',
      },
      image: '/images/.png',
    },
  ]
})
