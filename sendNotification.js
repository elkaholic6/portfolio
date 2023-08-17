const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.sendEmailOnSubmission = functions.firestore
  .document('submissions/{submissionId}')
  .onCreate((snapshot, context) => {
    const submissionData = snapshot.data();

    return admin
      .firestore()
      .collection('submissions').add({
        to: 'wyattchamberlin6@gmail.com',
        from: `Name: ${submissionData.Name}; Email: ${submissionData.Email}`,
        message: {
          subject: `${submissionData.Subject}`,
          text: `${submissionData.Message}`
        },
      })
      .then(() => {
        console.log('Queued email for delivery!');
        return null;
      })
      .catch(error => {
        console.error('Error sending email: ', error);
        throw error;
      });
  });

