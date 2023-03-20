<script>
    import { app, auth } from "./app.js";
    import { getFirestore, doc, getDoc } from "firebase/firestore";

    const db = getFirestore(app);

    console.log("this is auth:" + auth.currentUser);

    console.log("settings " + auth.currentUser?.uid);

    // if (auth.currentUser) {
    //     const docRef = doc(db, "users", auth.currentUser.uid);
    //     const docSnap = await getDoc(docRef);
    // } else {
    //     console.log("error. cant access settings because not logged in.");
    // }
</script>

<div class="SettingsPopup">
    <h2>Adjust Settings 🔧</h2>
    {#if auth.currentUser}
        <!-- <p>Profile Data: {JSON.stringify(docSnap.data())}</p> -->
    {/if}
</div>
