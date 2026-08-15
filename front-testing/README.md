Aquí tienes la documentación completa, clara y profesional, sin el uso de íconos o emojis:

```markdown
# Proyecto de Pruebas Técnicas - QA Automation (SauceDemo)

En este repositorio se encuentra la solución para la prueba técnica de automatización. El proyecto contiene la automatización de los escenarios de inicio de sesión para la plataforma SauceDemo utilizando Playwright, así como la documentación de soporte en formato Excel.

---

## Requisitos Previos

Para ejecutar la solución en tu equipo local es necesario contar con:
* Node.js (se recomienda la versión 18 o superior).

---

## Instalación

1. Clona o descarga este repositorio en tu equipo local.
2. Abre una consola de comandos dentro de la carpeta raíz del proyecto.
3. Instala las dependencias necesarias ejecutando:
   npm install
4. Instala los navegadores requeridos por Playwright ejecutando:
   npx playwright install

---

## Ejecución de las Pruebas

Los escenarios automatizados incluyen la validación de Login Exitoso, Login Fallido y la validación de Campos Obligatorios. Puedes ejecutarlos mediante los siguientes comandos:

* Ejecutar las pruebas de SauceDemo con registro detallado en consola:
  npm run test:saucedemo

* Ejecutar las pruebas en modo visual e interactivo:
  npx playwright test --ui

---
