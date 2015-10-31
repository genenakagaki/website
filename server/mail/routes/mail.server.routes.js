'use strict';

module.exports = function(app) {
  var mail = require('../controller/mail.server.controller');

  app.route('/api/mail/sendMail').post(mail.sendMail);
};