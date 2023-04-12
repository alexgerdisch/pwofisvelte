<script>
import { requestPwofiApi } from "$lib/util/request.js"
import { Session } from "$lib/util/session.js"
import AssistBar from "./AssistBar.svelte";

let chatContainer;
let currentResponse;
let userInput;

let activeSession = new Session("custom");


const renderResponse = async () => {
  
  currentResponse = await requestPwofiApi(activeSession);
  activeSession.convo = [...activeSession.convo, {role: "assistant", content: currentResponse}]
  const assistantResElement = document.createElement('p');
  assistantResElement.textContent = currentResponse;
  assistantResElement.classList.add("assistant-response", "convo-item");
  chatContainer.appendChild(assistantResElement);
}



const addToSession = async () => {
  activeSession.convo = [...activeSession.convo, {role: "user", content: userInput.value}];
  const userReqElement = document.createElement('p');
  userReqElement.textContent = userInput.value;
  userReqElement.classList.add("user-request", "convo-item");
  chatContainer.appendChild(userReqElement)
  userInput.value = '';
  renderResponse();

}

</script>

<section id="request-area" >
<AssistBar/>
<div bind:this={chatContainer}>
<!-- Chat contents get appended here -->
<!-- Both user requests and assistant responses -->
</div>

</section>
<form id="input-wrapper">
  <input type="text" id="user-request" placeholder="Send a request..." bind:this={userInput} />
  <button id="request-btn" on:click|preventDefault={addToSession}>🚀</button>
</form>




<style>
  #request-area {
    width: 750px;
    height: 600px;
    background-image: linear-gradient(to bottom, #181a21, #14181f, #0f171c, #0a1519, #041316);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    z-index: 1;
   
  }

  #user-request {
    width: 684px;
    height: 45px;
    font-size: 1.3rem;
    border: none;
    border-right: 2px solid;
    border-color: #2d3c3f;
    z-index: 2;
  }

  #user-request:active {
    border-color:rgb(144, 230, 215);
  }

  #input-wrapper {
    display: flex;
    flex-direction: row;
  }

  #request-btn {
    font-size: 1.2rem;
    width: 60px;
    background-color: rgb(123, 197, 185);
    border: none;
    transition: font-size 500ms ease, background-color 500ms ease;
    
  
  }

  #request-btn:hover {
    font-size: 2rem;
    background-color: rgb(22, 36, 33);
    
  }

  :global(.convo-item) {
    font-size: 1.2rem;
    margin: 7px;

  }

  :global(.assistant-response) {
    color: rgb(235, 245, 239);
    

  }

  :global(.user-request) {
    color: rgb(191, 202, 196);

  }

</style>
