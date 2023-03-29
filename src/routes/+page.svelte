<script>
  import { currentUser, listenForAuthChanges } from "$lib/util/app.js";

  import { onMount } from "svelte";

  //Component Imports

  import Logo from "$lib/Logo.svelte";
  import RequestArea from "$lib/RequestArea.svelte";
  import RegisterForm from "$lib/RegisterForm.svelte";
  import LoginForm from "$lib/LoginForm.svelte";
  import LogoutButton from "$lib/LogoutButton.svelte";
  import SettingsModal from "$lib/SettingsModal.svelte";
  import AuthChecker from "$lib/AuthChecker.svelte";

  onMount(async () => {
    return listenForAuthChanges();
  });
</script>

<Logo />
<h1>Welcome to Pwofi!</h1>

<AuthChecker />

{#if $currentUser}
  <RequestArea />
  <SettingsModal />
  <LogoutButton />
{:else}
  <RegisterForm />
  <LoginForm />
{/if}

<style>
  :global(*) {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
</style>
