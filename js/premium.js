$(document).on("pagecreate", "#premium-page", function () {
    const user = JSON.parse(localStorage.getItem("user")) || {};
  
    // Default to 'basic' if not set
    if (!user.premium) {
      user.premium = "basic";
      localStorage.setItem("user", JSON.stringify(user));
    }
  
    // Show username
    $("#username").text(user.name || "User");
  
    // Update UI based on current subscription
    function updateButtons() {
      $(".subscribe-btn").each(function () {
        const plan = $(this).data("plan");
        if (plan === user.premium) {
          $(this).text("Subscribed").addClass("ui-disabled");
        } else {
          $(this).text("Buy Now").removeClass("ui-disabled");
        }
      });
    }
  
    updateButtons();
  
    // Handle subscription click
    $(".subscribe-btn").on("click", function (e) {
      e.preventDefault();
  
      const selectedPlan = $(this).data("plan");
      user.premium = selectedPlan;
      localStorage.setItem("user", JSON.stringify(user));
      updateButtons();
      window.location.href = "home.html";
    });
  });
  