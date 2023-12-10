
    window.onscroll = function() {
        stickyHeader();
    };

    var header = document.querySelector('nav');
    var sticky = header.offsetTop;

    function stickyHeader() {
        if (window.pageYOffset > sticky) {
            header.classList.add('fixed-top');
        } else {
            header.classList.remove('fixed-top');
        }
    }
