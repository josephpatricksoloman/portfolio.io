<script>
  document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector('.php-email-form');

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var formData = new FormData(form);
      var xhr = new XMLHttpRequest();

      // Display loading message
      var loadingMessage = form.querySelector('.loading');
      loadingMessage.style.display = 'block';

      xhr.open('POST', form.action, true);
      xhr.setRequestHeader('Accept', 'application/json');

      xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;

        loadingMessage.style.display = 'none';

        if (xhr.status === 200) {
          // Successful submission
          var successMessage = form.querySelector('.sent-message');
          successMessage.style.display = 'block';

          // Clear the form fields
          form.reset();
        } else {
          // Error handling
          var errorMessage = form.querySelector('.error-message');
          errorMessage.innerHTML = 'Oops! Something went wrong.';
          errorMessage.style.display = 'block';

          // Log the detailed error message to the console
          console.error(xhr.statusText);
        }
      };

      xhr.onerror = function () {
        // Handle network errors
        loadingMessage.style.display = 'none';
        var errorMessage = form.querySelector('.error-message');
        errorMessage.innerHTML = 'Network error. Please try again later.';
        errorMessage.style.display = 'block';
      };

      xhr.send(formData);
    });
  });
</script>
