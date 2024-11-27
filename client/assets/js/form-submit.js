document.querySelector('.offer-form').addEventListener('submit', async function (event) {
    event.preventDefault(); 
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data)

    try {
        const response = await fetch('https://cashkeeperfinancial.netlify.app/.netlify/functions/env', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: {},
        });
        //const token = response?.data;
        console.log(response)
        // if (response.ok) {
        //     const response = await fetch('https://7fwwglseys3xlqk6hogiazspv40gzoug.lambda-url.us-east-1.on.aws/api/create-lead-basic-info', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Authorization': `Bearer ${token}` // Replace `yourToken` with the actual token value
        //         },
        //         body: JSON.stringify({ // Convert the body to a JSON string
        //             "offer_code": data?.access_code,
        //             "first_name": data?.first_name,
        //             "last_name": data?.last_name,
        //             "email": data?.email,
        //             "phone_number": data?.phone,
        //             "loan_amount": data?.debt_amount,
        //         }),
        //     });
        //     console.log(response?.data)
        // } else {
        //     const error = await response.json();
        //     alert('Failed to submit the form.'); 
        //     console.error('Error:', error);
        // }
    } catch (error) {
        console.error('Network Error:', error);
        alert('Network error. Please try again.');
    }
});
