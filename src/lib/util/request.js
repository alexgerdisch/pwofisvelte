

export async function requestPwofiApi(reqObj) {
    console.log("attempting request to Pwofi backend...");
    console.log(reqObj);
    const res = await fetch("https://us-central1-pwofibeta.cloudfunctions.net/api/", {
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