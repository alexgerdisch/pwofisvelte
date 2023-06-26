<script>
    import activeSession from "$lib/util/session.js"
</script>

<button on:click={() => console.log($activeSession)}>Clicky me</button>