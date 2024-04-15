document.addEventListener("DOMContentLoaded", function () {
  const bookingForm = document.querySelector(".booking-container form");

  if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      // Initialize URLSearchParams to store query parameters
      const queryParams = new URLSearchParams();

      // Collect data from each form element
      const formData = new FormData(bookingForm);

      // Iterate over each form field and append to queryParams
      for (const [key, value] of formData.entries()) {
        queryParams.append(key, value);
      }

      // Redirect to summary.html with query parameters
      window.location.href = "summary.html?" + queryParams.toString();
    });
  }
});
