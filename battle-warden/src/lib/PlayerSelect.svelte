<script>
     import { goto } from '$app/navigation';
     import { player1 } from '$lib/stores';
     import { player2 } from '$lib/stores';


     let player1Name = ''
     let player2Name = ''

     function routeToPage(){
        player1.set(player1Name);
        player2.set(player2Name);
        goto("/battle")
     }
</script>

<div class='player-select'>

    <h1 class="title">Enter the names of the two combatants</h1>

	<div class='split left'>
		<h1>Player 1</h1>
        <input bind:value={player1Name} class="input" type="text"><br>
	</div>
	<div  class='split right'>
		<h1>Player 2</h1>
        <input  bind:value={player2Name} class="input" type="text"><br>
	</div>
    <br> 
    <br>
    <br>
    <hr style="width:50%;">
    <button class="button" on:click={routeToPage}><a>Do Battle!</a></button>
</div>

<style>

    .player-select{
        justify-content: center;
        display : flex;
        flex-direction: column;
        align-items: center;
    }

    .input{
        height:100px;
    font-size:20pt;
    text-align: center;
    }

    .title{
        height:100px;
    font-size:40pt;
    }
</style>