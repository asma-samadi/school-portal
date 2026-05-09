let sendNameContact = document.querySelector("#name-for-contact");
let sendEmailContact = document.querySelector("#email-for-contact");
let sendMessageContact = document.querySelector("#message-for-contact");
let sendContact = document.querySelector("#send-info");

sendContact.addEventListener("click", function (event) {
  event.preventDefault();

  let sendInfo = {
    sendName: sendNameContact.value.trim(),

    sendEmail: sendEmailContact.value.trim(),

    sendMessage: sendMessageContact.value.trim(),
  };

  if (
    sendInfo.sendName === "" ||
    sendInfo.sendEmail === "" ||
    sendInfo.sendMessage === ""
  ) {
    alert("Please fill all the form");
  } else {
    alert(
      `Thank you ${sendInfo.sendName}. We will be in touch with you through ${sendInfo.sendEmail}`,
    );
    sendNameContact.value = "";
    sendEmailContact.value = "";
    sendMessageContact.value = "";
  }
});
