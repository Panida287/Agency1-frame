// Get all question buttons and their corresponding answers
const questionButtons = document.querySelectorAll('.q-btn');
const answers = document.querySelectorAll('.answer');
const searchBar = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');

// Function to filter question buttons based on user input
function filterQuestions(keyword) {
    questionButtons.forEach(button => {
        const keywords = button.dataset.keywords.toLowerCase().split(', '); // Get keywords associated with the button
        const buttonId = button.id;
        if (keywords.includes(keyword.toLowerCase())) {
            button.style.display = 'block'; // Show matched buttons
            const answerId = 'answer' + buttonId.slice(1);
            document.getElementById(answerId).style.display = 'block'; // Show corresponding answer
        } else {
            button.style.display = 'none'; // Hide unmatched buttons
            const answerId = 'answer' + buttonId.slice(1);
            document.getElementById(answerId).style.display = 'none'; // Hide corresponding answer
        }
    });
}

// Event listener for search button click
searchBtn.addEventListener('click', function() {
    const keyword = searchBar.value.trim(); // Get user input
    filterQuestions(keyword); // Filter question buttons based on user input
});

// Add event listener to each question button
questionButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Hide all answers except the one corresponding to the clicked button
        answers.forEach(answer => {
            if (answer.id === 'answer' + button.id.slice(1)) {
                // Toggle display for the clicked button's answer
                answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
            } else {
                answer.style.display = 'none';
            }
        });

        // Toggle the 'active' class for the clicked button
        if (button.classList.contains('active')) {
            button.classList.remove('active');
        } else {
            // Remove 'active' class from all buttons and add it to the clicked button
            document.querySelectorAll('.q-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
        }
    });
});