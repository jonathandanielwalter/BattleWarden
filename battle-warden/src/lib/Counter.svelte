<script>
	export let label;
    let count = 0;
    export let vp;

    function incriment(){
        count += 1
        vp = vp + 1
    }
    function decrement(){
        if( count - 1 < 0){
            count = 0
        }else{
            count -= 1
            vp = vp - 1
        }
      
    }

</script>

<h3>{label}</h3> 
<input class="input" type="text" id="count" name="count" value={count} readonly>
<button class="button" on:click={incriment}>
 +
</button>
<button class="button" on:click={decrement}>
 -
</button>
