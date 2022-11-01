let displayErrorMessage = false;
let displaySuccessMessage = false;

async function handleSubmit(event) {
    const formData = new FormData(this);

    const response = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        body: JSON.stringify({
            email: formData.get('email').toString(),
        })
    })

    if (response.status === 200) {
        displaySuccessMessage = true;
    } else {
        displayErrorMessage = true;
    }
}

export { handleSubmit, displayErrorMessage, displaySuccessMessage };