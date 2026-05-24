
# Aprende a Leer Análisis de Sangre

> Web educativa para aprender a interpretar resultados de laboratorio: guía, calculadora interactiva, glosario y casos clínicos.

---

## Demo

La página está diseñada para publicarse con GitHub Pages. Después de activar Pages la URL será:

`https://TU_USUARIO.github.io/NOMBRE_REPO/`

Reemplazá `TU_USUARIO` y `NOMBRE_REPO` por los tuyos.

---

## Qué incluye este proyecto

- `index.html` — Página principal y UI.
- `styles.css` — Estilos y tema claro/oscuro.
- `app.js` — Lógica de la aplicación (navegación, calculadora, glosario, casos clínicos).
- `data.js` — Datos: análisis, referencias, calculadora y casos clínicos.

---

## Características

- Explicación de pruebas comunes (hemograma, bioquímica, coagulación).
- Valores normales, interpretación de valores altos/bajos.
- Calculadora interactiva para interpretar un resultado por análisis y grupo (hombre/mujer/adulto).
- Glosario de términos médicos.
- Casos clínicos reales comentados para práctica.
- Modo claro/oscuro y diseño responsive para móviles.

---

## Cómo probarlo localmente

1. Abrí la carpeta del proyecto en tu explorador de archivos.
2. Hacé doble clic en `index.html` para abrirlo en el navegador (no requiere servidor para funciones básicas).

Opcional — con un servidor local (sirve para evitar problemas de rutas si añades recursos):

```powershell
# desde la carpeta del proyecto
# Si tenés Python 3 instalado
python -m http.server 8000

# Abrí http://localhost:8000 en el navegador
```

---

## Cómo desplegar en GitHub Pages (rápido)

1. Crear un repositorio en GitHub y subir los archivos (si no lo hiciste):

```powershell
cd C:\Users\pc\Desktop\curso
git init            # si no está inicializado
git add .
git commit -m "Primera versión del sitio"
git remote add origin https://github.com/TU_USUARIO/NOMBRE_REPO.git
git branch -M main
git push -u origin main
```

2. En GitHub: repo → Settings → Pages → Source: `main` branch / folder: `/root` → Save.
3. Esperá unos segundos y la URL pública aparecerá en la misma sección.

---

## Contribuir

Si querés mejorar contenidos o agregar casos clínicos:

1. Hacé fork del repo.
2. Creamos una rama nueva: `git checkout -b mejora-casos`.
3. Hacé cambios y enviá un pull request.

---

## Licencia

Este proyecto puede usarse con fines educativos. Si querés, agrego una licencia (MIT por defecto).

---

## Contacto

Si querés que lo suba, genere imágenes de demostración o escriba el post para redes, decime y lo hago.
