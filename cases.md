TEST CASES
-------------------

1) #Título del caso: Registrar usuario exitosamente

● Navegador y SO: Google Chrome / Windows 11
● Prioridad: Alta
● Pasos detallados para reproducir
    Paso 1: Como usuario se debe ingresar a https://pushing-it.vercel.app
    Paso 2: Verificar que el formulario de registro se visualice correctamente.
    Paso 3: Completar los campos del formulario con datos válidos
    Paso 4: Hacer click en el boton "Register"
    Paso 5: Verificar que el usuario se haya registrado correctamente

● Resultado esperado 
![Resultado esperado](/img/1/resultadoEsperado.png)

● Resultado obtenido
![Resultado obtenido](/img/1/resultadoEsperado.png)

● Evidencia visual
![Evidencia visual](/img/1/resultadoVisual.png)

● Recomendaciones: (opcional) Mejora, propuesta o comentario adicional sobre la experiencia UX.
Se recomienda agregar un mensaje en el front que le avise al usuario que se ha registrado correctamente
Se recomiendo agregar una validacion robusta para evitar el robo de cuentas por ejemplo enviando un codigo al email
Se recomienda agregar el campo emailk


2) #Titulo del caso: Registrar usuario con campo nombre vacío
● Navegador y SO: Google Chrome / Windows 11
● Prioridad: Alta
● Pasos detallados para reproducir:
    Paso 1: Como usuario se debe ingresar a https://pushing-it.vercel.app
    Paso 2: Verificar que el formulario de registro se visualice correctamente.
    Paso 3: Completar los campos del formulario con datos válidos pero dejar el campo nombre vacío
    Paso 4: Hacer click en Register
    Paso 5: Se debe visualizar el mensaje de alerta "Debe completar este campo <nombre>"

● Resultado esperado
![Resultado esperado](/img/2/resultadoEsperado.png)

● Resultado obtenido
![Resultado obtenido](/img/2/resultadoEsperado.png)
