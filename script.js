// Universal JS for CodeLab Hub
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("status");

    if (form) {
        form.addEventListener("submit", async function(event) {
            event.preventDefault();
            
            const data = new FormData(event.target);
            
            try {
                const response = await fetch(event.target.action, {
                    method: form.method,
                    body: data,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    status.innerHTML = "Message sent! I will get back to you soon.";
                    form.reset();
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form.";
                }
            } catch (error) {
                status.innerHTML = "Oops! There was a problem submitting your form.";
            }
        });
    }
});