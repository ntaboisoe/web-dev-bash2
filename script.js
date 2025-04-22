// Event Handling: Button Click to Change Text
document.getElementById('text-button').addEventListener('click', function () {
  document.getElementById('dynamic-message').textContent = 'You just clicked the button!';
});

// Event Handling: Button Click to Change Color
document.getElementById('color-button').addEventListener('click', function () {
  document.body.style.backgroundColor = '#FFDDC1';
});

// Event Handling: Hover Effect
document.getElementById('hover-box').addEventListener('mouseover', function () {
  this.style.backgroundColor = '#FFD700';
});
document.getElementById('hover-box').addEventListener('mouseout', function () {
  this.style.backgroundColor = '#f4f4f4';
});

// Event Handling: Keypress Detection
document.getElementById('keypress-input').addEventListener('keyup', function (event) {
  console.log(`Key pressed: ${event.key}`);
});

// Bonus: Secret Action (Double Click)
document.getElementById('secret-action').addEventListener('dblclick', function () {
  alert('Secret action activated!');
});

// Interactive Elements: Image Gallery
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
let currentIndex = 0;

document.getElementById('next-slide').addEventListener('click', function () {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('slide').src = images[currentIndex];
});

document.getElementById('prev-slide').addEventListener('click', function () {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById('slide').src = images[currentIndex];
});

// Interactive Elements: Tabs
document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', function () {
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.getElementById(this.dataset.tab).classList.add('active');
  });
});

// Form Validation
document.getElementById('user-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email.includes('@')) {
    document.getElementById('email-feedback').textContent = 'Invalid email format.';
  } else {
    document.getElementById('email-feedback').textContent = '';
  }

  if (password.length < 8) {
    document.getElementById('password-feedback').textContent = 'Password must be at least 8 characters.';
  } else {
    document.getElementById('password-feedback').textContent = '';
  }
});
