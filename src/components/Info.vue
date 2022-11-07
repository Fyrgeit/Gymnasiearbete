<template>
    <div class="info" :class="{ infoExpand: info }" @click="toggle()">
        <img :class="{ imgHide: info }" src="/src/assets/about.png" alt="">
        <div class="infoContent" :class="{ infoContentExpand: info }">
            <h2 class="x">X</h2>
            <h2>Vad är detta för projekt?</h2>
            <p>Det här är ett gymnasiearbete som undersöker vilka faktorer i en tecknad karaktärs ögon som är mer eller
                mindre betydande för hur ansiktets personlighet uppfattas.</p>
            <p>Syftet är att kunna utforma bättre riktlinjer för karaktärsdesign.</p>
            <a href="https://github.com/Fyrgeit/Gymnasiearbete">GitHub repository</a>
        </div>
    </div>
</template>

<script>

export default {
    name: "Info",

    data() {
        return {
            info: false,
        };
    },

    methods: {
        toggle() {
            this.info = !this.info;
        },
    },
};

</script>