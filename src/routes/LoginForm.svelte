<script>
    import { auth } from "./app.js";
    import { signInWithEmailAndPassword } from "firebase/auth";
    let email;
    let password;

    const loginUserViaEmail = () => {
        // Send login request to Firebase Auth
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("logged in as " + user.email);
            })
            .catch((error) => {
                console.error(error.code + error.message);
            });
    };
</script>

<h2>Sign-in Existing Account</h2>

<form on:submit|preventDefault={loginUserViaEmail}>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" bind:value={email} />
    <label for="password">Password</label>
    <input
        type="password"
        id="password"
        name="password"
        bind:value={password}
    />
    <input type="submit" value="Submit" />
</form>

<style>
</style>
