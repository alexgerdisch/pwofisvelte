const reqObj = {
    uid: "XXXXXXXXXXX",
    painPoints: "low win rate on deals, time wasted drafting, not progressing deals",
    valueDrivers: "higher deal win rates, more productive sales people",
    companyName: "Pwofi",
    meetingType: "intro call",
    nextStep: "product demo"

}

export async function requestPwofiApi() {
    console.log("attempting request to Pwofi backend...");
    console.log(reqObj);
    const res = await fetch("https://us-central1-pwofibeta.cloudfunctions.net/api/followup", {
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