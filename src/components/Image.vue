<template>
    <section>
        <canvas id="canvas" width="150" height="150"></canvas>
        
        <h2>What personality traits do you think this face exhibits?</h2>

        <div class="sliderContainer">
            <div class="sliderStuff">
                <h3>{{cats[0][0]}}</h3>
                <h3>{{cats[0][1]}}</h3>
            </div>
            <div class="sliderBlobs sliderStuff">
                <span /><span />
                <span /><span />
                <span />
                <span /><span />
                <span /><span />
            </div>
            <input type="range" min="-4" max="4" v-model="values[0]">
        </div>

        <div class="sliderContainer">
            <div class="sliderStuff">
                <h3>{{cats[1][0]}}</h3>
                <h3>{{cats[1][1]}}</h3>
            </div>
            <div class="sliderBlobs sliderStuff">
                <span /><span />
                <span /><span />
                <span />
                <span /><span />
                <span /><span />
            </div>
            <input type="range" min="-4" max="4" v-model="values[1]">
        </div>

        <div class="sliderContainer">
            <div class="sliderStuff">
                <h3>{{cats[2][0]}}</h3>
                <h3>{{cats[2][1]}}</h3>
            </div>
            <div class="sliderBlobs sliderStuff">
                <span /><span />
                <span /><span />
                <span />
                <span /><span />
                <span /><span />
            </div>
            <input type="range" min="-4" max="4" v-model="values[2]">
        </div>

        <div class="sliderContainer">
            <div class="sliderStuff">
                <h3>{{cats[3][0]}}</h3>
                <h3>{{cats[3][1]}}</h3>
            </div>
            <div class="sliderBlobs sliderStuff">
                <span /><span />
                <span /><span />
                <span />
                <span /><span />
                <span /><span />
            </div>
            <input type="range" min="-4" max="4" v-model="values[3]">
        </div>

        <div class="sliderContainer">
            <div class="sliderStuff">
                <h3>{{cats[4][0]}}</h3>
                <h3>{{cats[4][1]}}</h3>
            </div>
            <div class="sliderBlobs sliderStuff">
                <span /><span />
                <span /><span />
                <span />
                <span /><span />
                <span /><span />
            </div>
            <input type="range" min="-4" max="4" v-model="values[4]">
        </div>

        <p class="debug">{{values[0]}}</p>
        <p class="debug">{{values[1]}}</p>
        <p class="debug">{{values[2]}}</p>
        <p class="debug">{{values[3]}}</p>
        <p class="debug">{{values[4]}}</p>

        <div class="buttonContainer">
            <a href="#/">
                <button>Back</button>
            </a>
            <a>
                <button @click="Send()">Next</button>
            </a>
        </div>

    </section>
</template>

<script>

import shared from "../main.js";

export default {
    name: "Image",

    data() {
        return {
            values: [
                0,
                0,
                0,
                0,
                0,
            ],
            cats: [
                ['Dumb', 'Intelligent'],
                ['Lazy', 'Ambitious'],
                ['Rude', 'Nice'],
                ['Impulsive', 'Thoughtful'],
                ['Lame', 'Cool'],
            ],
        }
    },

    methods: {
        async Send() {
            await shared.updateDoc(shared.doc(shared.db, 'users', localStorage.getItem('userId')), {
                faces: shared.arrayUnion(
                    {
                        faceId: "816",
                        values: this.values,
                    },
                )
            });

            for (let i = 0; i < this.values.length; i++) {
                this.values[i] = 0;
            }
        },
    },

    mounted: function () {
        this.$nextTick(function () {
            console.log("h");
            draw();
        })
    },
}

function draw() {

    const canvas = document.getElementById("canvas");

    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        //ctx.fillStyle = "rgb(255, 0, 0)";
        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
        ctx.moveTo(65, 70);
        ctx.arc(55, 70, 10, 0, Math.PI * 2, true);
        ctx.moveTo(105, 70);
        ctx.arc(95, 70, 10, 0, Math.PI * 2, true);
        ctx.stroke();
        
        
        ctx.beginPath();
        ctx.arc(75, 55, 50, 1, Math.PI - 1, false);
        ctx.stroke();
    }
};

</script>