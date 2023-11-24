document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function () {
            this.querySelector('.submenu').classList.toggle('show');
        });
    });

    window.addEventListener('click', function (event) {
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(event.target)) {
                dropdown.querySelector('.submenu').classList.remove('show');
            }
        });
    });
});
