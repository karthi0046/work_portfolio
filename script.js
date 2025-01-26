

    function closeSidebar() {
        const sidebar = document.getElementById("sidebar");
        const baricon = document.getElementById("baricon");

        sidebar.classList.remove("active"); // Remove active class to hide sidebar
        baricon.style.display = "block"; // Show bar icon after closing sidebar
    }

    function openSidebar() {
        const sidebar = document.getElementById("sidebar");
        const baricon = document.getElementById("baricon");

        sidebar.classList.add("active"); // Add active class to show sidebar
        baricon.style.display = "none"; // Hide bar icon when sidebar is open
    }


