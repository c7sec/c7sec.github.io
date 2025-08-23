function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    // Add this middleware to your server.js
app.use((req, res, next) => {
  const auth = { login: 'admin', password: 'your_secure_password' } // Change these
  
  const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
  const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')
  
  if (login && password && login === auth.login && password === auth.password) {
    return next()
  }
  
  res.set('WWW-Authenticate', 'Basic realm="401"')
  res.status(401).send('Authentication required.')
})
    
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
