<h1>Comandos y eventos en Telegraf</h1>
Este es un ejemplo de cómo utilizar Telegraf para manejar comandos en un bot de Telegram. En este ejemplo, los comandos están separados por archivos en la carpeta "cmds".

<h2>Requisitos:</h2>

- Node.js y npm instalados en tu sistema.
- Una cuenta de Telegram y un bot de Telegram. Puedes seguir [estas instrucciones](https://core.telegram.org/bots#3-how-do-i-create-a-bot) para crear un bot de Telegram y obtener su token.

<h2>Instalación:</h2>

1. Clona este repositorio o descarga los archivos en tu sistema.
2. Abre una terminal y navega hasta el directorio del proyecto.
3. Ejecuta el comando `npm install` para instalar las dependencias.

<h2>Configuración:</h2>

1. Obtén el token de tu bot de Telegram.
2. Crea un archivo `.env` en el directorio raíz de tu proyecto.
3. Agrega la siguiente línea al archivo `.env`:
```javascript
BOT_TOKEN=<token del bot>
```

<h2>Uso:</h2>

Para ejecutar el bot, ejecuta el comando `npm start` en tu terminal.

El bot incluye estos comandos de ejemplo:

- `/start`: Responde con el mensaje de inicio.

Si deseas agregar nuevos comandos, simplemente crea un nuevo archivo en la carpeta "cmds" y sigue la misma estructura del comando `/start`.


<h2>Contribuir</h2>
Siéntete libre de abrir un problema o una solicitud de extracción si deseas contribuir a este proyecto.
