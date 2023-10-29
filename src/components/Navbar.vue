<template>
  <header class="bg-yellow-300">
    <nav class="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1 w-2/3">
        <a href="" class="-m-1.5 p-1.5">
          <span class="sr-only">C'Gonflé</span>
          <img class="h-20 w-full " src="../assets/icon0.png" alt=""/>
        </a>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a v-for="item in navigation" :key="item.name" :href="item.href"
           class="text-lg font-semibold leading-6 text-gray-900">{{ item.name }}</a>
      </div>
      <div class="flex flex-1 items-center justify-end gap-x-6">
        <a href="#contact"
           class="rounded-md bg-purple-700 px-6 py-4 text-lg font-semibold text-white
           shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2
           focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Réserver maintenant</a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true"/>
        </button>
      </div>
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10"/>
      <DialogPanel
          class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center gap-x-6">
          <a href="" class="-m-1.5 p-1.5">
            <span class="sr-only">C'gonflé</span>
            <img class="h-8 w-auto" src="../assets/icon1.jpeg" alt=""/>
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true"/>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a v-for="item in navigation" :key="item.name" :href="item.href"
                 class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{
                  item.name
                }}</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script>
export default {
  methods: {
    scrollTo(section) {
      const element = this.$refs[section];
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }
}
</script>

<script setup>
import {ref} from 'vue'
import {Dialog, DialogPanel} from '@headlessui/vue'
import {Bars3Icon, XMarkIcon} from '@heroicons/vue/24/outline'

const navigation = [
  {name: 'Accueil', href: ''},
  {name: 'Nos structures', href: '#structures'},
  {name: 'Contact', href: '#contact'},
]

const mobileMenuOpen = ref(false)
</script>
