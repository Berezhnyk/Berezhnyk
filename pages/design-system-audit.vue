<template>
  <div class="min-h-screen bg-paper-100 p-8 text-ranko-900">
    <!-- Header Section -->
    <header class="mb-12 border-b border-paper-300 pb-6">
      <h1 class="text-5xl font-bold mb-4">Design System Visual Audit</h1>
      <p class="text-ranko-600 text-lg italic">Verifying the core visual language of the 'paper' design system.</p>
    </header>

    <!-- Color Palette Section -->
    <section class="mb-16">
      <h2 class="text-3xl font-semibold mb-6 border-l-4 border-primary pl-4">Color Tokens</h2>
      
      <div class="space-y-8">
        <div>
          <h3 class="text-xl font-medium mb-3 text-ranko-700">Paper Palette</h3>
          <div class="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
            <div v-for="level in paperLevels" :key="level" class="space-y-2">
              <div :class="['h-16 w-full rounded-lg shadow-sm border border-black/5', `bg-paper-${level}`]"></div>
              <div class="text-[10px] font-mono text-center text-ranko-500">{{ level }}</div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-xl font-medium mb-3 text-ranko-700">Ranko Palette</h3>
          <div class="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
            <div v-for="level in rankoLevels" :key="level" class="space-y-2">
              <div :class="['h-16 w-full rounded-lg shadow-sm border border-black/5', `bg-ranko-${level}`]"></div>
              <div class="text-[10px] font-mono text-center text-ranko-500">{{ level }}</div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-xl font-medium mb-3 text-ranko-700">Brand & Semantic Colors</h3>
          <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div v-for="color in brandColors" :key="color.name" class="space-y-2 text-center">
              <div :class="['h-16 w-full rounded-lg shadow-sm border border-black/5', color.class]"></div>
              <div class="text-xs font-mono uppercase text-ranko-600">{{ color.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Typography Section -->
    <section class="mb-16">
      <h2 class="text-3xl font-semibold mb-6 border-l-4 border-primary pl-4">Typography Scale</h2>
      <div class="bg-paper-50 p-8 rounded-2xl border border-paper-200 space-y-6">
        <div v-for="size in typographyScale" :key="size.label" class="flex items-baseline gap-4 border-b border-paper-200 pb-2 last:border-none">
          <span class="w-32 text-sm font-mono text-ranko-500">{{ size.label }}</span>
          <span :class="['font-poppins', size.class]" :style="{ fontSize: size.fontSize }">
            {{ size.text }}
          </span>
        </div>
      </div>
    </section>

    <!-- Texture & Component Section -->
    <section class="mb-16">
      <h2 class="text-3xl font-semibold mb-6 border-l-4 border-primary pl-4">Texture & Interaction</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Paper Texture Test -->
        <div class="p-8 rounded-2xl bg-white shadow-xl border border-paper-200 relative overflow-hidden min-h-[300px]">
          <div class="absolute inset-0 paper-texture-overlay pointer-events-none"></div>
          <div class="relative z-10">
            <h3 class="text-2xl font-bold mb-4">Paper Texture Application</h3>
            <p class="mb-6 text-ranko-700 leading-relaxed">
              This container demonstrates how the organic SVG noise filter interacts with solid backgrounds. 
              The <code class="bg-paper-200 px-1 rounded">.paper-texture-overlay</code> uses a multiply blend mode to add tactile depth without obscuring readability.
            </p>
            <button class="px-6 py-2 bg-primary text-white rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg">
              Interactive Button
            </button>
          </div>
        </div>

        <!-- Particle Background Test -->
        <div class="p-8 rounded-2xl bg-ranko-900 text-paper-50 shadow-xl relative overflow-hidden min-h-[300px]">
          <div class="absolute inset-0 global-particle-bg pointer-events-none"></div>
          <div class="relative z-10">
            <h3 class="text-2xl font-bold mb-4 text-ranko-100">Particle Background</h3>
            <p class="mb-6 text-paper-300 leading-relaxed">
              This container tests the <code class="bg-ranko-800 px-1 rounded">.global-particle-bg</code> which provides a subtle, animated depth layer using radial gradients and keyframe animations. It's designed to feel organic and non-distracting.
            </p>
            <div class="flex gap-2">
              <span class="px-3 py-1 bg-ranko-700 rounded-full text-xs font-mono">Animated</span>
              <span class="px-3 py-1 bg-ranko-800 rounded-full text-xs font-mono">Layered</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="text-center text-ranko-400 text-sm pb-12">
      Design System Audit Page — Part of M001/S01
    </footer>
  </div>
</template>

<script setup>
const paperLevels = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
const rankoLevels = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];

const brandColors = [
  { name: 'Primary', class: 'bg-primary' },
  { name: 'Vue', class: 'bg-vue' },
  { name: 'Laravel', class: 'bg-laravel' },
  { name: 'HTML5', class: 'bg-html5' },
  { name: 'CSS3', class: 'bg-css3' }
];

const typographyScale = [
  { label: 'xs', fontSize: '0.75rem', class: 'text-xs', text: 'The quick brown fox jumps over the lazy dog' },
  { label: 'sm', fontSize: '0.875rem', class: 'text-sm', text: 'The quick brown fox jumps over the lazy dog' },
  { label: 'base', fontSize: '1rem', class: 'text-base', text: 'The quick brown fox jumps over the lazy dog' },
  { label: 'md', fontSize: '1.25rem', class: 'text-xl', text: 'The quick brown fox jumps over the lazy dog' },
  { label: 'lg', fontSize: '1.5rem', class: 'text-2xl', text: 'The quick brown fox jumps over the lazy dog' },
  { label: 'xl', fontSize: '2rem', class: 'text-4xl', text: 'The quick brown fox jumps over the lazy dog' },
  { label: '2xl', fontSize: '2.5rem', class: 'text-5xl', text: 'The quick brown fox jumps over the lazy dog' },
  { label: '3xl', fontSize: '3rem', class: 'text-6xl', text: 'The quick brown fox jumps over the lazy dog' },
];
</script>
