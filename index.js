const server = require('server');
var fs = require('fs');
const { get, post } = server.router;
const { render, json } = server.reply;

const id = "1mUGtudrnhMV7JbzHFuWPPbHOkKYk6KLQaNPWrlyejSg"
const drive = require('drive-db')(id);

const homeRoute = get('/', async () => {
  const db = await drive.load();
  users = db.find();
  for (index = 0; index < users.length; ++index) {
    console.log(users[index]);
}
  return render('index.hbs', { users: users });
});


function delCache() {
  if (fs.existsSync("db.json")) {
    fs.unlink('db.json', function (err) {
      if (err) throw err;
    });
  }
}

setInterval(function () {
  delCache();
}, 5000);


server({ port: 2700 }, homeRoute, get(ctx => status(404)), post('/', ctx => json(ctx.data)));
