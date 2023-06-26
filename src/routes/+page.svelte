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
  import Progress from "$lib/Progress.svelte";
  import SessionChecker from "$lib/SessionChecker.svelte";
  

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
  <Progress />
  
  
  {#if $currentUser}
    <div class="action-bar">
      <!-- <AuthChecker /> -->
      <SessionChecker />
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
<section class="footer">
    ⓒ Pwofi 2023
</section>
</div>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans&display=swap');
  :global(*) {
    font-family: 'Instrument Sans', sans-serif;
  }

  :global(body) {
    background-color: bisque;
  }

  :global(.button) {
    font-size: 1rem;
    height: 30px;
    width: 120px;
    background-color: rgb(0, 27, 59);
    color: rgb(255, 245, 233);
    border-radius: 2px;
    
    border: none;
    margin: 5px;
  }
  

  #app-container {
    display: flex;
    flex-direction: column;
    align-items: center;

  }

  .footer {
    margin: 30px;
    font-size: .6rem;
  }




</style>
