<template>
    <section>
        <h1>testing</h1>
        <canvas id="canvas" width="150" height="150"></canvas>
    </section>
</template>

<script>

export default {
    name: "Playground",
    
    mounted: function () {
        this.$nextTick(function () {
            console.log("h");
            draw();
        })
    },
};

function draw() {
    const canvas = document.getElementById("canvas");

    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        ctx.lineWidth = 5;
        
        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
        ctx.stroke();
        
        eye(ctx, 55, 65, 15);
        eye(ctx, 95, 65, 15);

        pupil(ctx, 55, 65, 10);
        pupil(ctx, 95, 65, 10);
        
        ctx.beginPath();
        ctx.arc(75, 55, 50, 1, Math.PI - 1, false);
        ctx.stroke();
    }
};

function eye(ctx, x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y-5, r, Math.PI, 0, false);
    ctx.lineTo(x+r, y+r/2);
    ctx.arc(x, y+5, r, 0, Math.PI, false);
    ctx.lineTo(x-r, y-r/2);
    ctx.stroke();
};

function pupil(ctx, x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2);
    ctx.fill();
};


</script>