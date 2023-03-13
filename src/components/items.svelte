<script>
    export let todo, styles, remove
</script>

<div class="{ styles.item }">
    <label>
        <input 
            type="checkbox"
            bind:checked={todo.done}
            on:change={() => todo.done = todo.done}
        >
        <span class="{ styles.icon }"></span>
        <p class="{ styles.subject }">{ todo.description }</p>
    </label>
    <button
        on:click={remove(todo)}
    >remove</button>
</div>