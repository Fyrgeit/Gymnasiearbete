<template>
    <section>
        <h1>Välkommen!</h1>

        <form action="">
            <h2>Vad är ditt kön?</h2>
            <input type="radio" id="g0" value="male" v-model="gender" />
            <label for="g0">{{ genders[0] }}</label><br />
            <input type="radio" id="g1" value="female" v-model="gender" />
            <label for="g1">{{ genders[1] }}</label><br />
            <input type="radio" id="g2" value="other" v-model="gender" />
            <label for="g2">{{ genders[2] }}</label><br />
        </form>

        <form action="">
            <h2>Hur gammal är du?</h2>
            <input type="radio" id="a0" value="14-" v-model="age" />
            <label for="a0">{{ ages[0] }}</label><br />
            <input type="radio" id="a1" value="15-17" v-model="age" />
            <label for="a1">{{ ages[1] }}</label><br />
            <input type="radio" id="a2" value="18-20" v-model="age" />
            <label for="a2">{{ ages[2] }}</label><br />
            <input type="radio" id="a3" value="21-25" v-model="age" />
            <label for="a3">{{ ages[3] }}</label><br />
            <input type="radio" id="a4" value="26-35" v-model="age" />
            <label for="a4">{{ ages[4] }}</label><br />
            <input type="radio" id="a5" value="36+" v-model="age" />
            <label for="a5">{{ ages[5] }}</label><br />
            <input type="radio" id="a6" value="other" v-model="age" />
            <label for="a6">{{ ages[6] }}</label><br />
        </form>

        <!-- <p class="debug">{{ gender }}, {{ age }}</p>
        <p class="debug">userId: {{ userId }}</p>
        <button @click="clear()" class="debug">clear localStorage</button> -->

        <a href="#/intro">
            <button @click="send()">Nästa</button>
        </a>
    </section>
</template>

<script>

import shared from "../main.js";

export default {
    name: "Main",

    data() {
        return {
            genders: ["Man", "Kvinna", "Annat/Svara ej"],

            ages: [
                "Yngre än 14",
                "15-17",
                "18-20",
                "21-25",
                "26-35",
                "Äldre än 36",
                "Svara ej",
            ],

            gender: "other",
            age: "other",
            userId: localStorage.getItem('userId'),
        };
    },

    methods: {
        async send() {
            if (localStorage.getItem('userId') === null) {
                localStorage.setItem('userId', makeid(8));
            }

            await shared.setDoc(shared.doc(shared.db, 'users', localStorage.getItem('userId')), {
                gender: this.gender,
                age: this.age,
            },
                { merge: true });

            this.gender = "other";
            this.age = "other";
            this.userId = localStorage.getItem('userId');
        },

        clear() {
            localStorage.clear();
            this.userId = localStorage.getItem('userId');
        },
    },
};

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

</script>