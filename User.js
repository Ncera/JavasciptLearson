const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const mail = document.getElementById('mail').value;
  const password = document.getElementById('password').value;
  
  const formData = {
    mail: mail,
    password: password
  };
  
  // Store the form data in localStorage
  localStorage.setItem('formData', JSON.stringify(formData));

  window.location.href='RemoveUser.html'
  
  // Reset the form fields
  form.reset();
});

// Retrieve and display the stored form data
window.addEventListener('DOMContentLoaded', function() {
  const storedFormData = localStorage.getItem('formData');
  
  if (storedFormData) {
    const formData = JSON.parse(storedFormData);
    
    // Populate the form fields with the stored data
    document.getElementById('mail').value = formData.mail;
    document.getElementById('password').value = formData.password;
  }
});




/*form.addEventListener('submit', (e) => {
    let messages = []
    if (mailValue === '') {
        setError(mail, 'mail is required')
    }

    if (messages.length > 0) {
        e.preventDefault()
    }

})*/

