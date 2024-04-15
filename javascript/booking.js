document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting normally

      // Get values from form elements
      const name = document.getElementById('name-input').value.trim();
      const lastName = document.getElementById('last-name-input').value.trim();
      const date = document.getElementById('date-input').value;
      const time = document.getElementById('time-input').value;
      const phoneNumber = document.getElementById('phone-number').value.trim();
      const email = document.getElementById('email').value.trim();
      const selectedSession = document.querySelector('input[name="session"]:checked');
      const selectedDetail = document.querySelector('input[name="detail"]:checked');
      const photoAmount = document.getElementById('photo-amount-dropdown').value;
      const photographer = document.getElementById('photographer-dropdown').value;
      const request = document.getElementById('request').value.trim();

      // Store form data as an object
      const formData = {
        name,
        lastName,
        date,
        time,
        phoneNumber,
        email,
        selectedSession: selectedSession ? selectedSession.value : '',
        selectedDetail: selectedDetail ? selectedDetail.value : '',
        photoAmount,
        photographer,
        request
      };

      // Update session type if "Half day" or "Full day" is selected
      if (selectedDetail && (selectedDetail.value === 'half day' || selectedDetail.value === 'full day')) {
        formData.selectedDetail = selectedDetail.value;
      }

      // Store form data in local storage
      localStorage.setItem('formData', JSON.stringify(formData));

      // Redirect to summary page
      window.location.href = 'summary.html';
    });
  } else {
    console.error('Form not found.');
  }

  // Display form data in summary page
  const formDataJSON = localStorage.getItem('formData');
  if (formDataJSON) {
    const formData = JSON.parse(formDataJSON);
    const summaryOutput = document.querySelector('#summary-output');
    if (summaryOutput) {
      // Populate summary output with form data
      summaryOutput.innerHTML = `
                <p>Email: ${formData.email}</p>
                <h3 class="summary-header">Session summary</h3>
                <p>Name: ${formData.name} ${formData.lastName}</p>
                <p>Date & Time: ${formData.date} at ${formData.time}</p>
                <p>Phone Number: ${formData.phoneNumber}</p>
                 <p>Type of Session: ${formData.selectedSession}</p>
                <p>${formData.selectedDetail === 'photo amount' ? 'Photo Amount' : ''}: ${formData.selectedDetail === 'photo amount' ? formData.photoAmount : formData.selectedDetail}</p>
                <p>Preferred Photographer: ${formData.photographer}</p>
                <p>Request/Description:</p>
                <p>${formData.request}</p>
            `;
    } else {
      console.error('Summary output div not found.');
    }
  } else {
    console.error('Form data not found in local storage.');
  }

  const radioByPhotoAmount = document.getElementById('photo-amount-radio');
  const photoAmountDropdown = document.getElementById('photo-amount-dropdown');
  const radioHalfDay = document.getElementById('half-day');
  const radioFullDay = document.getElementById('full-day');

  // Function to enable or disable the dropdown select based on the radio button state
  function toggleDropdown() {
    photoAmountDropdown.disabled = !radioByPhotoAmount.checked;
  }

  // Initially disable the dropdown select
  toggleDropdown();

  // Add event listener to the radio button "By amount of photos" to toggle the dropdown select
  radioByPhotoAmount.addEventListener('change', function() {
    toggleDropdown();
    updateSummary();
  });

  // Add event listeners to the radio buttons "Half day" and "Full day" to disable the dropdown select
  radioHalfDay.addEventListener('change', function() {
    photoAmountDropdown.disabled = true;
    updateSummary();
  });

  radioFullDay.addEventListener('change', function() {
    photoAmountDropdown.disabled = true;
    updateSummary();
  });

  // Function to update the summary output based on user selection
  function updateSummary() {
    const formDataJSON = localStorage.getItem('formData');
    if (formDataJSON) {
      const formData = JSON.parse(formDataJSON);
      const summaryOutput = document.querySelector('#summary-output');
      if (summaryOutput) {
        // Populate summary output with form data
        summaryOutput.innerHTML = `
                    <p>Email: ${formData.email}</p>
                    <h3 class="summary-header">Session summary</h3>
                    <p>Name: ${formData.name} ${formData.lastName}</p>
                    <p>Date & Time: ${formData.date} at ${formData.time}</p>
                    <p>Phone Number: ${formData.phoneNumber}</p>
                    <p>Type of Session: ${formData.selectedSession}</p>
                    <p>${formData.selectedDetail === 'photo amount' ? 'Photo Amount' : ''}: ${formData.selectedDetail === 'photo amount' ? formData.photoAmount : formData.selectedDetail}</p>
                    <p>Preferred Photographer: ${formData.photographer}</p>
                    <p>Request/Description:</p>
                    <p>${formData.request}</p>
                `;
      } else {
        console.error('Summary output div not found.');
      }
    } else {
      console.error('Form data not found in local storage.');
    }
  }
});