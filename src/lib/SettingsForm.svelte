<script>
    import { auth } from "$lib/util/app.js";
    import { doc, setDoc, arrayUnion } from "firebase/firestore";
    import { db } from "$lib/util/settings.js";

    const docRef = doc(db, "users", auth.currentUser.uid);

    let firstName;
    let lastName;
    let company;
    let industry;
    let currentValueDriver;
    let valueArray;
    let painArray;

    const updateFirestore = () => {
        setDoc(
            docRef,
            {
                uid: auth.currentUser.uid,
                userFirstName: firstName,
                userLastName: lastName,
                email: auth.currentUser.email,
                company: company,
                industry: industry,
            },
            { merge: true }
        ).catch((error) => console.error(error));
    };
</script>

<form on:submit|preventDefault={updateFirestore}>
    <label for="firstName">First Name</label>
    <input type="text" name="firstName" bind:value={firstName} />
    <label for="lastName">Last Name</label>
    <input type="text" name="lastName" bind:value={lastName} />
    <label for="company">Company</label>
    <input type="text" name="company" bind:value={company} />
    <label for="industry">Industry</label>
    <input type="text" name="industry" bind:value={industry} />
    <label for="value-drivers">Impacts</label>
    <input type="text" name="value-drivers" bind:value={currentValueDriver} />
    <input type="submit" value="Submit" />
</form>

<style>
    form {
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>
