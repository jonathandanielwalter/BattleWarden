<script context="module">
    export async function load() {
      const url = 'http://localhost:8080/recordResult';
      const res = await fetch(url);
      const post = await res.json();
      return {props: {post}}
    }
  </script>

<script>
    import Results from '$lib/Results.svelte';
</script>

<Results post={post}></Results>