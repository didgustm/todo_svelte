<script>
    import Items from "./items.svelte";
    import Remain from "./remain.svelte";

    export let styles, todos, remove, check, remain

    
</script>

<div class="{ styles.list }">
    <Remain { styles } { remain } />
    <div class="{ styles.grid }">
        {#each todos as todo}
            <Items { todo } { styles } { remove } { check } />
        {/each}
    </div>
</div>