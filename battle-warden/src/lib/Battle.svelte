<script>
	import Player from './Player.svelte';
	import Banner from './Banner.svelte';
</script>



<Banner/>


<div class='background'>
	<div class='split left'>
		<Player playerName="Matt"/>
	</div>
	<div  class='split right'>
		<Player playerName="Conor"/>
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