/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Colores principales
        primary: "#fffec8", // Fondo principal o elementos destacados
        primaryDark: "#ccc89a", // Para bordes o variantes contrastadas del fondo
        secondary: "#d8fd94", // Elementos secundarios o destacados suaves
        successDark: "#8fc65b", // Textos de éxito o gráficos contrastados
        success: "#c8e6c9", // Verde pastel para el header del Collapsible
        warning: "#fe9d97", // Alertas suaves o elementos de precaución
        warningDark: "#e86b63", // Indicadores de advertencia más fuertes
        error: "#fe495f", // Alertas críticas o mensajes de error
        errorLight: "rgba(254, 73, 95, 0.2)", // Fondo de áreas de error (formularios)

        // Colores informativos (azul para balancear)
        info: "#5db9ff", // Botones de acción, links, o textos informativos
        infoDark: "#3d8dcc", // Bordes o variantes más serias de "info"
        infoLight: "rgba(93, 185, 255, 0.2)", // Fondo suave para gráficos o áreas informativas

        // Colores neutros
        neutralLight: "#f5f5f5", // Fondo general para el dashboard
        neutral: "#b3b3b3", // Bordes, íconos, o textos secundarios
        neutralDark: "#4d4d4d", // Textos principales y elementos clave
        neutralLighter: "#e0e0e0", // Fondo más claro para el contenido del Collapsible

        // Fondos con opacidad (para gráficos)
        graphSuccess: "rgba(189, 237, 126, 0.2)", // Relleno de gráficos de éxito
        graphWarning: "rgba(254, 157, 151, 0.2)", // Relleno de gráficos de advertencia
      },
    },
  },
  plugins: [],
};
