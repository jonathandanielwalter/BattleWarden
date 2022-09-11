<script>
    let count = 0;

    function incriment(){
        count += 1
    }


</script>

<div class="header">
    <button class='button' on:click={incriment}>End Turn</button>
    <h1>Battle Round</h1>
    <h2>{count}</h2> 
  
</div>

  <style>
      .header {
        padding: 60px;
        /* background-color: #485461; */
        /* background-image: linear-gradient(315deg, #485461 0%, #28313b 74%); */
        color: #ccc;
        font-size: 30px;
        justify-content: center;
        display : flex;
        flex-direction: column;
        align-items: center;
        border: 5px;
        border-color: black;
        }


  </style>