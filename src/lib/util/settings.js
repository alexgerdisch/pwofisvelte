import { app, auth } from "$lib/util/app.js";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { writable } from "svelte/store";


const db = getFirestore(app);

export const settings = writable({});

export function checkSettingsJs() {
    console.log("Checking auth in settings.js");
    console.log(auth);
}




const updateSettingsStore = async () => {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
    settings = { ...docSnap.data() };
    impacts = [...settings.valueDrivers];
    pains = [...settings.painPoints];
};

