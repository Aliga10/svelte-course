<script>    
    // Mengimpor Pico CSS
    import '@picocss/pico/css/pico.min.css';

    // Di Svelte 5, konten halaman (children) diterima sebagai kontainer/props
    let { children } = $props();    
</script>
<main class="container">
    {@render children()}
</main>
<div>
    <p>this is product carousel</p>
</div>