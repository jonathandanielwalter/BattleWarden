<script>
    import Counter from './Counter.svelte'
    export let vp;
</script>

<div class="column">
    <input class="input" type="text"><br>
    <Counter label="VP"  bind:vp={vp}/>
</div>


<style>
    .column{
        flex-grow:1;
        border: 2px solid #808080;
    }
   
</style>