let isLightBlue = false;   // Initial background color 
function changeBg() {
    // Check the current background color and toggle it 
    if (isLightBlue) {
        document.body.style.backgroundColor = ""; // Default color 
    } else {
        document.body.style.backgroundColor = "lightblue";
    }
    isLightBlue = !isLightBlue; // Toggle the boolean flag 
}