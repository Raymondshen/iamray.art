$(document).ready(function () {
  /* Detect if isMobile */
  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }
  /* Detect if isMobile */

  /* On hover show work img */
  $(function () {
    if (!isMobile()) {
      $(".work-row").each(function () {
        const $row = $(this);
        const $imgContainer = $row.find(".work-img");

        $row.on("mouseenter", function () {
          $imgContainer.css({
            opacity: 1,
            transform: "translate(-50%, -50%) rotate(10deg)",
          });
        });

        $row.on("mousemove", function (e) {
          const offset = $row.offset();
          const x = e.pageX - offset.left;
          const y = e.pageY - offset.top;

          $imgContainer.css({
            left: x + "px",
            top: y + "px",
          });
        });

        $row.on("mouseleave", function () {
          $imgContainer.css({
            opacity: 0,
            transform: "translate(-50%, -50%) rotate(0deg)",
          });
        });
      });
    }
  });
  /* On Hover Show Work Img */

  /* Show/Hide Snack Bar */
  $("#copyemail").click(function () {
    $("#snackbar-wrapper").addClass("show");

    setTimeout(function () {
      $("#snackbar-wrapper").removeClass("show");
    }, 1500);
  });
  /* Show/Hide Snack Bar */

  /* Clip to board */
  $("#copyemail").click(function () {
    const contentToCopy = $("#copyemail").text();
  });
});

/* Smooth Scroll by Chris Coyler */

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });
