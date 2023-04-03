<script>
    export let current;
</script>

<div id="action-bar-wrapper">
    <button
        class={current === "Follow-up" ? "selected" : ""}
        on:click={() => (current = "Follow-up")}>Follow-up 👋</button
    >

    <button
        class={current === "Cold Outreach" ? "selected" : ""}
        on:click={() => (current = "Cold Outreach")}>Cold Outreach 🥶</button
    >

    <button
        class={current === "Warm Referral" ? "selected" : ""}
        on:click={() => (current = "Warm Referral")}>Warm Referral 🤝</button
    >
    <button
        class={current === "Custom" ? "selected" : ""}
        on:click={() => (current = "Custom")}>Custom ⚙️</button
    >

</div>


<style>
    button {
        display: block;
    }

    .selected {
        background-color: #225b50;
        color: white;
    }

    #action-bar-wrapper {
        display: flex;
        flex-direction: row;
    }
</style>
