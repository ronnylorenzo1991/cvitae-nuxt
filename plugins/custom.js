
const smoth = value => {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        let target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: (target.offset().top - 70)
            }, 1000, "easeInOutExpo");
            return false;
        }
    }
};
const toggle =  value => {

    if (document.getElementsByClassName('toggled').length == 0)
        $('#wrapper').addClass('toggled');
    else
        $('#wrapper').removeClass('toggled');
};
export default {

    install(Vue, options) {

        Vue.prototype.$toggleSidebar = toggle;
}
}



