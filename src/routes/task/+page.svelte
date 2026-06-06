<script lang="ts">
    let newTask = $state('');
    
    type Task = {
        id: number;
        title: string;
        completed: boolean;
    }
    
    // 1. Diubah menjadi jamak 'tasks' agar tidak bentrok
    let tasks = $state<Task[]>([]); 

    function addTask(title: string) {
        // 2. WAJIB SVELTE 5: Gunakan assignment (=) dan spread operator (...)
        tasks = [
            ...tasks,
            {
                id: Date.now(),
                title: title,
                completed: false
            }
        ];
    }

    function formSubmited(event: SubmitEvent) {
        event.preventDefault();
        if (!newTask.trim()) return; // Validasi agar tidak bisa input teks kosong
        
        addTask(newTask);
        newTask = ''; // Reset input setelah submit
    }

    // Fungsi toggle yang benar
    function toggleTaskCompletion(item: Task) {
        item.completed = !item.completed;   
    }
</script>

<form onsubmit={formSubmited}>
    <label>
        Task 
        <input type="text" bind:value={newTask} placeholder="Enter a new task" />
    </label>
    <div class="button-container">
        <button type="submit">Add Task</button>
    </div>
</form>

<section>
    {#each tasks as item (item.id)}
        <article>
            <label>
                <input 
                    type="checkbox" 
                    checked={item.completed} 
                    onchange={() => toggleTaskCompletion(item)} 
                />
                
                <span style="text-decoration: {item.completed ? 'line-through' : 'none'}">
                    {item.title}
                </span>
            </label>
        </article>
    {:else}
        <p>Belum ada tugas.</p>
    {/each}
</section>