// Function to display the welcome message
const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

// Function to display workout routine
const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value.trim();
    if (workoutInput !== '') {
        const workoutList = document.querySelector('#workoutList');
        const newWorkout = document.createElement('li');
        newWorkout.textContent = workoutInput;
        workoutList.appendChild(newWorkout);
        document.querySelector('#workoutInput').value = ''; // Clear input after adding
    }
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

// Function to add new fitness goals and prevent duplicates
const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value.trim(); // Trim input
    const goalListItems = document.querySelectorAll('#goalList li'); // Get all existing goals

    let isDuplicate = false;

    // Check if the goal already exists in the list
    goalListItems.forEach(goal => {
        if (goal.textContent === goalInput) {
            isDuplicate = true;
        }
    });

    if (isDuplicate) {
        alert('This goal already exists! Please add a different goal.');
        return; // Exit the function to prevent adding the duplicate
    }

    // If the input is not empty and not a duplicate, add the new goal
    if (goalInput !== '') {
        const newGoal = document.createElement('li'); // Create a new list item
        newGoal.textContent = goalInput; // Set the text content
        document.querySelector('#goalList').appendChild(newGoal); // Add the new goal to the list
        document.querySelector('#goalInput').value = ''; // Clear input after adding
    } else {
        alert('Please enter a valid goal.'); // Alert if the input is empty
    }
};

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

// Water intake tracking
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

// Update progress charts
const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

// Theme toggling
const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

// Meal plan submission
const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
