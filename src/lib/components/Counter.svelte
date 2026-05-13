<script lang="ts">
let count = $state([1]);
// let total = $derived(count.reduce((a, b) => a + b, 0));
let total = $derived.by(()=> {
    let total = 0;
    for(let i = 0; i < count.length; i++) {
        total += count[i];
    }
    return total;
})

function increment() {
    count.push(1);
};

// $inspect(count).with((type,value)=>{
//     console.log(type, value);
// })
</script>

<h1>{count.join(" + ")} = {total}</h1>
<button onclick={increment}>Increment</button>   
