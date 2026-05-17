<script lang="ts">
  import { base } from '$app/paths';
  import SayHello from '$lib/components/SayHello.svelte';
  import Counter from '../lib/components/Counter.svelte';
  import GlobalCounter from '../lib/components/GlobalCounter.svelte';
</script>
<h1>hello</h1>

<a href={`{base}/blog`}>blog</a>
<a href={`${base}/product`}>product</a>
<a href={`${base}/about`}>Go to About Page</a>

<Counter/>	
<SayHello/>
<GlobalCounter/>
<GlobalCounter/>
<GlobalCounter/>
<GlobalCounter/>
<br/>
