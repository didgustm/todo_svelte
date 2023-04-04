<script>
	import Todo from "./components/todo.svelte";

    const stroageItems = JSON.parse(localStorage.getItem('todoitems'));

    let todos = [];
    if(stroageItems){
        stroageItems.forEach(x => {
            todos.push(x);
            //add(x);
        });
    }
    let uid = todos.length;

    function add(input){
        const todo = {
            id: uid++,
            done: false,
            description: input.value
        }
        if(todo.description != ''){
            todos = [...todos, todo];
            input.value = '';
            localStorage.setItem('todoitems', JSON.stringify(todos));
        } else{
            alert('no data');
        }
    }

	function check(todo){
		todo.done = !todo.done;
		todos = todos;
        localStorage.setItem('todoitems', JSON.stringify(todos));
	}

    function remove(todo){
        todos = todos.filter(t => t !== todo);
        localStorage.setItem('todoitems', JSON.stringify(todos));
    }

</script>

<main id="wrap">
	<Todo { todos } { add } { remove } { check }  />
</main>

