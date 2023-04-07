<script>
    export let todo, styles, handleCheck, handleRemove
</script>

<div class="{ styles.item }">
    <label>
        <input 
            type="checkbox"
            checked="{todo.done}"
            on:change={handleCheck(todo.id)}
        >
        <span class="{ styles.icon }"></span>
        <p class="{ styles.subject }">{ todo.content }</p>
    </label>
    <button on:click={handleRemove(todo.id)}>remove</button>
</div>