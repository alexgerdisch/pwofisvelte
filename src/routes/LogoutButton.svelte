<script>
    import { signOut, getAuth } from "firebase/auth";

    const auth = getAuth();

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
