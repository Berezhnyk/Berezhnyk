import { defineEventHandler } from 'h3'
import { aboutData } from '~/data/about.js'

export default defineEventHandler(() => {
  return aboutData
})
