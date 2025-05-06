// 1. Event Handling  
document.getElementById('changeTextBtn').addEventListener('click', function() {  
    const textDiv = document.getElementById('text');  
    textDiv.textContent = 'You clicked the button!';  
});  

document.querySelector('.image-gallery').addEventListener('dblclick', function() {  
    alert('Double-click detected on the image gallery!');  
});  

let longPressTimer;  
document.querySelector('.image-gallery').addEventListener('mousedown', function() {  
    longPressTimer = setTimeout(() => {  
        alert('Long press detected!');  
    }, 1000);  
});  

document.querySelector('.image-gallery').addEventListener('mouseup', function() {  
    clearTimeout(longPressTimer);  
});  

// 2. Image Gallery  
const images = document.querySelectorAll('.image-gallery img');  
images.forEach(image => {  
    image.addEventListener('click', function() {  
        alert("You clicked on an image!");  
    });  
});  

// 3. Form Validation  
document.getElementById('validateBtn').addEventListener('click', function() {  
    const email = document.getElementById('email').value;  
    const password = document.getElementById('password').value;  
    const validationMessage = document.getElementById('validationMessage');  
    
    validationMessage.textContent = '';  
    
    // Check the email format  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
    if (!emailPattern.test(email)) {  
        validationMessage.textContent += 'Invalid email format. ';  
    }  
    
    // Check password length  
    if (password.length < 8) {  
        validationMessage.textContent += 'Password must be at least 8 characters long.';  
    }  
    
    if (validationMessage.textContent === '') {  
        validationMessage.textContent = 'Validation successful!';  
    }  
});  

// Real-time feedback while typing  
document.getElementById('email').addEventListener('input', function() {  
    const email = this.value;  
    if (!emailPattern.test(email)) {  
        this.style.borderColor = 'red';  
    } else {  
        this.style.borderColor = 'green';  
    }  
});