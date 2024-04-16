const express = require('express');
const logger = require('morgan');
const path = require('path');
const server = express();
server.use(express.urlencoded({ 'extended': true }));
server.use(logger('dev'));


server.post('/ITC505/lab-7/index.html', (req, res) => {
  const { noun, verb, adjective, adverb, place } = req.body;
  const madLib = `Once upon a time, there was a ${adjective} ${noun} who loved to ${verb} ${adverb} in ${place}.`;

  res.send(madLib);
});

// Setup static page serving for all the pages in "public"
const publicServedFilesPath = path.join(__dirname, 'public');
server.use(express.static(publicServedFilesPath));

// The server uses port 80 by default unless you start it with the extra
// command line argument 'local' like this:
//       node server.js local
let port = 80;
if (process.argv[2] === 'local') {
  port = 8080;
}
server.listen(port, () => console.log('Ready on localhost!'));