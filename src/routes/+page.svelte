<script lang="ts">
  import { base } from '$app/paths';
  import SayHello from '$lib/components/SayHello.svelte';
  import Counter from '../lib/components/Counter.svelte';
  import GlobalCounter from '../lib/components/GlobalCounter.svelte';
  import{goto , beforeNavigate,afterNavigate} from '$app/navigation';
  
  function clickHandler() {
    goto(`${base}/product`);
  }

  beforeNavigate((navigation) => {
    console.log({before : navigation});
  });
  afterNavigate((navigation) => {
    console.log({after : navigation});
  });
</script>
<h1>hello</h1>
<a href={` ${base}/blog `}>blog1</a>
<a href={`${base}/product`}>product</a>
<a href={`${base}/about`}>Go to About Page</a>



<Counter/>	
<SayHello/>
<GlobalCounter/>
<GlobalCounter/>
<GlobalCounter/>
<GlobalCounter/>
<br/>
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
</style>  
