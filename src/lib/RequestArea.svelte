<script>
import { requestPwofiApi } from "$lib/util/request.js"
import { Session } from "$lib/util/session.js"

let chatContainer;
let currentResponse;
let userInput;

let activeSession = new Session("custom");


const renderResponse = async () => {
  
  currentResponse = await requestPwofiApi(activeSession);
  activeSession.convo = [...activeSession.convo, {role: "assistant", content: currentResponse}]
  const child = document.createElement('p');
  child.textContent = currentResponse;
  child.classList.add("child");
  chatContainer.appendChild(child);
}



const addToSession = async () => {
  activeSession.convo = [...activeSession.convo, {role: "user", content: userInput.value}];
  const userReqElement = document.createElement('p');
  userReqElement.textContent = userInput.value;
  userReqElement.classList.add("user-request");
  chatContainer.appendChild(userReqElement)
  userInput.value = '';
  renderResponse();

}

</script>

<section id="request-area" bind:this={chatContainer}>
<!-- Chat contents get appended here -->
<!-- Both user requests and assistant responses -->
</section>
<form id="input-wrapper">
  <input type="text" id="user-request" placeholder="Send a request..." bind:this={userInput} />
  <button id="request-btn" on:click|preventDefault={addToSession}>🚀</button>
</form>




<style>
  #request-area {
    width: 750px;
    height: 600px;
    background-color: rgb(19, 19, 19);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
   
  }

  #user-request {
    width: 698px;
    height: 30px;
    font-size: 1.3rem;
  }

  #input-wrapper {
    display: flex;
    flex-direction: row;
  }

  #request-btn {
    width: 45px;
    background-color: rgb(36, 90, 69);
    border: none;
    
  }

  :global(.child) {
    color: rgb(235, 245, 239);
    font-size: 1.2rem;

  }

  :global(.user-request) {
    color: rgb(191, 202, 196);
    font-size: 1.2rem;
  }

</style>
