<script>
    import { getContext } from 'svelte';
    import { doPost } from '$lib/requests';
    import { player1Name, player2Name, player1Vp, player2Vp } from '$lib/stores.js';
    import Modal from './Modal.svelte';

    let showModal = false;
    let count = 0;

    export let winnerName

    function incriment(){
        count += 1
    }

    function submitScore(){

        let p1Vp = 0
        let p2Vp = 0
        let p1Name = ""
        let p2Name = ""

    
        player1Name.subscribe(name => (p1Name = name))
        player2Name.subscribe(name => (p2Name = name))
        player1Vp.subscribe(vp => (p1Vp = vp))
        player2Vp.subscribe(vp => (p2Vp = vp))

        console.log("player 1 name : " + p1Name)
        console.log("player 2 name : " + p2Name)

        console.log("player 1 vp : " + p1Vp)
        console.log("player 2 vp : " + p2Vp)

        showModal = true
        if (p1Vp > p2Vp){
            winnerName = p1Name
        }else if (p1Vp < p2Vp){
            winnerName = p2Name
        }else{
            winnerName="draw"
        }

        let result = {
            player1Name : p1Name,
            player2Name : p2Name,
            player1Vp : p1Vp,
            player2Vp : p2Vp
        }

        doPost(result)
    }
</script>

<!-- <div class="container">
    <img src="/images/grimdarkness.jpg" alt="background">
</div> -->


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
	<Modal bind:winnerName={winnerName} on:close="{() => showModal = false}"></Modal>
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