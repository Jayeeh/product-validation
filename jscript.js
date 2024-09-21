// Function to show an error by adding the "error" class to the input element
function showError(id) {
    const input = document.querySelector(id);
    input.classList.add("error");
  }
  
  // Function to remove an error by removing the "error" class from the input element
  function removeError(id) {
    const input = document.querySelector(id);
    input.classList.remove("error");
  }
  
  // Function to check if the quantity input value is greater than 0
  const checkQuantity = () => {
    const input = document.querySelector("#quantity");
    return (input.value > 0);
  };
  
  // Function to check if the color input value is not equal to "--"
  const checkColor = () => {
    const input = document.querySelector("#color");
    return (input.value !== "--");
  };
  
  // Function to check if the state input value length is exactly 2 characters
  const checkState = () => {
    const input = document.querySelector("#state");
    return (input.value.length == 2);
  };
  
  // Function to check the form inputs and show/remove errors accordingly
  function checkForm() {
    // Array of checks to perform, each with a check function and corresponding input ID
    const checks = [
      { check: checkQuantity, id: "#quantity" },
      { check: checkColor, id: "#color" },
      { check: checkState, id: "#state" }
    ];
  
    let allValid = true; // Flag to track if all checks pass
  
    // Loop through each check and show/remove errors based on the check result
    checks.forEach(({ check, id }) => {
      if (!check()) {
        showError(id);
        allValid = false; // Set flag to false if any check fails
      } else {
        removeError(id);
      }
    });
  
    // If all checks pass, remove the "hidden" class from the status element
    if (allValid) {
      document.querySelector("#status").classList.remove("hidden");
    }
  }
  