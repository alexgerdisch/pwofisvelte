<script>
    import { app, auth } from "./app.js";

    import { writable } from "svelte/store";

    //Component Imports

    import Logo from "./Logo.svelte";
    import ActionBar from "./ActionBar.svelte";
    import RegisterForm from "./RegisterForm.svelte";
    import LoginForm from "./LoginForm.svelte";
    import LogoutButton from "./LogoutButton.svelte";
    import SettingsModal from "./SettingsModal.svelte";
    import AuthChecker from "./AuthChecker.svelte";
</script>

<Logo />
<h1>Welcome to Pwofi!</h1>

<AuthChecker />

<RegisterForm />
<LoginForm />

<LogoutButton />
<ActionBar />
<SettingsModal />

<style>
    :global(*) {
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
            sans-serif;
    }
</style>
