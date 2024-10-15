function openTab(evt, tabName) {
    var i, tabContent, tabButtons;

    // Hide all tab content
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Remove "active" class from all tab buttons
    tabButtons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(" active", "");
    }

    // Show the selected tab content and add "active" class to the button
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Set the first tab (Introduction) as active by default
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tab-button').click();
});