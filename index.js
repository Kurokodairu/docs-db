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

server(25566, homeRoute);

function deleteCache() {
  fs.unlink("db.json", function (err) {
    if (err) throw err;
    console.log("DB Cache Deleted!");
  });
}

setInterval(function(){
  deleteCache();
}, 5000);
