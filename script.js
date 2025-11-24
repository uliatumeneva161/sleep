

document.addEventListener('DOMContentLoaded', function () {
    const quizModal = document.getElementById('quizModal');
    const startQuiz = document.getElementById('startQuiz');
    const closeQuiz = document.getElementById('closeQuiz');
    const quizSteps = document.querySelectorAll('.quiz-step');
    const quizOptions = document.querySelectorAll('.quiz-option');
    const quizForm = document.getElementById('quizForm');

    let currentStep = 1;

    // Open quiz modal
    startQuiz.addEventListener('click', function () {
        quizModal.style.display = 'flex';
    });

    // Close quiz modal
    closeQuiz.addEventListener('click', function () {
        quizModal.style.display = 'none';
        resetQuiz();
    });

    // Close modal when clicking outside
    window.addEventListener('click', function (event) {
        if (event.target === quizModal) {
            quizModal.style.display = 'none';
            resetQuiz();
        }
    });

    // Quiz option selection
    quizOptions.forEach(option => {
        option.addEventListener('click', function () {
            // Remove selected class from all options in this step
            const parentStep = this.closest('.quiz-step');
            const optionsInStep = parentStep.querySelectorAll('.quiz-option');
            optionsInStep.forEach(opt => opt.classList.remove('selected'));

            // Add selected class to clicked option
            this.classList.add('selected');
        });
    });

    // Next and previous buttons
    document.getElementById('next1').addEventListener('click', function () {
        showStep(2);
    });

    document.getElementById('prev2').addEventListener('click', function () {
        showStep(1);
    });

    document.getElementById('next2').addEventListener('click', function () {
        showStep(3);
    });

    document.getElementById('prev3').addEventListener('click', function () {
        showStep(2);
    });

    document.getElementById('next3').addEventListener('click', function () {
        showStep(4);
    });

    document.getElementById('prev4').addEventListener('click', function () {
        showStep(3);
    });

    document.getElementById('next4').addEventListener('click', function () {
        showStep(5);
    });

    document.getElementById('prev5').addEventListener('click', function () {
        showStep(4);
    });

    document.getElementById('next5').addEventListener('click', function () {
        showStep(6);
    });

    document.getElementById('prev6').addEventListener('click', function () {
        showStep(5);
    });

    document.getElementById('next6').addEventListener('click', function () {
        showStep(7);
    });

    // Form submission
    quizForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;

        // Here you would typically send the data to your server
        // For now, we'll just show an alert and close the modal
        alert(`Спасибо, ${name}! Мы отправим подборку на номер ${phone} в WhatsApp.`);
        quizModal.style.display = 'none';
        resetQuiz();
    });

    function showStep(stepNumber) {
        // Hide all steps
        quizSteps.forEach(step => {
            step.classList.remove('active');
        });

        // Show the current step
        document.getElementById(`step${stepNumber}`).classList.add('active');
        currentStep = stepNumber;
    }

    function resetQuiz() {
        // Reset to first step
        showStep(1);

        // Clear all selections
        quizOptions.forEach(option => {
            option.classList.remove('selected');
        });

        // Clear form
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});