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

server(3000, homeRoute);
