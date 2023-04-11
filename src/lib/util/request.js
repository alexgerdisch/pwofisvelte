// local URL for testing:       http://127.0.0.1:5001/pwofibeta/us-central1/api
// prod URL:                    https://us-central1-pwofibeta.cloudfunctions.net/api/

export async function requestPwofiApi(reqObj) {
    console.log("attempting request to Pwofi backend...");
    console.log(reqObj);
    const res = await fetch("http://127.0.0.1:5001/pwofibeta/us-central1/api", {
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