<script>
    export let styles, add

    let input;
</script>

<form 
    name="createForm" 
    id="createForm"
    on:submit={e => {
        e.preventDefault();
        add(input)
    }}
>
    <div class="{ styles.regist }">
        <input type="text" name="create" id="create" placeholder="text" autocomplete="off" bind:this={input}>
        <button type="submit">Regist</button>
    </div>
</form>