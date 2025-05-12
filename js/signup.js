$(document).on("pagecreate", "#signup", function () {
    $('#signup-btn').on('click', function () {
      const fullname = $('#fullname').val().trim();
      const email = $('#email').val().trim();
      const password = $('#password').val().trim();
  
      if (!fullname || !email || !password) {
        $('#signup-error').text("Please fill in all fields.").show();
        return;
      }
  
      // Create user object
      const newUser = {
        name: fullname,
        premium: false,
        email: email,
        password: password
      };
  
      // Get existing users from localStorage
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  
      // Append the new user
      existingUsers.push(newUser);
  
      // Save back to localStorage
      localStorage.setItem('users', JSON.stringify(existingUsers));

      localStorage.setItem('user', JSON.stringify({
        name: newUser.name,
        premium: newUser.premium
      }));
  
      // Redirect to home
      window.location.href = '../html/home.html';
    });
  });
  