<script>
  import { app, currentUser } from "$lib/util/app.js";
  import { getFirestore, doc, getDoc } from "firebase/firestore";

  const db = getFirestore(app);

  let settings = {};
  let impacts = [];
  let pains = [];

  console.log("this is UID in settings:" + $currentUser.uid);

  const getSettings = async () => {
    const docRef = doc(db, "users", $currentUser.uid);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
    settings = { ...docSnap.data() };
    impacts = [...settings.valueDrivers];
    pains = [...settings.painPoints];
  };

  getSettings();
</script>

<div class="settings-popup">
  <h2>Profile & Settings 🔧</h2>
  {#if $currentUser}
    <div class="details">
      <div class="settings-label">Name:</div>
      <p class="settings-value" id="full-name">
        {`${settings.userFirstName} ${settings.userLastName}`}
      </p>
      <div class="settings-label">Email:</div>
      <p class="settings-value" id="email">{settings.email}</p>
      <div class="settings-label">Company:</div>
      <p class="settings-value" id="company">{settings.company}</p>
      <div class="settings-label">Industry:</div>
      <p class="settings-value" id="industry">{settings.company}</p>
      <ul class="settings-label">
        Impacts:
        {#each impacts as impact}
          <li>{impact}</li>
        {/each}
      </ul>

      <ul class="settings-label">
        Pains
        {#each pains as pain}
          <li>{pain}</li>
        {/each}
      </ul>
    </div>
  {/if}

  <button on:click={(e) => console.log($currentUser.uid)}
    >Real time UID test..</button
  >
</div>

<style>
  .settings-label {
    color: #333;
  }
</style>
