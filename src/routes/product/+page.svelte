<script>
    import { base } from '$app/paths'; // WAJIB diimpor

    // Di Svelte 5, gunakan $state agar data reaktif
    let products = $state([
        { id: 1, name: 'product 1' },
        { id: 2, name: 'product 2' },
        { id: 3, name: 'product 3' },
        { id: 4, name: 'product 4' },
        { id: 5, name: 'product 5' },
        { id: 6, name: 'product 6' },
        { id: 7, name: 'product 7' },
        { id: 8, name: 'product 8' },
        { id: 9, name: 'product 9' },
        { id: 10, name: 'product 10' }
    ]);
</script>

<h1>Product</h1>

<div class="grid">
   {#each products as product (product.id)}
    <article>
        <a href={`${base}/product/${product.id}`}>{product.name}</a>
    </article>
{/each}
</div>