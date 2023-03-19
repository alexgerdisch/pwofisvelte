<script>
    let firstName;
    let lastName;
    let email;
    let password;

    const register = () => {
        // Send registration data to Firestore
    }

</script>

<h2>Register Now</h2>

<form on:submit|preventDefault={register}>
    
    <label for="fName">First Name</label>
    <input type="text" id="first-name" name="fName" bind:value={firstName}>
<br />
    <label for="lName">Last Name</label>
    <input type="text" id="last-name" name="lName" bind:value={lastName}>
<br />
    <label for="email">Email</label>
    <input type="email" id="email" name="email" bind:value={email}>
<br />
    <label for="password">Password</label>
    <input type="password" id="password" name="password" bind:value={password}>
<br />
    <input type="submit" value="Submit"> 
</form>

<style>
   
   

</style>