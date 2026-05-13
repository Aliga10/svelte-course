<script lang="ts">
import { Counter } from '$lib/state/counter.svelte.js';;
    function increment() {
        Counter.count += 1;
    }
</script>

<button onclick={increment}>Increment : {Counter.count}</button>