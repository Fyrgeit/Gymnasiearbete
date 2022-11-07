<template>
    <section>
        <canvas id="canvas" width="150" height="150"></canvas>

        <h2>Vilka personlighetsdrag tycker du detta ansiktet har?</h2>

        <div class="sliderContainer">
            <div class="sliderLabels">
                <h3>{{ cats[0][0] }}</h3>
                <h3>{{ cats[0][1] }}</h3>
                <h3>{{ cats[0][2] }}</h3>
            </div>
            <div class="sliderBlobs">
                <span /><span />
                <span /><span />
                <span />
                <span /><span />
                <span /><span />
            </div>
            <input type="range" min="-4" max="4" v-model="sliderInputs[0]">
        </div>

        <div class="sliderContainer">
            <div class="sliderLabels">
                <h3>{{ cats[1][0] }}</h3>
                <h3>{{ cats[1][1] }}</h3>
                <h3>{{ cats[1][2] }}</h3>
            </div>
            <div class="sliderBlobs">
                <span /><span />
                <span /><span />
                <span />
                <span /><span />
                <span /><span />
            </div>
            <input type="range" min="-4" max="4" v-model="sliderInputs[1]">
        </div>

        <div class="sliderContainer">
            <div class="sliderLabels">
                <h3>{{ cats[2][0] }}</h3>
                <h3>{{ cats[2][1] }}</h3>
                <h3>{{ cats[2][2] }}</h3>
            </div>
            <div class="sliderBlobs">
                <span /><span />
                <span /><span />
                <span />
                <span /><span />
                <span /><span />
            </div>
            <input type="range" min="-4" max="4" v-model="sliderInputs[2]">
        </div>

        <div class="sliderContainer">
            <div class="sliderLabels">
                <h3>{{ cats[3][0] }}</h3>
                <h3>{{ cats[3][1] }}</h3>
                <h3>{{ cats[3][2] }}</h3>
            </div>
            <div class="sliderBlobs">
                <span /><span />
                <span /><span />
                <span />
                <span /><span />
                <span /><span />
            </div>
            <input type="range" min="-4" max="4" v-model="sliderInputs[3]">
        </div>

        <div class="sliderContainer">
            <div class="sliderLabels">
                <h3>{{ cats[4][0] }}</h3>
                <h3>{{ cats[4][1] }}</h3>
                <h3>{{ cats[4][2] }}</h3>
            </div>
            <div class="sliderBlobs">
                <span /><span />
                <span /><span />
                <span />
                <span /><span />
                <span /><span />
            </div>
            <input type="range" min="-4" max="4" v-model="sliderInputs[4]">
        </div>

        <!-- <p class="debug">Eye size: {{ eyeSize }}</p>
        <p class="debug">Pupil size: {{ pupilSize }}</p>
        <p class="debug">Eye type: {{ eyeType }}</p> -->

        <p v-if="alert" class="alert">Du har inte ändrat några värden. Är du säker på att du vill fortsätta?</p>
        
        <div v-if="!loading" class="buttonContainer">
            <a href="#/exit">
                <button>Avsluta</button>
            </a>
            <a>
                <button @click="Send()">Nästa</button>
            </a>
        </div>

        <img v-if="loading" class="loading" src="/src/assets/loading.webp" alt="Loading icon">
    </section>
</template>

<script>

import shared from "../main.js";

