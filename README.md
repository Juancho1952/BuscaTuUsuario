Busca tu usario de Git o busca varios de ellos 

Se crea esta aplicación para la busqueda de usuarios de git enlisatandolos con diseños de cards para la visualización de información relevante.

Se maneja redux con axios para el llamado a la api junto al useEffect y UseState con el fin de almacenar la información de la API, se crea el hook useAxios para realizar las peticiones asincronicas a la api.

tambien es utilizado @reduxjs/toolkit con el fin de almacenar estados globales y bajar el uso de las props esto con el fin de no hacer tan extenso el codigo debido a la jerarquias que manejan las props, junto al redux se utiliza react-router-Dom para tener varias paginas dentro de una y tener un mejor control sobre el codigo y lo que visualiza el usuario final.

La aplicacion funciona ingresando un usuario de GIT o indicios del mismo y muestra la información recopilada a traves de Cards donde tendremos la cantidad de repositorios hechos con un maximo de 20 por limitaciones que tiene la api de GIT al igual tambien nos muestra los seguidores que tienes la persona con la misma limitación y la localización del mismo, si el usuario no registra su localización nos mostrara un mensaje de que no fue encontrada o en algunos casos nos aparecera vacia, al obturar el boton de mas nos enviara automaticamente a la pagina/perfil del usuario de quien seleccionemos.