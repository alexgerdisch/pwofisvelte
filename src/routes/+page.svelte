<script>
    import { auth } from "./app.js";

    import { writable } from "svelte/store";

    import { onMount } from "svelte"
    

    //Component Imports

    import Logo from "./Logo.svelte";
    import ActionBar from "./ActionBar.svelte";
    import RegisterForm from "./RegisterForm.svelte";
    import LoginForm from "./LoginForm.svelte";
    import LogoutButton from "./LogoutButton.svelte";
    import SettingsModal from "./SettingsModal.svelte";
    import AuthChecker from "./AuthChecker.svelte";


    export const currentUser = writable();

    export const listenForAuthChanges = () => {
        return auth.onIdTokenChanged(details => {
            if (details) {
                currentUser.set({
                    email: details.email,
                    uid: details.uid,
                })
            } else {
                currentUser.set(null)
            }
        })
    }

    onMount(async () => {
        return listenForAuthChanges()
    })



</script>

<Logo />
<h1>Welcome to Pwofi!</h1>

<AuthChecker />


{#if $currentUser != null }
<ActionBar />
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
