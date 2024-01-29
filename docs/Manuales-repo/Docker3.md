# Docker | Linux | SSL externo 

## Pasos 

- Para instalar debe ejecutar el script evitando instalar el SSL, le será consultado en el proceso y deberá ingresar "n"
- Finalizada la instalación debe dirigirse a la ruta de instalación
```
cd /root/facturadorpro31/
```

- Debe editar el archivo .env

```
nano .env
```

Dentro del editor ubicar los parámetros y cambiarlos

![IMG](https://media.discordapp.net/attachments/1087758675118137394/1201601781940101211/image.png?ex=65ca69dd&is=65b7f4dd&hm=11f6aaa4d9e8ecd3a0a33838b88cc7ad9bb8958aeb7f78b6d5bccdc3814c58af&=&format=webp&quality=lossless) ![IMG](https://media.discordapp.net/attachments/1087758675118137394/1201601958079910089/image.png?ex=65ca6a07&is=65b7f507&hm=9e01ef7aadc4ee776ff2535f5e80c5427c7e55bd69cf300516bb1a9982787414&=&format=webp&quality=lossless)

- Una vez finalizado, guarde y salga del editor
- Ejecute los siguientes comandos para eliminar la caché de la aplicación
```
php artisan config:Cache
```

- Con eso habrá completado el lado de la herramienta, en ese momento hasta no tener un SSL configurado no podrá acceder a la herramienta

### Importante 

> :memo: **Note:** 
>  - recuerde habilitar el puerto 443 para poder tener acceso a la herramienta
