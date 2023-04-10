require('dotenv').config();
const { Telegraf } = require('telegraf');
const fs = require('fs');
const bot = new Telegraf(process.env.BOT_TOKEN);

// comandos
const arcsComandos = fs.readdirSync('./cmds').filter((a) => a.endsWith('.js'));
for (const arc of arcsComandos) {
  const comando = require(`./cmds/${arc}`);
  const nombre = arc.replace('.js', '');
  bot.command(nombre, comando);
}
//
// acciones
const arcsAcciones = fs
  .readdirSync('./actions')
  .filter((a) => a.endsWith('.js'));
for (const arc of arcsAcciones) {
  const accion = require(`./actions/${arc}`);
  const nombre = arc.replace('.js', '');
  bot.action(nombre, accion);
}
//

bot.launch();
