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
    <Lists styles={st} {todos} {remove} { check } { remain } />
    <Regist styles={st} {add} />
</div>