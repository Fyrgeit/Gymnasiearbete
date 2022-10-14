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

        ctx.lineWidth = 3;

        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
        ctx.stroke();

        eye(1, ctx, 55, 65, 10);
        pupil(ctx, 55, 65, 0);

        ctx.beginPath();
        ctx.arc(75, 55, 50, 1, Math.PI - 1, false);
        ctx.stroke();
    }
};

function eye(type, ctx, x, y, r) {
    switch (type) {
        case 0:
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(150 - x, y, r, 0, Math.PI * 2);
            ctx.stroke();
            break;
        case 1:
            ctx.beginPath();
            ctx.arc(x, y - 5, r, Math.PI, 0, false);
            ctx.lineTo(x + r, y + r / 2);
            ctx.arc(x, y + 5, r, 0, Math.PI, false);
            ctx.lineTo(x - r, y - r / 2);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(150 - x, y - 5, r, Math.PI, 0, false);
            ctx.lineTo(150 - x + r, y + r / 2);
            ctx.arc(150 - x, y + 5, r, 0, Math.PI, false);
            ctx.lineTo(150 - x - r, y - r / 2);
            ctx.stroke();
            break;
        default:
            break;
    }
};

function pupil(ctx, x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(150 - x, y, r, 0, Math.PI * 2);
    ctx.fill();
};


</script>