import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 0,
      title: 'Vue',
      description: {
        en: 'I use Vue, a progressive JavaScript framework, to create interactive and dynamic web interfaces.',
        uk_UA: 'Я використовую Vue, прогресивний JavaScript-фреймворк, щоб створювати інтерактивні та динамічні веб-інтерфейси.',
      },
      icon: 'devicon:vuejs',
      image: null,
    },
    {
      id: 1,
      title: '.Net Core',
      description: {
        en: 'I use .Net Core, an open-source framework by Microsoft, for crafting modern, cross-platform applications predominantly with C#.',
        uk_UA: 'Я використовую .Net Core, відкритий фреймворк від Microsoft, для створення сучасних, кросплатформених додатків, переважно на C#.',
      },
      icon: 'devicon:dotnetcore',
      image: null,
    },
    {
      id: 2,
      title: 'Azure',
      description: {
        en: 'I utilyze Azure, Microsoft\'s cloud computing service, to deploy, manage, and scale applications on a global scale.',
        uk_UA: 'Я використовую Azure, хмарний обчислювальний сервіс від Microsoft, щоб розгортати, управляти та масштабувати додатки на глобальному рівні.',
      },
      icon: 'devicon:azure',
      image: null,
    }
  ]
})
