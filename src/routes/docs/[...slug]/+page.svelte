<script>
    import { page } from '$app/state';

    // Gunakan logical OR (|| []) agar jika slug kosong, tidak error saat split
    // Kita buat slugArr sebagai reactive snippet menggunakan $derived (opsional)
    // agar otomatis terupdate jika URL berubah.
    let slugArr = $derived(page.params.slug?.split('/') || []);
</script>

<h1>Docs home page</h1>

{#if slugArr.length > 0}
    <h2>Slug: {slugArr.join(' / ')}</h2>
{/if}

{#if slugArr.length === 1}
    <p>viewing docs feature of <strong>{slugArr[0]}</strong></p>
{:else if slugArr.length === 2}
    <p>viewing docs feature of <strong>{slugArr[0]}</strong> and concept <strong>{slugArr[1]}</strong></p>
{/if}