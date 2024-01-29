
# Introduccion

### Docker | GitLab | Opción SSL | Opción SSH

- Este manual detalla la implementación de un aplicativo, como un facturador, en instancias Linux con Ubuntu 18 o superior, utilizando GitLab. Se proporciona un script que actualiza el sistema, instala herramientas y realiza configuraciones previas, dejando el aplicativo listo para probar en menos de 20 minutos. Los requisitos incluyen acceso SSH al servidor y la configuración del dominio hacia la instancia.

- Para la instalación, se clona un fragmento de GitLab, se accede a la carpeta clonada, y se da permisos de ejecución al script. El despliegue se inicia con el comando "./install.sh [dominio]". Durante el proceso, se solicitan credenciales de GitLab y se ofrece la opción de instalar SSL gratuito, con instrucciones detalladas para su configuración. También se brinda la posibilidad de gestionar actualizaciones automáticas mediante la sesión de GitLab.

- Al finalizar el script, se proporcionan datos importantes, como el usuario administrador, la contraseña, la URL del proyecto, la ubicación en el servidor, y la clave SSH para GitLab (si se selecciona la instalación de SSH). Se incluyen enlaces de interés para actualizaciones de SSL, ejecución de script en instalaciones Docker, gestión independiente de SSL, y una guía GitLab con parámetros adicionales.
 


### Docker + GitLab + SSL

- Este script facilita la implementación de un aplicativo en instancias Linux. Realiza actualizaciones del sistema, instala herramientas y configura un certificado SSL renovable cada 90 días. Se requiere acceso SSH y la configuración del dominio para la validación del certificado. Durante la ejecución, se crean registros TXT en el dominio para validación en tiempo real. Se proporcionan credenciales y URL del proyecto GitLab al finalizar la instalación.


### Docker | Linux | SSL externo

- Después de la instalación del aplicativo en instancias Linux, se sugiere evitar la instalación del SSL durante el proceso. Posteriormente, acceder a la ruta de instalación y modificar los parámetros necesarios en el archivo .env. Se deben ejecutar comandos adicionales para eliminar la caché de la aplicación. Es crucial habilitar el puerto 443 para permitir el acceso a la herramienta, ya que sin una configuración de SSL, este acceso no estará disponible.

### Linux | Valet

- Para instalar un aplicativo en un servidor Linux, se necesitan diversos preparativos, como acceso root y la instalación de PHP 7.2, MySQL, Git, Curl, y Composer. Además, se detallan procedimientos específicos para configurar PHP 7.2 en Ubuntu. Posteriormente, se instala y configura Valet, se crea un directorio de código, y se clona un repositorio. La configuración del archivo .env es esencial, seguida de comandos para generar claves, instalar paquetes y realizar migraciones.

- Se destaca la necesidad de verificar la disponibilidad del puerto :80, detener servicios de Apache si es necesario y asegurarse de que Nginx esté en ejecución. El resumen concluye con la creación de accesos al aplicativo bajo el dominio Facturadorpro3.test. Este proceso integral prepara el entorno para una implementación exitosa.