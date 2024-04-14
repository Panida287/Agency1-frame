document.addEventListener("DOMContentLoaded", function () {
  const bookingForm = document.querySelector(".booking-container form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevents submission

      // Collects the data
      const formData = new FormData(bookingForm);
      const queryParams = new URLSearchParams(formData);

      // sends info to summary
      window.location.href = "summary.html?" + queryParams.toString();
    });
  }
});
