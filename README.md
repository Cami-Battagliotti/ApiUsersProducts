Crear una API, utilizando el módulo net y el patrón MVC (Modelo-Vista-Controlador), la cual debe consumir una base de datos (https://dummyjson.com/) que contiene usuarios y productos
(Ruta para acceder a los usuarios: https://dummyjson.com/users y la ruta para acceder a los products: https://dummyjson.com/products)
Requisitos:
Inicialización del Proyecto con npm, git & github:
Instalación de las dependencias necesarias.
Crea un archivo database.js para configurar la conexión a la base de datos.

Crear un modelo User con los metodos getByEmail, getById, getAll.
Crear un modelo Product con los metodos getByDescription, getById, getAll.

Implementa un controlador para manejar la obtención de clientes y productos.

Define rutas para las obtencion de los recursos.

Rutas de la vista:
Obtener todos los usuario (users).
Obtener un usuario por id(users/id).

Obtener todos los productos (products).
Obtener un producto por id(products/id).
