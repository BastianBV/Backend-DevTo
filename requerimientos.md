<!-- GET /posts -->
<!-- GET /posts/:id -->
<!-- POST /posts -->
<!-- DELETE /post (protegido, solo usuarios con token pueden hacer esto) -->
<!-- PATCH /post/:id (protegido) -->
<!-- POST /users -> Creacion de un usuario -> Signup -->
<!-- POST /auth/login -> Login -->

Los requisitos son:
<!-- - Hacer uso de arquitectura limpia para estructurar el proyecto -->
<!-- - Hacer uso de middlewares para delimitar el acceso de los usuarios -->
- Deben conectar su reto de front con su nuevo API
- Hacer registro e iniciado de sesion
- Reflejar los likes de un post.

Extras:
- Nada mas permitir al usuario que creo el post editarlo o eliminarlo. (Backend y Frontend)
<!-- - Endpoint de agregar like. -->
- Endpoint de quitar like.
- Filtrado de posts

Como developer:
- ejecutar: $npm install 
- ejecutar: $npm install dotenv
- ejecutar: $npm install express-validator
