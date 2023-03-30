import { app, auth } from "$lib/util/app.js";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { writable } from "svelte/store";


export const db = getFirestore(app);

export const settings = writable({});

export const updateSettingsStore = async () => {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
    settings.set({ ...docSnap.data() })
};

