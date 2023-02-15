<script context="module">
    export async function load() {
      const url = 'https://crusade-api.fly.dev/recordResult';
      const res = await fetch(url);
      const post = await res.json();
      return {props: {post}}
    }
  </script>

<script>
    import Results from '$lib/Results.svelte';
</script>

<Results post={post}></Results>