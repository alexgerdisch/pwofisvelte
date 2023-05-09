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
  import Loader from "$lib/Loader.svelte";
  

  onMount(async () => {
    return listenForAuthChanges();
  });


  let settingsVisible = false;

  function toggleVisible() {
    settingsVisible = !settingsVisible
  }



</script>
<div id="app-container">
  <Logo />
  <Loader />
  
  
  {#if $currentUser}
    <div class="action-bar">
      <!-- <AuthChecker /> -->
      <button on:click={toggleVisible} class="button">Settings 🔧</button>
      <LogoutButton />
    </div>
    <RequestArea />
   {#if settingsVisible}
    <SettingsModal />
   {/if}
  {:else}
    <RegisterForm />
    <LoginForm />
  {/if}
</div>


<style>
  :global(*) {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }

  :global(body) {
    background-image: radial-gradient(circle, #2c3656, #253f5c, #1f475f, #1f4e60, #255560);
  }

  :global(.button) {
    font-size: 1rem;
    height: 30px;
    width: 120px;
    background-color: #0f5e5ed5;
    color: white;
    border-radius: 2px;
    
    border: none;
    margin: 5px;
  }
  

  #app-container {
    display: flex;
    flex-direction: column;
    align-items: center;

  }




</style>