export default {
    name: "Image",

    data() {
        return {
            eyeSize: Math.floor(Math.random() * 10 + 1) / 10,
            pupilSize: Math.floor(Math.random() * 10 + 1) / 10,
            eyeType: Math.floor(Math.random() * 4),

            alert: false,
            loading: false,

            sliderInputs: [
                0,
                0,
                0,
                0,
                0,
            ],

            cats: [
                ['Dum', 'Neutral', 'Intelligent'],
                ['Lat', 'Neutral', 'Ambitiös'],
                ['Taskig', 'Neutral', 'Snäll'],
                ['Impulsiv', 'Neutral', 'Eftertänksam'],
                ['Mesig', 'Neutral', 'Cool'],
            ],
        }
    },

    methods: {
        async Send() {
            let n = 0;

            for (let i = 0; i < this.sliderInputs.length; i++) {
                this.sliderInputs[i] = parseInt(this.sliderInputs[i], 10);

                if (this.sliderInputs[i] == 0) {
                    n++;
                }
            }

            if (n == 5 && this.alert == false) {
                this.alert = true;
            }
            else {
                this.alert = false;

                this.loading = true;

                const timestamp = new Date().getTime();
                const date = new Date(timestamp);

                let get = JSON.parse(localStorage.getItem("count"));
                if (get == null) {
                    get = 0;
                }
                let set = JSON.stringify(get + 1);

                localStorage.setItem("count", set);

                await shared.updateDoc(shared.doc(shared.db, 'users', localStorage.getItem('userId')), {
                    faces: shared.arrayUnion(
                        {
                            timestamp: date,

                            count: get,

                            face: {
                                eyeSize: this.eyeSize,
                                pupilSize: this.pupilSize,
                                eyeType: this.eyeType,
                            },

                            values: this.sliderInputs,
                        },
                    )
                });

                for (let i = 0; i < this.sliderInputs.length; i++) {
                    this.sliderInputs[i] = 0;
                }

                this.eyeSize = Math.ceil(Math.sqrt(Math.random()) * 10) / 10;
                this.pupilSize = Math.ceil(Math.sqrt(Math.random()) * 10) / 10;
                this.eyeType = Math.floor(Math.random() * 4);
                draw(this.eyeSize, this.pupilSize, this.eyeType);

                this.loading = false;

                window.scrollTo(0, 0);
            }
        },
    },

    mounted() {
        console.log(this.eyeSize);
        draw(this.eyeSize, this.pupilSize, this.eyeType);
    }
};

function draw(eyeSize, pupilSize, eyeType) {

    const canvas = document.getElementById("canvas");

    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(75, 55, 50, 1, Math.PI - 1, false);
        ctx.stroke();

        eye(+eyeType, ctx, 55, 65, eyeSize, pupilSize);
    }
};

function eye(type, ctx, x, y, r, p) {
    switch (type) {
        case 0:
            r *= 18;
            p *= 1;

            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(150 - x, y, r, 0, Math.PI * 2);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(x, y, r * p, 0, Math.PI * 2);
            ctx.fill();

            ctx.beginPath();
            ctx.arc(150 - x, y, r * p, 0, Math.PI * 2);
            ctx.fill();
            break;
        case 1:
            r *= 18;
            p *= 1;

            ctx.beginPath();
            ctx.arc(x, y - r / 2, r, Math.PI, 0, false);
            ctx.lineTo(x + r, y + r / 2);
            ctx.arc(x, y + r / 2, r, 0, Math.PI, false);
            ctx.lineTo(x - r, y - r / 2);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(150 - x, y - r / 2, r, Math.PI, 0, false);
            ctx.lineTo(150 - x + r, y + r / 2);
            ctx.arc(150 - x, y + r / 2, r, 0, Math.PI, false);
            ctx.lineTo(150 - x - r, y - r / 2);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(x, y, r * p, 0, Math.PI * 2);
            ctx.fill();

            ctx.beginPath();
            ctx.arc(150 - x, y, r * p, 0, Math.PI * 2);
            ctx.fill();
            break;
        case 2:
            r *= 10;
            p *= 1.5;

            ctx.beginPath();
            ctx.arc(x, y + r * 0.58, r * 2, Math.PI * 2 - 0.3, Math.PI + 0.3, true);
            ctx.arc(x, y - r * 0.58, r * 2, Math.PI - 0.3, 0.3, true);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(150 - x, y + r * 0.58, r * 2, Math.PI * 2 - 0.3, Math.PI + 0.3, true);
            ctx.arc(150 - x, y - r * 0.58, r * 2, Math.PI - 0.3, 0.3, true);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(x, y, r * p, 0, Math.PI * 2);
            ctx.fill();

            ctx.beginPath();
            ctx.arc(150 - x, y, r * p, 0, Math.PI * 2);
            ctx.fill();
            break;
        case 3:
            r *= 11;
            p *= 1.1;

            ctx.beginPath();
            ctx.arc(x, y + r * 0.95, r * 2, Math.PI * 2 - 0.5, Math.PI + 0.5, true);
            ctx.arc(x, y - r * 0.95, r * 2, Math.PI - 0.5, 0.5, true);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(150 - x, y + r * 0.95, r * 2, Math.PI * 2 - 0.5, Math.PI + 0.5, true);
            ctx.arc(150 - x, y - r * 0.95, r * 2, Math.PI - 0.5, 0.5, true);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(x, y, r * p, 0, Math.PI * 2);
            ctx.fill();

            ctx.beginPath();
            ctx.arc(150 - x, y, r * p, 0, Math.PI * 2);
            ctx.fill();
            break;
        default:
            break;
    };
};

</script>