$(document).on("pagecreate", "#premium-page", function () {
    const user = JSON.parse(localStorage.getItem("user")) || {};
  
    if (!user.premium) {
      user.premium = "basic";
      localStorage.setItem("user", JSON.stringify(user));
    }
  
    $("#username").text(user.name || "User");
  
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
  
    $(".subscribe-btn").on("click", function (e) {
      e.preventDefault();
  
      const selectedPlan = $(this).data("plan");
      user.premium = selectedPlan;
      localStorage.setItem("user", JSON.stringify(user));
      updateButtons();
      window.location.href = "home.html";
    });
  });
  