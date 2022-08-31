<script>
	import Counter from './Counter.svelte';
    import Objectives from './Objectives.svelte'
    export let playerName
	export let vp = 0
</script>

<h1 class="center-no-border">{playerName}</h1>


<h1 class="center-no-border">Total Victory Points: {vp}</h1>

<div class="center">
	<Counter bind:vp={vp} label={"Main Objective Victory Points"} />
</div>

<br>
<div class="center">
	<Counter vp label={"Command Points"} />
</div>
<div class="objectives">
	<Objectives bind:vp={vp}/>
</div>

<style>
	.center {
		height: 20%;
		border: 5px solid #808080;
		text-align: center;
	}

    .center-no-border {
		text-align: center;
	}

</style>	