<script>
    import styles from "./todo.module.css"
    import Date from "./date.svelte";
    import Lists from "./lists.svelte";
    import Regist from "./regist.svelte";

    export let todos, remove, add, check

    const st = styles;
    $: remain = todos.filter(t => !t.done).length;

    
</script>

<div class="{ styles.todo }">
    <Date styles={st} />
    {#if remain > 1}
    <p class="{ styles.remain }"><span>{remain}</span> items left</p>
    {:else if remain == 1}
    <p class="{ styles.remain }"><span>{remain}</span> item left</p>
    {:else}
    <p class="{ styles.remain }">No item</p>
    {/if}
    <Lists styles={st} {todos} {remove} { check } />
    <Regist styles={st} {add} />
</div>