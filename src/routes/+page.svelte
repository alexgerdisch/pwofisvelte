<script>
    import Button from "./Button.svelte";
    import ActionBar from "./ActionBar.svelte";
    import RegisterForm from "./RegisterForm.svelte";
    import LoginForm from "./LoginForm.svelte";
</script>

<h1>Welcome to Pwofi</h1>

<RegisterForm />
<LoginForm />

<Button name="Sign In" />
<Button name="Sign Out" />

<ActionBar />

<style>
    :global(*) {
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
    }
    
</style>
