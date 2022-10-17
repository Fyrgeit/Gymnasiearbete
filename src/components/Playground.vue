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

        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
        ctx.stroke();

        let eyeType = 1;
        let eyeSize = 0.8;
        let pupilSize = 0.8;

        eye(eyeType, ctx, 55, 65, eyeSize, pupilSize);

        ctx.beginPath();
        ctx.arc(75, 55, 50, 1, Math.PI - 1, false);
        ctx.stroke();
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
    }
};


</script>