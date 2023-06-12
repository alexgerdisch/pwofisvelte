import { v4 as uuidv4 } from 'uuid';
// import { writable } from "svelte/store";

// export const activeSession = writable({});

export class Session {
    constructor(type) {
        this.seshType = type;
        this.seshId = uuidv4();
        this.convo = [];
    }


    // method that saves session details to user's Firestore

    saveToFirestore() {
        // takes this.convo and sends it to appropriate user id's firebase
        // 
        // each session creates a new session object 
        // objects contain session type, id, and convo contents. 
        
    }

}
