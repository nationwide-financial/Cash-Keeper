document.querySelector('.offer-form').addEventListener('submit', async function (event) {
    event.preventDefault(); 
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data)

    // try {
    //     const response = await fetch('https://your-api-endpoint.com/submit', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data),
    //     });

    //     if (response.ok) {
    //         const result = await response.json();
    //         alert('Form submitted successfully!'); 
    //         console.log('Server Response:', result);
    //     } else {
    //         const error = await response.json();
    //         alert('Failed to submit the form.'); 
    //         console.error('Error:', error);
    //     }
    // } catch (error) {
    //     console.error('Network Error:', error);
    //     alert('Network error. Please try again.');
    // }
});
