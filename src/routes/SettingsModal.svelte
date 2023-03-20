<script context="module">
    import { app, auth } from "./+page.svelte";
    import { getFirestore, doc, getDoc } from "firebase/firestore";

    const db = getFirestore(app);
    console.log('settings ' + auth.currentUser?.uid)

    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);


</script>

<div class="SettingsPopup">
    <h2>Adjust Settings 🔧</h2>
    <p>Doc Data: {JSON.stringify(docSnap.data())}</p>

</div>
