// theme-toggle.js
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme'); // Muda para modo claro
        document.getElementById('theme-toggle').textContent = 'Alternar para Dark'; // Atualiza texto do botão
    } else {
        document.documentElement.setAttribute('data-theme', 'dark'); // Muda para modo escuro
        document.getElementById('theme-toggle').textContent = 'Alternar para Light'; // Atualiza texto do botão
    }
}