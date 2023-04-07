<script>
    import { todos, todoValue } from "../stores";
    import styles from "./todo.module.css"
    import Date from "./date.svelte";
    import Lists from "./lists.svelte";
    import Regist from "./regist.svelte";

    const st = styles;
    $: remain = $todos.filter(t => !t.done).length;

    const handleSubmit = e => {
        todoValue.submit(e.target[0].value);
        if($todoValue){
            todos.insert($todoValue);
            todoValue.submit('')
        } else{
            alert('No data');
            e.target[0].focus();
        }
    }

    const handleCheck = id => todos.check(id);

    const handleRemove = id => todos.remove(id);

</script>

<div class="{ styles.todo }">
    <Date styles={st} />
    <Lists styles={st} {remain} {todos} {handleCheck} {handleRemove} />
    <Regist styles={st} {handleSubmit} {todoValue} />
</div>