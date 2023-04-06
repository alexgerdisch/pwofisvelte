<script>
  import { auth } from "$lib/util/app.js";
</script>

<button
  class="auth-checker button"
  on:click={() => {
    alert(`${auth.currentUser?.email} logged in
UID: ${auth.currentUser?.uid}`);
  }}>Check Auth</button
>
