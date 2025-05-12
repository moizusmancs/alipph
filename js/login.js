$(document).on("pagecreate", "#login", function () {
    $('#login-btn').on('click', function () {
      const email = $('#email').val().trim();
      const password = $('#password').val().trim();
  
      if (!email || !password) {
        $('#login-error').text("Please fill in both fields.").show();
        return;
      }
  
      // Get all users from localStorage
      const users = JSON.parse(localStorage.getItem('users')) || [];
  
      // Try to find matching user
      const foundUser = users.find(user => user.email === email && user.password === password);
  
      if (foundUser) {
        // Set current user in localStorage
        localStorage.setItem('user', JSON.stringify({
          name: foundUser.name,
          premium: foundUser.premium
        }));
  
        // Redirect to home
        window.location.href = '../html/home.html';
      } else {
        $('#login-error').text("Invalid email or password.").show();
      }
    });
  });
  