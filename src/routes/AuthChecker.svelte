<script>
    import { auth } from "./app.js";
</script>

<button
    class="auth-checker"
    on:click={() => {
        alert(`${auth.currentUser?.email} logged in
UID: ${auth.currentUser?.uid}`);
    }}>Check Auth</button
>
