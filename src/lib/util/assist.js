import { writable } from "svelte/store";

export const assistCurrent = writable({});


// Takes in baseURL + assitObj and sets the endpoint to the corresponding type
export function endpointSetter(assistObj, baseURL) {
   return baseURL + assistObj.type
}

