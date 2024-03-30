//your JS code here. If required.
<script>
    function togglePanel(panelNumber) {
        const panel = document.getElementById(`panel-${panelNumber}`);
        const panels = document.querySelectorAll('.panel');

        panels.forEach((p) => {
            p.classList.remove('active');
        });

        panel.classList.add('active');
    }
</script>

</body>
</html>