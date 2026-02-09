document.addEventListener("DOMContentLoaded", function() {
    
    // Scroll Reveal Logic
    function reveal() {
        const reveals = document.querySelectorAll(".reveal");
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", reveal);
    reveal(); // Run on load

    // Form Submission Logic
    const form = document.getElementById("enrollmentForm");
    const feedback = document.getElementById("formFeedback");

    if(form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            
            // Animation for button
            const btn = form.querySelector(".submit-btn");
            btn.innerText = "Processing...";
            
            setTimeout(() => {
                form.reset();
                btn.innerText = "Submit Application";
                feedback.classList.remove("hidden");
                alert("Application submitted successfully!");
            }, 1500);
        });
    }
});

