<template>
    <section>
        <h1>Click button to export all data from firestore</h1>

        <div class="buttonContainer">
            <button @click="Export()">Export</button>
        </div>
    </section>
</template>

<script>

import shared from "../main.js";

export default {
    name: "Export",

    methods: {
        async Export() {
            const querySnapshot = await shared.getDocs(shared.collection(shared.db, "users"));
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.data());
            });
        },
    }
}

</script>