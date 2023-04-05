<script>
import { requestPwofiApi } from "$lib/util/request.js"

let chatContainer;
let currentResponse;

const renderResponse = async () => {
  currentResponse = await requestPwofiApi();
  const child = document.createElement('p');
  child.textContent = currentResponse;
  chatContainer.appendChild(child);
}

</script>

<section id="request-area" bind:this={chatContainer}>


 

  
</section>
<div id="input-wrapper">
  <input type="text" id="user-request" />
  <button id="request-btn" on:click={renderResponse}>➕</button>

</div>






<style>
  #request-area {
    width: 750px;
    height: 500px;
    background-color: rgb(204, 204, 204);
  }

  #user-request {
    width: 698px;
    height: 30px;
  }

  #input-wrapper {
    display: flex;
    flex-direction: row;
  }

  #request-btn {
    width: 45px;
  }

</style>
