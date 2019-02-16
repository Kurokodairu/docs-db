const server = require('server');
const { render } = server.reply;

const id = '1mUGtudrnhMV7JbzHFuWPPbHOkKYk6KLQaNPWrlyejSg';
const drive = require('drive-db')(id);

server(async () => {
  const db = await drive.load();

  return render('index.hbs', { users: db.find() });
});
