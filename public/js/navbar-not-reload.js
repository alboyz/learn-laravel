document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('nav a[data-link]');
     const content = document.getElementById('content');
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const path = link.getAttribute('data-link');
            history.pushState(null, '', path);
            loadContent(path);
        });
    });

    function loadContent(path) {
        fetch(path)
        .then(response => response.text())
        .then(html => {
            content.innerHTML = html;
        })
        .catch(error => {
            content.innerHTML = '<h1>Error</h1><p>Could not load page content.</p>';
        });
    }

    window.onpopstate = () => {
        loadContent(window.location.pathname);
    };

    loadContent(window.location.pathname);
});


        //let url = '';
        // switch (path) {
        //     case '/main':
        //         url = "{{ route('main') }}";
        //         break;
        //     case '/product':
        //         url = "{{ route('complete-product') }}";
        //         break;
        //     default:
        //         content.innerHTML = '<h1>404</h1><p>Page not found.</p>';
        //         return;
        // }
        // fetch(url)
        //     .then(response => response.text())
        //     .then(html => {
        //         content.innerHTML = html;
        //     })
        //     .catch(error => {
        //         content.innerHTML = '<h1>Error</h1><p>Could not load page content.</p>';
        //     });



