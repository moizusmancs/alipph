$(document).on("pagecreate", "#login", function () {
    $('#login-btn').on('click', function () {
      const email = $('#email').val().trim();
      const password = $('#password').val().trim();
  
      if (!email || !password) {
        $('#login-error').text("Please fill in both fields.").show();
        return;
      }
  
      const users = JSON.parse(localStorage.getItem('users')) || [];
  
      const foundUser = users.find(user => user.email === email && user.password === password);
  
      if (foundUser) {
        localStorage.setItem('user', JSON.stringify({
          name: foundUser.name,
          premium: foundUser.premium
        }));
  
        window.location.href = '../html/home.html';
      } else {
        $('#login-error').text("Invalid email or password.").show();
      }
    });
  });
  