<script setup>

</script>

<template>
    <section class="p-6 ">
        <form novalidate="" class=" w-full max-w-3xl p-8 mx-auto space-y-6 rounded-md shadow ">
            <h2 class="w-full text-3xl font-bold leadi">Faites vos réservations !</h2>
            <div>
                <label for="name" class="block mb-1 ml-1">Nom</label>
                <input id="name" type="text" placeholder="Nom" required=""
                       class="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800 text-white">
            </div>
            <div>
                <label for="name" class="block mb-1 ml-1">Prénom</label>
                <input id="name" type="text" placeholder="Prénom" required=""
                       class="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800 text-white">
            </div>
            <div>
                <label for="email" class="block mb-1 ml-1">Code postal</label>
                <input id="email" type="number" placeholder="Code postal" required=""
                       class="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800 text-white">
            </div>
            <div>
                <label for="email" class="block mb-1 ml-1">Téléphone</label>
                <input id="email" type="number" placeholder="Téléphone" required=""
                       class="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800 text-white">
            </div>
            <div>
                <label for="email" class="block mb-1 ml-1">Email</label>
                <input id="email" type="email" placeholder="Email" required=""
                       class="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800 text-white">
            </div>
            <div>
                <label for="email" class="block mb-1 ml-1">Structure</label>
                <input id="email" type="email" placeholder="Structure" required=""
                       class="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800 text-white">
            </div>
            <div>
                <label for="message" class="block mb-1 ml-1">Commentaires</label>
                <textarea id="message" type="text" placeholder="Date, temps de location..."
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
const HOST = "http://localhost:5551";
export default {
    methods: {
        sendMail() {
            fetch(`${HOST}/send`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nom: "test",
                    prenom: "test",
                    adresse: "test",
                    codePostal: "test",
                    telephone: "test",
                    email: "test",
                    structure: "test",
                    comments: "test",
                }),
            }).then(async (res) => {
                console.log(res)
            });
        }
    },
}
</script>
