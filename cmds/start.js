const { Markup } = require('telegraf');
module.exports = (ctx) => {
  return ctx.reply(
    '¡Bienvenido! Este es un bot de ejemplo.',
    Markup.inlineKeyboard([Markup.button.callback('Comandos', 'cmds')])
  );
};
