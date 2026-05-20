<script lang="ts">
  import { goto, beforeNavigate, afterNavigate,} from '$app/navigation';
  import{resolve} from '$app/paths';
  // Mengimpor komponen
  import SayHello from '$lib/components/SayHello.svelte';
  import Counter from '$lib/components/Counter.svelte'; // Disarankan pakai alias $lib
  import GlobalCounter from '$lib/components/GlobalCounter.svelte';

  // Efek Svelte 5 untuk menjalankan navigasi saat komponen dimuat (jika memang diperlukan)
  $effect(() => {
    // Jalankan navigasi atau state di sini jika perlu, 
    // tapi hati-hati agar tidak terjadi infinite loop saat halaman baru terbuka!
    // goto(`${base}/foo`); 
  });
  
  function clickHandler() {
    goto (resolve('/'))
  }

  beforeNavigate((navigation) => {
    console.log({ before: navigation });
  });

  afterNavigate((navigation) => {
    console.log({ after: navigation });
  });
</script>

<h1>hello</h1>

<div class="nav-links">
  <a href={resolve('/blog')}>blog1</a>
  <a href={resolve('/product')}>product</a>
  <a href={resolve('/about')}>Go to About Page</a>
</div>

<Counter />  
<SayHello />
<GlobalCounter />
<GlobalCounter />
<GlobalCounter />
<GlobalCounter />

<br />
<button onclick={clickHandler}>order</button>

<style>
  a {
    margin-right: 10px;
  } 
  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #fb870c;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  .nav-links {
    margin-bottom: 15px;
  }
</style>