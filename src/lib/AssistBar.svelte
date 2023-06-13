<script>
    import AssistButton from "./AssistButton.svelte";
</script>

<section id="assistBar">
    <AssistButton/>
    <AssistButton assistName="Follow-up📨" assistType="followup"/>
    <AssistButton assistName="Cold Message☃️" assistType="cold"/>
    <AssistButton assistName="Warm Referral🌶️" assistType="referral"/>
    <AssistButton assistName="Template Recycler♻️" assistType="template"/>


</section>

<style>
    #assistBar {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

</style>