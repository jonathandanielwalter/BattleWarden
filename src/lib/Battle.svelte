<script>
	import Player from './Player.svelte';
	import Banner from './Banner.svelte';

	import { player1 } from '$lib/stores';
    import { player2 } from '$lib/stores';


</script>



<Banner/>


<div class='background'>
	<div class='split left'>
		<Player playerName="{$player1}"/>
	</div>
	<div  class='split right'>
		<Player playerName="{$player2}"/>
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