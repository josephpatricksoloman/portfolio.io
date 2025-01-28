function sendmail() {
    var parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    };

    const serviceID = "service_y83h4ma"
    const templateID = "template_ppm9m8d"

    emailjs
      .send(serviceID,templateID,parms)
      .then((res) => {
        document.getElementById("name").value,
        document.getElementById("email").value,
        document.getElementById("subject").value,
        document.getElementById("message").value,
        console.log(res);
        alert("your message is sent succesfully");
      })
      .catch((err) => console.log(err));

}
