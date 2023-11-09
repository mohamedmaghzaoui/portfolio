//function to send data from form to server localy
submitForm = (event) => {
  event.preventDefault();
  //get form data and pass it in an object
  const formElement = document.getElementById("contactForm");
  const formData = new FormData(formElement);

  console.log(formData);
  const name = formData.get("name");
  const message = formData.get("message");
  const data = { name, message };
  //local server url
  const url = "http://localhost:3000/send-mail";
  //post request
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Specify content type as JSON
    },
    body: JSON.stringify(data), // Convert data to JSON string
  })
    //response
    .then((response) => {
      if (response.ok) {
        alert("Email sent successfully");
        // Additional code if needed
      } else {
        alert("Error sending message.");
      }
    })
    //if there is an error
    .catch((error) => {
      console.error("Error:", error);
    });
};
