<script>
    import AssistButton from "./AssistButton.svelte";
</script>

<section id="assistBar">
    <AssistButton/>
    <AssistButton assistName="Follow-up"/>
    <AssistButton assistName="Cold outreach"/>
    <AssistButton assistName="Warm Referral"/>


</section>

<style>
    #assistBar {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

</style>