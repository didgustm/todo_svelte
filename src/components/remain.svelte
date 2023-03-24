<script>
    export let styles, remain
</script>

{#if remain > 1}
<p class="{ styles.remain }"><span>{remain}</span> items left</p>
{:else if remain == 1}
<p class="{ styles.remain }"><span>{remain}</span> item left</p>
{:else}
<p class="{ styles.remain }">No item</p>
{/if}