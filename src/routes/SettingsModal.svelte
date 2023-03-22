<script>
    import { app, currentUser } from "./app.js";
    import { getFirestore, doc, getDoc } from "firebase/firestore";


    const db = getFirestore(app);

    let settings = {};

    console.log("this is UID in settings:" + $currentUser.uid);


    const getSettings = async () => {
        const docRef = doc(db, "users", $currentUser.uid);
        const docSnap = await getDoc(docRef);
        console.log(docSnap.data())
        settings = {...docSnap.data()};
    };

    getSettings();

</script>

<div class="settings-popup">
    <h2>Profile & Settings 🔧</h2>
    {#if $currentUser != null}
    <div class="details">
        <div class="settings-label">Name:</div>
        <p class="settings-value" id="full-name">{`${settings.userFirstName} ${settings.userLastName}`}</p>
        <div class="settings-label">Name:</div>
        

    </div>
    
    {/if}

    <button on:click={e => console.log($currentUser.uid)}>Real time UID test..</button>
</div>

<style>
    .settings-label {
        font-size: .5rem;
    }
</style>