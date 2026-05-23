const tabContainer = document.getElementById('tablist');
const panels = document.querySelectorAll('.panel');


tabContainer.addEventListener('click', (e) => {
    const clickedTab = e.target.closest('.tab');

    if(!clickedTab) return;

    document.querySelectorAll('.tab').forEach(t => {
        t.classList.remove('active');
    });

    panels.forEach(p => {
        p.classList.remove('active');
        p.hidden = "true";
    });

    clickedTab.classList.add('active');

    const controlledPanel = clickedTab.getAttribute('aria-controls');
    const activePanel = document.getElementById(controlledPanel);
    activePanel.classList.add('active');
    activePanel.removeAttribute('hidden');

});
