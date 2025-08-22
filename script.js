function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch('http://197.145.248.219:3000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        document.getElementById('responseMessage').textContent = result.message;
        
        if (result.success) {
            document.getElementById('contactForm').reset();
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('responseMessage').textContent = 'Error sending message. Please try again.';
    }
});
