import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'John Smith',
      content: {
        en: 'Ivan is an exceptional developer with strong technical skills. His attention to detail and problem-solving abilities make him a valuable team member.',
        uk_UA: 'Іван - виняткового розробник з сильними технічними навичками. Його увага до деталей та здібності розв\'язувати проблеми роблять його цінним членом команди.',
        cz_CZ: 'Ivan je výjimečný vývojář se silnými technickými dovednostmi. Jeho pozornost k detailům a schopnost řešit problémy z něj činí cenného člena týmu.',
      },
      image: '/images/avatar-200.webp',
    },
    {
      id: 2,
      title: 'Sarah Johnson',
      content: {
        en: 'Working with Ivan has been a great experience. He delivers high-quality code and is always willing to help the team.',
        uk_UA: 'Робота з Іваном була чудовим досвідом. Він створює якісний код і завжди готовий допомогти команді.',
        cz_CZ: 'Práce s Ivanem byla skvělá zkušenost. Dodává kvalitní kód a vždy je ochoten pomoci týmu.',
      },
      image: '/images/avatar-200.webp',
    },
  ]
})
