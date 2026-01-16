// Theme Toggle Script
// Maneja el cambio entre modo claro y oscuro

// Función para aplicar el tema
function applyTheme(theme) {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(theme);

    // Actualizar el icono del botón
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        themeIcon.textContent = theme === 'dark-theme' ? '☀️' : '🌙';
    }
}

// Función para toggle del tema
function toggleTheme() {
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
    const newTheme = currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';

    applyTheme(newTheme);

    // Guardar preferencia en localStorage
    localStorage.setItem('theme', newTheme);
}

// Cargar tema guardado al cargar la página
function loadTheme() {
    // Intentar obtener tema guardado
    const savedTheme = localStorage.getItem('theme');

    // Si hay un tema guardado, usarlo; si no, usar tema claro por defecto
    const theme = savedTheme || 'light-theme';

    applyTheme(theme);
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    loadTheme();

    // Agregar event listener al botón de toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
});
