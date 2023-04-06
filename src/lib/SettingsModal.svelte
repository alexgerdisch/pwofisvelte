<script>
  import { currentUser } from "$lib/util/app.js";
  import { updateSettingsStore, settings } from "$lib/util/settings.js";
  import SettingsForm from "$lib/SettingsForm.svelte";

  let impacts = [];
  let pains = [];

  updateSettingsStore().then(() => {
    impacts = [...$settings.valueDrivers];
    pains = [...$settings.painPoints];
  });
</script>

<div class="settings-popup">
  <h2>Profile & Settings 🔧</h2>
  {#if $currentUser}
    <div class="details">
      <div class="settings-label">Name:</div>
      <p class="settings-value" id="full-name">
        {`${$settings.userFirstName} ${$settings.userLastName}`}
      </p>
      <div class="settings-label">Email:</div>
      <p class="settings-value" id="email">{$settings.email}</p>
      <div class="settings-label">Company:</div>
      <p class="settings-value" id="company">{$settings.company}</p>
      <div class="settings-label">Industry:</div>
      <p class="settings-value" id="industry">{$settings.industry}</p>
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
</div>

<SettingsForm />

<style>

  .details {
    color: #e9e5e5;
  }

</style>
