<script>
    export let styles;

    const fullMonth = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sepr","Octr","Nov","Dec"],
                fullDay = ["Sunday", "Monday", "Tuesday", "Wenesday", "Thursday", "Friday", "Saturday"]

    const now = new Date(),
                today = `${fullMonth[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`,
                day = now.getDay();
</script>

<div class="{ styles.top }">
    <p class="{ styles.date }">{today}</p>
    <p class="{ styles.day }">{fullDay[day]}</p>
</div>