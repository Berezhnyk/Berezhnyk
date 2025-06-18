<script setup>
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue';

useHead({
})

onMounted(() => {
  useLocaleStore()
})

const { locale } = useI18n({ useScope: 'global' })

/* Testimonials */
const { data: testimonials } = await useFetch('/api/testimonials')

const testimonialItem = ref({})
const activeModal = ref(false)
const activeOverlay = ref(false)

function showTestimonial(id) {
  testimonialItem.value = testimonials.value.find(item => item.id === id)
  activeModal.value = true
  activeOverlay.value = true
}

function closeTestimonaial() {
  testimonialItem.value = {}
  activeModal.value = false
  activeOverlay.value = false
}
/* Testimonials */

/* Services */
const { data: services } = await useFetch('/api/services')

/* Services */
const { data: about } = await useFetch('/api/about')
</script>

<template>
  <article class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.about') }}
      </h2>
    </header>

    <section class="about-text">
      <ul class="about-list">
        <AboutItem v-for="about in about" :key="about.id" :about="about" />
      </ul>
    </section>

    <!-- service -->

    <section class="service">
      <br />
      <ul class="service-list">
        <ServiceItem v-for="service in services" :key="service.id" :service="service" />
      </ul>
    </section>

    <div class="modal-container" :class="{ active: activeModal }">
      <div v-show="activeModal" class="overlay" :class="{ active: activeOverlay }" />

      <section class="testimonials-modal">
        <button class="modal-close-btn" @click="closeTestimonaial">
          <Icon name="close-outline" :size="20" />
        </button>

        <div class="flex gap-5 mb-5 justify-start items-center">
          <div class="modal-avatar-box">
            <NuxtImg 
              :src="testimonialItem.image" 
              alt="Daniel lewis" 
              width="80" 
              height="80"
              format="webp"
              loading="lazy"
            />
          </div>

          <div class="modal-content">
            <h4 class="h3 modal-title">
              {{ testimonialItem.title }}
            </h4>
            <time datetime="2021-06-14">14 June, 2021</time>
          </div>
        </div>

        <div class="flex gap-5 items-start">
          <NuxtImg 
            class="my-auto hidden md:block" 
            src="/images/icon-quote.svg" 
            alt="quote icon"
            width="24"
            height="24"
            loading="lazy"
          />
          <p class="text-justify text-gray-400 text-sm md:text-md" v-html="testimonialItem.content?.[locale] || testimonialItem.content?.en" />
        </div>
        <div class="mt-2 flex justify-end text-sm text-gray-600 italic">
          Company Co.
        </div>
      </section>
    </div>
  </article>
</template>