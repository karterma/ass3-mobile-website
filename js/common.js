document.addEventListener('DOMContentLoaded', function () {
    //Sidebar events
    var sidebar = document.getElementById('sidebar');
    var sidebarToggle = document.getElementById('sidebarToggle');

    sidebarToggle.addEventListener('click', function () {
        sidebar.classList.toggle('open');

        if (sidebar.classList.contains('open')) {
            sidebarToggle.innerHTML = 'X';
            sidebarToggle.style.backgroundImage='none';
            sidebar.style.left = '0px';
            sidebar.style.boxShadow = '2px 0px 5px rgba(0, 0, 0, 0.1)';
        } else {
            sidebarToggle.style.backgroundImage="url('../image/open.png')";
            sidebar.style.marginTop='10px';
            sidebarToggle.innerHTML = '';
            sidebar.style.fontSize = '30px';
            sidebar.style.left = '-210px';
            sidebar.style.boxShadow = 'none'
        }
    });

    // Listen for a sidebar item click event
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.addEventListener('click', function () {
            // Remove the active state of all items
            document.querySelectorAll('.sidebar-item').forEach(el => {
                el.classList.remove('active');
            });
            // Adds an active state to the currently clicked item
            this.classList.add('active');
        });
    });
    //Bottom menu click event
    var tabItems = document.querySelectorAll('.tab-item');
    var tabContents = document.querySelectorAll('.tab-content');
    function showContent(index) {
        // Removes the display of all content
        tabContents.forEach(function (content, idx) {
            content.style.display = idx === index ? 'block' : 'none';
        });

        // Remove all menu items from active status
        tabItems.forEach(function (item) {
            item.classList.remove('active');
        });

        // Adds an active state to the currently selected menu item
        tabItems[index].classList.add('active');
    }

    // Listen for clicks on menu items
    tabItems.forEach(function (item, index) {
        item.addEventListener('click', function () {
            showContent(index);
        });
    });

});

function GoTo(value) {
    switch (value) {
        case 0:
            window.location.href = 'Home.html';
            break;
        case 3:
            window.location.href = 'ShoppingCart.html';
            break;
        default:
            // window.location.href = 'Home.html';
            break;

    }
}
