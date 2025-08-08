# 💰 Calculadora de Propinas - Proyecto con React + Vite

Este proyecto ha sido desarrollado como parte de mi aprendizaje en **React**, consolidando conocimientos en **JavaScript**, **Vite** y explorando herramientas modernas como **Tailwind CSS** para el diseño.  
A través de este proyecto, profundicé en **hooks**, **optimización de rendimiento** y la creación de **componentes reutilizables**.

---

## 🚀 Descripción

Se trata de una **aplicación web interactiva** que permite calcular de forma rápida y sencilla el importe total de una cuenta, incluyendo la propina que se desee dejar, y el monto que corresponde a cada persona en caso de dividir la cuenta.

En este proyecto trabajé con conceptos clave de React como:

- **JSX** → Sintaxis para escribir HTML directamente en JavaScript.
- **Componentes** → Separación en bloques reutilizables para mejorar la organización del código.
- **Props** → Paso de información entre componentes.
- **Hooks**:
  - `useState` para manejar el estado de la aplicación.
  - `useMemo` para **evitar cálculos innecesarios** y mejorar el rendimiento.
  - **Custom Hook** propio para encapsular la lógica principal de la calculadora, lo que permite reutilizar código y mantener los componentes más limpios.
- **Renderizado condicional** para mostrar resultados solo cuando hay datos suficientes.
- **Optimización de performance** evitando renders innecesarios en ciertos componentes mediante memorization.

También aprendí a implementar **Tailwind CSS** para crear un diseño responsive y atractivo de manera rápida y eficiente, aprovechando utilidades de estilo predefinidas.

---

## 🌐 Proyecto desplegado

Puedes probar la aplicación directamente aquí:  
🔗 [**Ver en Netlify**](https://calculadorapropinas164.netlify.app/)

---

## 🧠 Evolución del proyecto

En la primera versión desarrollé la lógica principal y la interfaz. Posteriormente mejoré la aplicación mediante:

- Uso de un **custom hook** para centralizar y reutilizar la lógica de cálculo.
- Implementación de `useMemo` para optimizar cálculos pesados.
- Mejoras en la UI gracias a **Tailwind CSS**, logrando un diseño adaptable a dispositivos móviles y escritorio.
- Estructura modular de componentes, permitiendo escalar la aplicación con nuevas funcionalidades.

---

## 🛠️ Tecnologías utilizadas

- **React** con **Vite**
- **JavaScript**
- **React Hooks** (`useState`, `useMemo` y custom hooks)
- **Tailwind CSS**
- **Netlify** (despliegue)
