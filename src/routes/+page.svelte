<script>
    import { currentUser, listenForAuthChanges } from "./app.js";

    import { onMount } from "svelte"
    

    //Component Imports

    import Logo from "./Logo.svelte";
    import RequestArea from "./RequestArea.svelte"
    import RegisterForm from "./RegisterForm.svelte";
    import LoginForm from "./LoginForm.svelte";
    import LogoutButton from "./LogoutButton.svelte";
    import SettingsModal from "./SettingsModal.svelte";
    import AuthChecker from "./AuthChecker.svelte";

    onMount(async () => {
        return listenForAuthChanges()
    })

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
