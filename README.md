# 🚀 Portafolio 2025 – Astro + Tailwind + TypeScript

Este es el código del **frontend de mi portafolio personal**, desarrollado con **Astro**, **TailwindCSS**, **TypeScript** y uso de **HTML, CSS y JavaScript puro** donde es necesario.
El sitio se compila como proyecto estático y se publica mediante **GitHub Pages**.

---

## 🧩 Tecnologías usadas

* **Astro** – Framework de generación estática, rápido y optimizado
* **TailwindCSS** – Estilos con enfoque utilitario
* **TypeScript** – Tipado estático para mejor mantenibilidad
* **JavaScript** – Lógica y efectos del frontend
* **GitHub Pages** – Hosting sin servidor
* **PNPM / NPM** – Dependencias y scripts del proyecto

---

## 📂 Estructura del proyecto

La organización del proyecto sigue el esquema recomendado por Astro, adaptado a mi flujo de trabajo:

```
/
├── public/             # Archivos estáticos servidos directamente
│   ├── fonts/          # Fuentes
│   ├── icons/          # Iconos del proyecto
│   ├── imgs/           # Imágenes públicas
│   └── favicon.svg
│
├── src/                # Código fuente del sitio
│   ├── assets/         # Imágenes y recursos utilizados desde código
│   ├── components/     # Componentes reutilizables
│   ├── layouts/        # Plantillas globales
│   ├── pages/          # Rutas del sitio
│   ├── sections/       # Secciones independientes del portafolio
│   └── styles/         # Estilos globales o utilitarios
│
├── astro.config.mjs    # Configuración principal de Astro
├── package.json        # Dependencias y scripts
└── .gitignore
```

---

## 🧞 Scripts disponibles

Desde la raíz del proyecto puedes ejecutar:

| Comando           | Acción                                               |
| ----------------- | ---------------------------------------------------- |
| `npm install`     | Instala todas las dependencias                       |
| `npm run dev`     | Ejecuta el proyecto en modo desarrollo (`localhost`) |
| `npm run build`   | Genera el sitio listo para producción en `/dist`     |
| `npm run preview` | Previsualiza el build antes de desplegar             |

> Puedes usar igualmente `pnpm`, `npm` o `yarn` según tu preferencia.

---

## 🌐 Despliegue en GitHub Pages

El proyecto se construye como un sitio estático y se publica en **GitHub Pages** mediante **GitHub Actions**.
Cada cambio enviado al repositorio puede generar automáticamente una nueva versión del sitio.

---

## 📚 Recursos útiles

* Documentación oficial de Astro
  [https://docs.astro.build](https://docs.astro.build)
* Guía de TailwindCSS
  [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
* Referencia oficial de TypeScript
  [https://www.typescriptlang.org/docs](https://www.typescriptlang.org/docs)

---

✨ *Portafolio creado con diseño, rendimiento y enfoque profesional en mente.*
