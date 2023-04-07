<script>
    import Items from "./items.svelte";
    import Remain from "./remain.svelte";

    export let styles, todos, remain, handleCheck, handleRemove

</script>

<div class="{ styles.list }">
    <Remain { styles } {remain} />
    <div class="{ styles.grid }">
        {#each $todos as todo}
            <Items { todo } { styles } {handleCheck} {handleRemove} />
        {/each}
    </div>
</div>