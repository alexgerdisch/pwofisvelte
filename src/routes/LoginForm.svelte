<script>
    let email;
    let password;

    const logIn = () => {
        // Send login request to Firebase Auth
    }

</script>

<h2>Sign-in Existing Account</h2>

<form on:submit|preventDefault={logIn}>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" bind:value={email}>
    <label for="password">Password</label>
    <input type="password" id="password" name="password" bind:value={password}>
    <input type="submit" value="Submit"> 
</form>

<style>
   
   

</style>