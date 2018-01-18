const router = require('express').Router();
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const replies = require('../data/messages');

router.post('/sms', (req, res) => {
  // pulls data from sent message
  const messageData = req.body.Body.toUpperCase();

  const smsCount = req.session.counter || 0;

  // if this is the first text being sent to the number, the user gets a welcome message.
  let message = replies.welcome;

  // after that, they receive a response based on the word that they text. Reply text is kept in a JSON file.
  if (smsCount > 0) {
    if (messageData === "TALK") {
      message = replies.talk;
    } else if (messageData === 'LEGAL') {
      message = replies.legal;
    } else if (messageData === 'HEALTH') {
      message = replies.health;
    } else if (messageData === 'LOVE') {
      const x = Math.floor(Math.random() * (replies.inspiration.length - 1));
      message = replies.inspiration[x];
    } else {
      message = replies.repeat;
    }
  }

  req.session.counter = smsCount + 1;
  // instantiating a new message response and setting it to the custom message created above.
  const twiml = new MessagingResponse();
  twiml.message(message);

  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

module.exports = router;
