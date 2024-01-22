document.addEventListener('DOMContentLoaded', function () {
    var colorSelect = document.getElementById('colorSelect');
    var removeButton = document.querySelector('input[type="button"]');

    removeButton.addEventListener('click', function () {
        // Check if an option is selected
        if (colorSelect.selectedIndex !== -1) {
            // Remove the selected option
            colorSelect.remove(colorSelect.selectedIndex);
        }
    });
});
