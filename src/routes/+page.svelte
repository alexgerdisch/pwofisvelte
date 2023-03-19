<script>
    import { initializeApp } from "firebase/app";
    import {
        getAuth,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
    } from "firebase/auth";

    import Button from "./Button.svelte";
    import ActionBar from "./ActionBar.svelte";
    import RegisterForm from "./RegisterForm.svelte";
    import LoginForm from "./LoginForm.svelte";
    import LogoutButton from "./LogoutButton.svelte";

    const firebaseConfig = {
        apiKey: "AIzaSyDL9Vfw5AJKfmeeXFRlFuyMKvH16C8lyGk",
        authDomain: "pwofibeta.firebaseapp.com",
        projectId: "pwofibeta",
        storageBucket: "pwofibeta.appspot.com",
        messagingSenderId: "612729901997",
        appId: "1:612729901997:web:cbfddce6f2bf647eb20724",
    };

    //Init firebase app
    const app = initializeApp(firebaseConfig);
    console.log(app);

    const auth = getAuth();
</script>

<h1>Welcome to Pwofi!</h1>

<!-- Authentication Checker -->
<button
    class="auth-checker"
    on:click={() => {
        console.log(`${auth.currentUser?.email} logged in
UID: ${auth.currentUser?.uid}`);
    }}>Check Auth</button
>

<RegisterForm />
<LoginForm />

<LogoutButton />

<ActionBar />

<style>
    :global(*) {
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
            sans-serif;
    }
</style>
