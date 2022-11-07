<template>
    <section>
        <h1>Tack för ditt bidrag!</h1>
        <p>Dina knapptryck har bidragit till ett tydligare resultat i mitt gymnasiearbete!</p>
        <p>Du får gärna <a href="#/image">bidra mer</a> om du har tid.</p>
        <p>Vill någon anna också bidra på denna enhet? <a href="#/" @click="Reset()">Starta om</a> här. (Alla tidigare bidrag finns kvar.)</p>
    </section>
</template>

<script>

export default {
    name: "Exit",

    methods: {
        Reset() {
            localStorage.clear();
        }
    },
};

</script>