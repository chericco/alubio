
## Misiones HECHAS
- Misión 1: A, B, C Retos A, B, C
- Misión 2:  A (Solo Backend), B (Solo Backend), C
- Misión 3:  B Reto B (No implementado)

## Primeros pasos
1. <p>Dentro del directorio backend crear un fichero con el nombre de .env con el siguiente contenido que tendras que completar con tus configuraciones</p>
 * PORT=9000
 * NODE_ENV="dev"
* SECRETKEY = 
* API_GOREST = 
- PORT_DB=3306
- USER_DB=
- PASSWORD_DB=
- DATABASE_DB="pixomaticjec"
- HOST_DB="localhost"

2. <p> Ejecutar los scripts de SQL dentro de la base de datos, estos los encontrara en la carpeta SQL<p>

3. <p>Abre una terminal en el directorio backend y ejecuta el comando npm run start<p>
 4. <p>Abre una terminal en el directorio frontend y ejecuta el comando ng serve<p>
   5. Todo listo!


## Misión 1
### Reto C Seguridad
<p>¿Por qué crees que el método anterior puede no ser del todo seguro?
Simplemente porque los datos son almacenados en la parte del cliente, estos se pueden ver expuestos a modificaciones para realizar una escalada de privilegios dentro la aplicación o pueden ser interceptado por terceras partes, posiblemente dando lugar a una suplantación de identidad dentro de la aplicación. 
Ultima vulnerabilidad critica en las librerías de JWT de NodeJS  https://auth0.com/blog/critical-vulnerabilities-in-json-web-token-libraries/ </p>

## Misión 3 
### B Rendimiento.
<p>Pues creo que una posible manera es guardar toda la información que hay en la API externa en una base de datos dentro de nuestra red y con un pequeño observable que apunten a meta.pagination.total, observar si hay algún cambio dentro de /owners y si es así, hacer un subproceso interno para replicar esa actualización dentro de nuestra base de datos en nuestra red.</p>

### Reto B Detectando y evitando un Hacker.
<p> Hay muchas maneras de detectar comportamientos de usuarios malintencionado ya que son prácticas que se repiten en todos los procesos de ataque. 
Uno de estos procesos es la enumeración, hay diccionarios de uso común para hacer búsquedas de directorios en sitios web, una posible idea es coger las diez primeras rutas de los distintos diccionarios y si un usuario envía diez peticiones seguidas de las mismas rutas y en el mismo orden que estos diccionarios, se marcaria y se actuaría consecuencia.</br></br>
Detectar subidas de Shell, en todos los formularios y upload de files hacer un checking en el backend tal que se hace un string del fichero subido y con reglas Yara se hace una búsqueda de todas las posibles Shells que se pueden crear. Y si hace match estas reglas, descartar el fichero subido y se marca al usuario.</br></br>
Otra posible medida contra usuarios malintencionado que quieran distribuir contenido fraudulento entro los clientes legítimos de la aplicación, seria utilizar la API de VirusTotal para comprobar que las urls enviada en los comentarios o archivos no estén marcada como contenido malicioso en VT, si están marcadas se bloquea ese comentario y no es publicado.</br></br></br>
Y por último también algo básico seria bloquear directamente todas las peticiones que vengan a través de un proxy de listados públicos y de direcciones de países de dudosa moralidad en temas de delitos en la red, ya que los atacantes utilizan proxy o servidores vulnerados de esas regiones para hacer de pivoting.</br></br>
A la pregunta de como ignoraría sus peticiones de un ataquen, la verdad es que no lo haría, la mejor manera de tratar estas cosas es hacer que siga a un conejo blanco ya que perderá una enorme cantidad de tiempo sin llegar a nada y al final se cansara y desistirá. Todo esto haciendo una redirección interna de sus peticiones a unos servidores de honeypot totalmente aislados.
</p></br>

### Erratas del nuevo documento
- En la misión 1 A dice que "date" es opcional y en la misión 1 B dice que no se puede editar, por lo hay incongruencia.
-	En la misión 1 reto A la formula que da para N,  creo que no funciona como la explicación quiere decir, lo correcto desde mi punto de vista sería /companies?page=N -> Devolvería las empresas  (N-1)*20 a  N*20


