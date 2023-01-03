<script>
	import { createEventDispatcher, onDestroy } from 'svelte';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	let modal;

	const previously_focused = typeof document !== 'undefined' && document.activeElement;

	if (previously_focused) {
		onDestroy(() => {
			previously_focused.focus();
		});
	}
</script>

<svelte:window />

<div class="modal-background" on:click={close}></div>

<div class="modal" role="dialog" aria-modal="true" bind:this={modal}>
    <img src="/images/victory.jpg" alt="background">
	<h1 class="text-block">Victory!</h1>

	<slot>Hello here is some text</slot>
    <br>
    <br>

	<!-- svelte-ignore a11y-autofocus -->
	<button class="button" autofocus on:click={close}>Submit Score</button>
</div>

<style>
    
    .text-block {
        text-align: center;
        color: rgb(107, 37, 9);
    }

	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.3);
	}

	.modal {
        display: flex;
        flex-direction: column;
        justify-content: center;
		position: absolute;
		left: 50%;
		top: 50%;
		width: calc(100vw - 4em);
		max-width: 32em;
		max-height: calc(100vh - 4em);
		overflow: auto;
		transform: translate(-50%,-50%);
		padding: 1em;
		border-radius: 0.2em;
		background: rgb(158, 155, 155);
	}

</style>