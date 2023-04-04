<script>
    export let todo, styles, remove, check
</script>

<div class="{ styles.item }">
    <label>
        <input 
            type="checkbox"
            checked="{todo.done}"
            on:change={ check(todo) }
        >
        <span class="{ styles.icon }"></span>
        <p class="{ styles.subject }">{ todo.description }</p>
    </label>
    <button
        on:click={remove(todo)}
    >remove</button>
</div>