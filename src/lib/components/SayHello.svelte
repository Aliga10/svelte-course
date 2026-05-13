<script lang="ts">
let person = $state({
    name: '',
    lastName: '',   
});
let greetingName = $state('');
let greetingLastName = $state('');
    
    function sayHello() {
        greetingName = person.name;
        greetingLastName = person.lastName;
    }
</script>

<div>
    <input type="text" placeholder="Name" bind:value={person.name} />
    <input type="text" placeholder="Last Name" bind:value={person.lastName} />
    <button onclick={sayHello}>Say Hello</button>    
    <h1>Hello {greetingName} {greetingLastName}</h1>
</div>
