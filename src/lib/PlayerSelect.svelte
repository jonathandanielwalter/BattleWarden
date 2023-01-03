<script>
     import { goto } from '$app/navigation';
     import { player1Name, player2Name } from '$lib/stores';

     let player1NameInput = ''
     let player2NameInput = ''

     function routeToPage(){
        player1Name.set(player1NameInput);
        player2Name.set(player2NameInput);
        goto("/battle")
     }
</script>

<div class='player-select'>

    <h1 class="title">Enter the names of the two combatants</h1>

	<div class='split left'>
		<h1>Player 1</h1>
        <input bind:value={player1NameInput} class="input" type="text"><br>
	</div>
	<div  class='split right'>
		<h1>Player 2</h1>
        <input  bind:value={player2NameInput} class="input" type="text"><br>
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