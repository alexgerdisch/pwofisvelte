<script>
  import { auth } from "$lib/util/app.js";
  import { signOut } from "firebase/auth";

  const logUserOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful");
      })
      .catch((error) => {
        console.error(error.code + error.message);
      });
  };
</script>

<button id="signout" on:click={logUserOut}>Sign Out</button>
