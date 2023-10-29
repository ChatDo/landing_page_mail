<script setup>

import "@/components/Forms.vue";
</script>

<template>
    <section  class="pt-20 bg-gray-100 pb-20" id="contact">
        <form class="w-full max-w-3xl p-8 mx-auto space-y-6 rounded-md shadow-xl ">
            <h2 class="w-full text-3xl font-bold leadi">Demander un devis</h2>
            <div>
                <label for="name" class="block mb-1 ml-1">Nom</label>
                <input id="name" ref="nameInput" type="text" placeholder="Nom" required="required"
                       class="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800 text-white">
            </div>
            <div>
                <label for="name" class="block mb-1 ml-1">Prénom</label>
                <input id="name" ref="firstnameInput" type="text" placeholder="Prénom" required="required"
                       class="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800 text-white">
            </div>
            <div>
                <label for="email" class="block mb-1 ml-1">Code postal</label>
                <input id="email" ref="postalcodeInput" type="number" placeholder="Code postal" required="required"
                       class="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800 text-white">
            </div>
            <div>
                <label for="email" class="block mb-1 ml-1">Téléphone</label>
                <input id="email" ref="phoneInput" type="number" placeholder="Téléphone" required="required"
                       class="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800 text-white">
            </div>
            <div>
                <label for="email" class="block mb-1 ml-1">Email</label>
                <input id="email" ref="emailInput" type="email" placeholder="Email" required="required"
                       class="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800 text-white">
            </div>
            <div>
                <!--              TODO: CHANGE TO DROPDOWN WITH AVAILABLE STRUCTURES             -->
              <label for="email" class="block mb-1 ml-1">Structure</label>
              <select>
                <option value="Football Arena">Football Arena</option>
                <option value="Piscine avec tobogan">Piscine avec tobogan</option>
                <option value="Piscine avec tobogan et arroseur">Piscine avec tobogan et arroseur</option>
              </select>
            </div>
            <div>
                <label for="message" class="block mb-1 ml-1">Commentaires</label>
                <textarea id="message" ref="commInput" type="text" placeholder="Date, temps de location, livraison..."
                          class="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800 text-white"></textarea>
            </div>
            <div>
                <button type="button" @click="this.sendMail()"
                        class="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri dark:bg-blue-500 focus:ri hover:ri dark:text-gray-900">
                    Envoyer
                </button>
            </div>
        </form>
    </section>
</template>

<script>
const HOST = "http://localhost:3000";
export default {
    methods: {
        sendMail() {
            fetch(`${HOST}/send`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nom: this.$refs.nameInput.value,
                    prénom: this.$refs.firstnameInput.value,
                    codePostal: this.$refs.postalcodeInput.value,
                    telephone: this.$refs.phoneInput.value,
                    email: this.$refs.emailInput.value,
                    structure: this.$refs.structureInput.value,
                    comments: this.$refs.commInput.value,
                }),
            }).then(async (res) => {
                console.log(res)
            });
        }
    },
}
</script>
