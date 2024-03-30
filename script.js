//your JS code here. If required.
function togglePanel(panelNumber) {
    const panel = document.getElementById(`panel-${panelNumber}`);
    panel.classList.toggle('active');
}
