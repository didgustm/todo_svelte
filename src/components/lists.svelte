<script>
    import Items from "./items.svelte";

    export let styles, todos, remove;

    
</script>

<div class="{ styles.list }">
    <!-- <p class="{ styles.title }">할 일 {leng}개 남음</p> -->
    <div class="{ styles.grid }">
        {#each todos as todo}
            <Items todo={todo} styles={styles} remove={remove} />
        {/each}
    </div>
</div>