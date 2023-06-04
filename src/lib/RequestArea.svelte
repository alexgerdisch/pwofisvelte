<script>
import { requestPwofiApi } from "$lib/util/request.js";
import { Session } from "$lib/util/session.js";
import AssistBar from "./AssistBar.svelte";
import { assistCurrent } from "$lib/util/assist.js";


let chatContainer;
let currentResponse;
let userInput;

let activeSession = new Session("custom");


const renderResponse = async () => {
  currentResponse = await requestPwofiApi(activeSession);
  activeSession.convo = [...activeSession.convo, {role: "assistant", content: currentResponse}]
  const assistantResElement = document.createElement('pre');
  assistantResElement.textContent = currentResponse;
  assistantResElement.classList.add("assistant-response", "convo-item");
  chatContainer.appendChild(assistantResElement);
}



const addToSession = async () => {
  activeSession.convo = [...activeSession.convo, {role: "user", content: userInput.value}];
  const userReqElement = document.createElement('p');
  userReqElement.textContent = userInput.value;
  userReqElement.classList.add("user-entry", "convo-item");
  chatContainer.appendChild(userReqElement);
  userInput.value = '';
  renderResponse();
}



</script>

<div class="wrapper">
  <AssistBar/>
  <section id="request-area" >

  <div bind:this={chatContainer}>
  <!-- Chat contents get appended here -->
  <!-- Both user requests and assistant responses -->
  </div>

  </section>
  <form id="input-wrapper">
    <input type="text" id="user-request" placeholder="Send a request..." bind:this={userInput} />
    <button id="request-btn" on:click|preventDefault={addToSession}>🚀</button>
  </form>

</div>





<style>
  #request-area {
    width: 980px;
    height: 600px;
    background-color: #f7f8f8;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    z-index: 1;
   
  }

  #user-request {
    width: 914px;
    height: 45px;
    font-size: 1.3rem;
    border: none;
    border-right: 2px solid;
    border-color: #f7f8f8;
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
    background-color: rgb(0, 27, 59);
    border: none;
    transition: font-size 500ms ease, background-color 500ms ease;
    
  
  }

  #request-btn:hover {
    font-size: 2rem;
    background-color: #041316;
    
  }

  :global(.convo-item) {
    font-size: 1.2rem;
    margin: 7px;

  }

  :global(.assistant-response) {
    background-color: rgb(0, 27, 59);
    color: white;
    padding: 10px;
    border-radius: 5px;
    white-space: pre-wrap;
  
  }

  :global(.user-entry) {
    color: #0f2327;
    background-color: white;
    padding: 10px;
    border-radius: 5px;
  }

</style>
