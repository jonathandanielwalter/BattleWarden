<script>
    import { getContext } from 'svelte';
    import { doPost } from '$lib/requests';
    import { player1Name, player2Name, player1Vp, player2Vp } from '$lib/stores.js';
    import Modal from './Modal.svelte';

    let showModal = false;
    let count = 0;

    function incriment(){
        count += 1
    }

    function submitScore(){
        showModal = true
        if (player1Vp > player2Vp){

        }

        let result = {

        }


       

        doPost(result)
    }
</script>

<div class="header">

    <div>
        <h1>Battle Round {count + 1}</h1>

    </div> 
    <div>
        <button class='button' on:click={incriment}>End Turn</button>
        <button class='button' on:click={submitScore}>End Game</button>
    </div>
</div>


{#if showModal}
	<Modal on:close="{() => showModal = false}"></Modal>
{/if}


  <style>
      .header {
        padding: 60px;
        /* background-color: #485461; */
        /* background-image: linear-gradient(315deg, #485461 0%, #28313b 74%); */
        color: #ccc;
        font-size: 30px;
        justify-content: space-between;
        display : flex;
        /* flex-direction: column; */
        align-items: center;
        border: 5px;
        border-color: black;
        }


  </style>