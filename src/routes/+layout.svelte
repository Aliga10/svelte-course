<script>
	// Mengimpor Pico CSS
	import '@picocss/pico/css/pico.min.css';

	// Di Svelte 5, konten halaman (children) diterima sebagai kontainer/props
	let { children } = $props();
</script>
<header>
	<div>
	<h1>navigation header bar</h1>

	</div>	
</header>
<!-- Membungkus halaman dengan container Pico CSS -->
<main class="container">
	{@render children()}
</main>
<footer>
	<p>&copy; 2026 My Svelte Course App</p>
</footer>
<style>
	header, footer {
		background-color: #c5fbf4;
		color: white;
		padding: 1rem;
		text-align: center;
	}
	main {
		padding: 2rem;
	}
</style>