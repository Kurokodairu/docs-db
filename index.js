const server = require('server');
var fs = require('fs');
const { get, post } = server.router;
const { render, json } = server.reply;

const id = "1mUGtudrnhMV7JbzHFuWPPbHOkKYk6KLQaNPWrlyejSg"
const drive = require('drive-db')(id);

const homeRoute = get('/', async () => {
  const db = await drive.load();
  console.log(db.find());
  return render('index.hbs', { users: db.find() });
});

server({ port: 3000 }, homeRoute, get(ctx => status(404)), post('/', ctx => json(ctx.data)));
