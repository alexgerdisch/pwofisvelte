<script>
import { requestPwofiApi } from "$lib/util/request.js"

let chatContainer;
let currentResponse;
let userInput;

const renderResponse = async () => {
  
  // currentResponse = await requestPwofiApi();
  currentResponse = 'lorem ipsum dolor sit amit okokokokok';
  const child = document.createElement('p');
  child.textContent = currentResponse;
  child.classList.add("child");
  chatContainer.appendChild(child);
  userInput.value = '';
}

</script>

<section id="request-area" bind:this={chatContainer}>


 

  
</section>
<form id="input-wrapper">
  <input type="text" id="user-request" bind:this={userInput} />
  <button id="request-btn" on:click|preventDefault={renderResponse}>🚀</button>

</form>






<style>
  #request-area {
    width: 750px;
    height: 500px;
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
  }

</style>
