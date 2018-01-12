const router = require('express').Router();
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const replies = require('../data/messages');

router.post('/sms', (req, res) => {
  const messageData = req.body.Body;
  console.log('messageData', messageData);

  const smsCount = req.session.counter || 0;

  let message = replies.welcome;

  if (smsCount > 0) {
    if (messageData === 'TALK') {
      message = replies.talk;
    } else if (messageData === 'LEGAL') {
      message = replies.legal;
    } else if (messageData === 'GLITTER') {
      message = replies.inspiration;
    } else {
      message = replies.repeat;
    }
  }
  console.log('message', message);

  req.session.counter = smsCount + 1;

  const twiml = new MessagingResponse();
  twiml.message(message);

  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

module.exports = router;
