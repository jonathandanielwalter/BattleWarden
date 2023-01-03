<script>
	import Player from './Player.svelte';
	import Banner from './Banner.svelte';

	import { player1Name, player2Name, player1Vp, player2Vp } from '$lib/stores.js';


</script>



<Banner/>


<div class='background'>
	<div class='split left'>
		<Player playerName="{$player1Name}" vp={player1Vp}/>
	</div>
	<div  class='split right'>
		<Player playerName="{$player2Name}" vp={player2Vp}/>
	</div>
</div>

<style>
	

	.split {
	height: 100%;
	width:50%;
	z-index: 1;
	top: 0;
	padding-top: 20px;
	}

	.left {
		float: left; 
    width: 50%; 
	}

	.right {
		float: right; 
    width: 50%; 
	}
</style>