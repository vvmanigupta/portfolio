// Function to set a dynamic welcome message based on the time of day
function setWelcomeMessage() {
 const welcomeMessage = document.getElementById('welcome-message');
 const hours = new Date().getHours();

 if (hours < 12) {
   welcomeMessage.textContent = 'Good Morning! Welcome to My Portfolio';
 } else if (hours < 18) {
   welcomeMessage.textContent = 'Good Afternoon! Welcome to My Portfolio';
 } else {
   welcomeMessage.textContent = 'Good Evening! Welcome to My Portfolio';
 }
}

// Function to filter projects based on the specified project type
function filterProjects(projectType) {
 const projects = document.querySelectorAll('.project');

 projects.forEach(project => {
   if (projectType === 'all' || project.dataset.project === projectType) {
     project.style.display = 'block';
   } else {
     project.style.display = 'none';
   }
 });
}