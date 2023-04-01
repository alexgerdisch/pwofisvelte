<script>
    import { auth } from "$lib/util/app.js";
    import { doc, setDoc, arrayUnion } from "firebase/firestore";
    import { db } from "$lib/util/settings.js";

    const docRef = doc(db, "users", auth.currentUser.uid);

    let firstName;
    let lastName;
    let company;
    let industry;
    let currentValueDriver = '';
    let currentPainPoint = '';
    let valueArray = [];
    let painArray = [];

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

    const addToValueArray = () => {
        if (currentValueDriver.length > 0) {
            valueArray = [...valueArray, currentValueDriver]
            currentValueDriver = '';
        }
        
    };

    const addToPainArray = () => {
        if (currentPainPoint.length > 0) {
            painArray = [...painArray, currentPainPoint]
            currentPainPoint = '';
        }
        
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
    <div class="list-holder">
        <div class="value-container">
            <label for="value-drivers">Impacts</label>
            <input type="text" name="value-drivers" bind:value={currentValueDriver}/>
            <button type="button" display="inline" on:click={addToValueArray} >+</button>
            <div class="value-box">
            {#each valueArray as value}
                <p>{value}</p>
            {/each}
            </div>
        </div>
        <div class="pain-container">
            <label for="pain-points">Pain Points</label>
            <input type="text" name="pain-points" bind:value={currentPainPoint}/>
            <button type="button" display="inline" on:click={addToPainArray} >+</button>
            <div class="reverse-flex">
            {#each painArray as pain}
                <p>{pain}</p>
            {/each}
            </div>
        </div>

    </div>

    <input type="submit" value="Submit" />
</form>

<style>
    form {
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .reverse-flex {
        display: flex;
        flex-direction: column-reverse;
    }

    .list-holder {
        display: flex;
        flex-direction: row;
    }
</style>
