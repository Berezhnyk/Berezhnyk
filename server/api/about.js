import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      description: {
        en: `For the past 8 years, I\'ve transformed customer requirements into valuable code. My primary expertise lies in \.Net Core and MySQL, predominantly within the trading sector. I\'m also acquainted with contemporary technologies like Docker, AWS, and Kubernetes. I possess substantial experience with Angular, spanning roughly 2 years, and I\'ve been advancing my skills in Vue for about a year now.`,
        uk_UA: 'Протягом останніх 8 років я перетворював вимоги клієнтів на код, який приносив цінність продукту. Моя основна експертиза полягає в .Net Core та MySQL, переважно в секторі торгівлі. Я також знайомий з сучасними технологіями, такими як Docker, AWS та Kubernetes. Маю значний досвід роботи з Angular, приблизно 2 роки, зараз я активно вивчаю Vue.',
      },
    },
  ]
})
