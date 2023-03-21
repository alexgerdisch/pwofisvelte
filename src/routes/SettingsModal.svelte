<script>
    import { app, auth } from "./app.js";
    import { getFirestore, doc, getDoc } from "firebase/firestore";

    const db = getFirestore(app);

    let settingsString = "";

    console.log("this is auth:" + auth.currentUser);

    console.log("settings " + auth.currentUser?.uid);

    const getSettings = async () => {
        const docRef = doc(db, "users", auth.currentUser?.uid);
        const docSnap = await getDoc(docRef);
        settingsString = JSON.stringify(docSnap.data());
    };

    getSettings();
</script>

<div class="SettingsPopup">
    <h2>Adjust Settings 🔧</h2>
    {#if auth.currentUser}
        <p>Profile Data: {settingsString}</p>
    {/if}
</div>
