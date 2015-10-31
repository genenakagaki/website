var nodemailer   = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kagendev@gmail.com',
    pass: '10QPalzm'
  }
});

exports.sendMail = function(req, res) {
  var mail = req.body;

  var mailContent = {
    // from : Does not work with gmail
    to      : 'gene.nakagaki@gmail.com',
    subject : 'Gene Nakagaki website: ' + mail.subject, 
    text    : 'Sender email: ' + mail.email +'\n'+ mail.message
  };
  console.log("hi")
  console.log(req.body);

  transporter.sendMail(mailContent, function(err, info) {
    if (err) {
      res.status(400).send(err);
    }
    else {
      res.json({
        message : 'Mail sent successfully!'
      });
    }
  });   
};