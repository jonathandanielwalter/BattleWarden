<script>
export let vp;
import Objective from './Objective.svelte';
</script>

<div class="center-no-border" >
	<Objective  bind:vp={vp}/>
	<Objective  bind:vp={vp}/>
	<Objective  bind:vp={vp}/>
</div>



<style>
    .center-no-border {
		justify-content: space-between;
        display : flex;
        flex-direction: row;
        border: 2px solid #808080;
		height: 40%;
        text-align: center;
    }
</style>