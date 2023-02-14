<script>
import { get } from '$lib/requests';

// const data = async() => { return await get("http://localhost:8080/getResults") }

// data().then(result=>{console.log(result)})

export let post
console.log("post is " + post)
let columns = ["Player", "Wins", "Draws", "Losses"]

</script>


<table class="w-full">
    
  <thead class="capitalize border-b-2">
      <tr>
          {#each columns as col}
              <td>{col}</td>
          {/each}
      </tr>
  </thead>

  <tbody>
      {#each data as stat}
        <tr>
            <td>{stat.name}</td>
            <td>{stat.wins}</td>
            <td>{stat.draws}</td>
            <td>{stat.losses}</td>
        </tr>
      {/each}
  </tbody>

</table>