<script>
  import { auth } from "$lib/util/app.js";
  import { createUserWithEmailAndPassword } from "firebase/auth";

  let email;
  let password;

  const registerUserViaEmail = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
    } catch (error) {
      console.error(error.code + error.message);
    }
  };
</script>

<h2>Register Now</h2>

<form on:submit|preventDefault={registerUserViaEmail}>
  <label for="email">Email</label>
  <input type="email" id="email" name="email" bind:value={email} />
  <br />
  <label for="password">Password</label>
  <input type="password" id="password" name="password" bind:value={password} />
  <br />
  <input type="submit" value="Submit" />
</form>

<style>
</style>
