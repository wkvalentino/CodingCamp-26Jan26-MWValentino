// JavaScript to display a welcome message to the user
welcomeMessage();

// Function to display a welcome message to the user
function welcomeMessage() {
    // Prompt the user for their name
    let userResponse = prompt("Welcome to Valentino Company! What is your name?");

    // Handle case where user cancels or enters an empty name
    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Guest";
    }

    // Display the welcome message
    document.getElementById("welcome-speech").innerText = `Hello, ${userResponse}! Welcome to Valentino Company.`;
}

// Function to handle message submission (currently empty)
function submitMessage() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("All fields are required!");
    return;
  }

  // Tampilkan hasil di div result
  document.getElementById("result").innerHTML = `
    <div class="border p-4 rounded-lg bg-gray-100">
      <h3 class="font-semibold mb-2">Your Message</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    </div>
  `;

  // Reset form
  document.querySelector("form").reset();
}

