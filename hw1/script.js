// Function to update the date in the header
function updateDate() {
    // Get current date
    const now = new Date();
    
    // Array of day names
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // Array of month names
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    
    // Format the date as: DayName, MonthName Day, Year
    const formattedDate = `${dayNames[now.getDay()]}, ${monthNames[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
    
    // Find the date element and update its content
    const dateElement = document.querySelector('.date');
    if (dateElement) {
      dateElement.textContent = formattedDate;
    }
  }
  
  // Call the function when the page loads
  document.addEventListener('DOMContentLoaded', updateDate);