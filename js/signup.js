$(document).on("pagecreate", "#signup", function () {
    $('#signup-btn').on('click', function () {
      const fullname = $('#fullname').val().trim();
      const email = $('#email').val().trim();
      const password = $('#password').val().trim();
  
      if (!fullname || !email || !password) {
        $('#signup-error').text("Please fill in all fields.").show();
        return;
      }
  
      const newUser = {
        name: fullname,
        premium: false,
        email: email,
        password: password
      };
  
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  
      existingUsers.push(newUser);
  
      localStorage.setItem('users', JSON.stringify(existingUsers));

      localStorage.setItem('user', JSON.stringify({
        name: newUser.name,
        premium: newUser.premium
      }));
  
      window.location.href = '../html/home.html';
    });
  });
  