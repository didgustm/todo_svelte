<script>
    export let styles, remain
</script>

{#if remain >= 1}
<p class="{ styles.remain }"><span>{remain}</span> {remain > 1? 'items': 'item'} left</p>
{:else}
<p class="{ styles.remain }">No item</p>
{/if}