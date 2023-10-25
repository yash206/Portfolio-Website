document.addEventListener('DOMContentLoaded', function() {
    const elementsToFadeIn = document.querySelectorAll('.fade-in');
    elementsToFadeIn.forEach(function(element) {
      element.classList.add('show');
    });
  });
  
  function sendMail() {
    var params = {
      name: document.getElementById("floatingInput").value,
      email: document.getElementById("floatingEmail").value,
      phone: document.getElementById("floatingPhone").value,
      message: document.getElementById("floatingMessage").value,
    };
    
    const serviceID = "service_phthskf";
    const templateID = "template_6uk9ijc";
    if(params.name != "" && params.email != "" && params.message != ""){
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("floatingInput").value = "";
          document.getElementById("floatingEmail").value = "";
          document.getElementById("floatingPhone").value = "";
          document.getElementById("floatingMessage").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
    }
  }
  