<script>
    import styles from "./todo.module.css"
    import Date from "./date.svelte";
    import Lists from "./lists.svelte";
    import Regist from "./regist.svelte";

    const st = styles;

    let uid = 1;
    let todos = []

    function add(input){
        const todo = {
            id: uid++,
            done: false,
            description: input.value
        }
        if(input.value != ''){
            todos = [...todos, todo];
            input.value = '';
        } else{
            alert('no data');
        }
    }

    function remove(todo){
        todos = todos.filter(t => t !== todo);
    }
</script>

<div class="{ styles.todo }">
    <Date styles={st} />
    <Lists styles={st} todos={todos} remove={remove} />
    <Regist styles={st} add={add} />
</div>