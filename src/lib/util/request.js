// local URL for testing:       http://127.0.0.1:5001/pwofibeta/us-central1/api
// prod URL:                    https://us-central1-pwofibeta.cloudfunctions.net/api/

// import { assistCurrent, endpointSetter } from "./assist"

let endpointURL = "https://us-central1-pwofibeta.cloudfunctions.net/api/"

// let callableEndpoint = endpointSetter()

export async function requestPwofiApi(reqObj) {
    console.log("attempting request to Pwofi backend...");
    console.log(reqObj);
    const res = await fetch(endpointURL, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(reqObj)
    })
    const cleaned = await res.json()
    console.log(cleaned);
    return cleaned;
}