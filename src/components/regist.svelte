<script>
    export let styles, todoValue, handleSubmit;
</script>

<form 
    name="createForm" 
    id="createForm"
    on:submit={e => {
        e.preventDefault();
        handleSubmit(e);
    }}
>
    <div class="{ styles.regist }">
        <input 
            type="text"
            name="create" 
            id="create" 
            placeholder="text" 
            autocomplete="off"
            value={$todoValue}
        >
        <button type="submit">Add</button>
    </div>
</form>