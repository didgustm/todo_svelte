<script>
	import Todo from "./components/todo.svelte";

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

	function check(todo){
		todo.done = !todo.done;
		todos = todos;
	}

    function remove(todo){
        todos = todos.filter(t => t !== todo);
    }

</script>

<main id="wrap">
	<Todo { todos } { add } { remove } { check }  />
</main>

