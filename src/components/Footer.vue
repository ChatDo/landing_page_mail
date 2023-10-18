<template>
  <footer class="bg-gray-100" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32 ">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8">
          <img class="h-7" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="ChatDo" />
          <p class="text-sm leading-6 text-gray-600">Making the world a better place through constructing elegant hierarchies.</p>
          <div class="flex space-x-6">
            <a class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">Test</span>
              <component  class="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div class="mt-8 grid grid-cols-2 gap-4 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-gray-900">Solutions</h3>
              <ul role="list" class="mt-6 space-y-4">
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-gray-900">Support</h3>
              <ul role="list" class="mt-6 space-y-4">
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-gray-900">Company</h3>
              <ul role="list" class="mt-6 space-y-4">
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
              <ul role="list" class="mt-6 space-y-4">
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 border-t border-gray-900/10 pt-4 sm:mt-5 lg:mt-6">
        <p class="text-xs leading-5 text-gray-500">&copy; 2023 ChatDo, Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
</script>
