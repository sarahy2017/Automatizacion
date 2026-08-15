Pruebas Automatizadas de la API ReqRes¡Hola! En esta carpeta encuentras los scripts automatizados para probar la API pública de ReqRes (reqres.in). Al armar estas pruebas, la idea principal fue usar programación defensiva. Esto significa que los scripts están listos para lidiar con fallas del servidor o datos inconsistentes sin dar "falsos positivos" (que el test se marque como aprobado cuando en realidad algo falló) y sin detener el resto de las pruebas en cadena.

¿Cómo se pensaron las pruebas?
1. Creación de Usuario (POST /users)
¿Qué hace? Envía los datos obligatorios del usuario (name y job).
Estrategia: El test solo acepta un código 201 Created (éxito) o un 400 Bad Request (error en los datos enviados). Si el servidor se cae o lanza un error inesperado (como un 500), el test falla de inmediato para avisar al equipo.
Control del flujo: Si el usuario se crea con éxito, el script guarda automáticamente su ID en las variables globales para usarlo después. Si falla, el test simplemente salta ese paso de forma limpia (pm.test.skip) en lugar de romper el código y congelar las demás pruebas.

2. Consulta de Usuario (GET /users/{id})
¿Qué hace? Usa el ID que guardamos en la prueba anterior para buscar al usuario de forma dinámica.
El reto del entorno: ReqRes es un servidor de simulación (Mock Server). Aunque simula que crea el usuario con el POST, no guarda nada en una base de datos real. Por eso, al intentar buscar ese ID con el GET, la API responderá con un error 404 Not Found.
La solución: Para que el reporte de pruebas no se llene de alertas falsas, configuré el test para aceptar tanto la respuesta ideal (200 OK) como la respuesta real de la simulación (404 Not Found). Si el servidor devuelve un 404, las validaciones de nombre y trabajo se marcan automáticamente como Omitidas (Skipped). Así, el equipo sabe que la lógica del test funciona bien, pero el entorno de pruebas está limitado.

Cómo correr las pruebasDesde la interfaz de PostmanHaz clic en Import (arriba a la izquierda en Postman).Arrastra el archivo JSON de la colección desde: api-testing/collections/reqres_api_tests.postman_collection.json.Abre la colección en el panel lateral y presiona Run collection para ver los resultados en orden.