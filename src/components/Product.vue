<template>
    <div class="bg-gray-200" id="structures">
        <div class="relative py-5">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
                <div class="w-full border-t border-gray-300"/>
            </div>
            <div class="relative flex justify-center">
                <span class="px-3 text-base font-bold leading-6 text-gray-900 text-2xl bg-gray-200">Nos structures</span>
            </div>
        </div>
        <div>
            <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-18 lg:max-w-7xl lg:px-8">
                <h2 id="products-heading" class="sr-only">Products</h2>
                <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    <a v-for="product in products" :key="product.id" :href="product.href" class="group">
                        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
                            <img :src="product.imageSrc" :alt="product.imageAlt"
                                 class="h-full w-full object-cover object-center group-hover:opacity-75"/>
                        </div>
                        <div class="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                            <h3>{{ product.name }}</h3>
                            <p>{{ product.price }}</p>
                        </div>
                        <!--          <p class="mt-1 text-sm italic text-gray-500">{{ product.description }}</p>-->
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const products = [
    {
        id: 1,
        name: 'Football Arena',
        href: '#',
        price: '13 €',
        description: '3 sizes available',
        imageSrc: 'https://mail.google.com/mail/u/0?ui=2&ik=eb36328383&attid=0.1&permmsgid=msg-f:1775898419718542822&th=18a54234208055e6&view=att&disp=safe&realattid=f_lm1iq5850',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 2,
        name: 'Piscine avec tobogan',
        href: '#',
        price: '64 €',
        description: 'Walnut',
        imageSrc: 'https://mail.google.com/mail/u/0?ui=2&ik=eb36328383&attid=0.3&permmsgid=msg-f:1775898419718542822&th=18a54234208055e6&view=att&disp=safe&realattid=f_lm1iq5ad3',
        imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
    },
    {
        id: 3,
        name: 'Piscine avec tobogan et arroseur',
        href: '#',
        price: '$32',
        description: 'Heather Gray',
        imageSrc: 'https://mail.google.com/mail/u/0?ui=2&ik=eb36328383&attid=0.4&permmsgid=msg-f:1775898419718542822&th=18a54234208055e6&view=att&disp=safe&realattid=f_lm1iq5a32',
        // imageSrc: 'https://mail.google.com/mail/u/0?ui=2&ik=eb36328383&attid=0.5&permmsgid=msg-f:1775898419718542822&th=18a54234208055e6&view=att&disp=safe&realattid=f_lm1iq5ao4',
        imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    // {
    //   id: 1,
    //   name: 'Focus Paper Refill',
    //   href: '#',
    //   price: '$13',
    //   description: '3 sizes available',
    //   imageSrc: 'https://mail.google.com/mail/u/0?ui=2&ik=eb36328383&attid=0.6&permmsgid=msg-f:1775898419718542822&th=18a54234208055e6&view=att&disp=safe&realattid=f_lm1iq5aw5',
    //   imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    // },
    // {
    //   id: 2,
    //   name: 'Focus Card Holder',
    //   href: '#',
    //   price: '$64',
    //   description: 'Walnut',
    //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-02.jpg',
    //   imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
    // },
]
</script>
