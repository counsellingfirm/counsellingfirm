function sendEmail() { 

      Email.send({ 

        Host: "smtp.gmail.com", 

        Username: "adebaice@gmail.com", 

        Password: "PElu..2000", 

        To: 'adebyce@gmail.com', 

        From: "adebaice@gmail.com", 

        Subject: "Sending Email using javascript", 

        Body: "Well that was easy!!", 

      }) 

        .then(function (message) { 

          alert("mail sent successfully") 

        }); 

    } 
