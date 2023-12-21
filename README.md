# Project logs

## **Description:** 
Sera un porta-blog para poder no solo, publicar mis proyectos, sino tambien darle seguimiento y calcular el progreso en el tiempo. Usare **Django** para desarrollarlo. Ademas, usare **Gunicorn**, ya que no necesito caracteristicas avanzas sobre HTTP, y en este caso, es mas que suficiente como **WSGI**.
Como **reverve proxy** usare **Nginx**, debido a que usare **Certbot**, me gustaria un script que no solo, actualice el certificado, sino que me informe del esta actual del certificado. Para la base de datos, usare **Postgres**, en produccion y en desarrollo.

## Front-end:
    * SASS compiled using npm
    * Bulma compiled using npm compiled together with SASS
    * Vue compiled using webpack
## Back-end:
    * Django
    * ...

## Technical details
"I am utilizing a hybrid development approach that combines Python (Django) with compiled JavaScript to manage Vue.js components in a unified manner. The process begins with the development of individual Vue components, each encapsulated in its own .vue file. These components are not directly related to each other, allowing for modular and flexible design.

Using Webpack, I compile these individual Vue components into a single, unified JavaScript file. This setup streamlines the integration of Vue into my Django project by reducing the number of script requests and optimizing loading times on the client side.

In my Django templates, I include this compiled JavaScript bundle, ensuring that all Vue components are readily available. The components are mounted to specific elements in the Django/Jinja2 templates, allowing for the selective enhancement of parts of the webpage with Vue's reactivity and interactivity, while the rest of the page remains managed by Django's server-side rendering.

This approach effectively marries the robust back-end capabilities of Django with the dynamic front-end features of Vue.js, maintaining a clear separation of concerns and optimizing web performance."
## Notas:
Tengo que traducir esto


