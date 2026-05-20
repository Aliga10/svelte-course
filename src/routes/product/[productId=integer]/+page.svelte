<script>

    import {page} from '$app/stores';
    const productId = $page.params.productId;
</script>

<h1>Detail tentang Produk {productId}</h1>


<!-- 
<script>
	// Di Svelte 5, data rute (termasuk params) dikirim lewat props
	let { data } = $props();
    
    // Namun, cara paling instan mengambil params tanpa import apapun:
	import { page } from '$app/state'; // Gunakan state, bukan stores
</script>

<h1>Detail tentang Produk {page.params.productId}</h1> -->