import $ from 'jquery';
import 'bootstrap';
import Navbar from "./modules/navbar";
import Home from "./modules/home";
import CheckList from "./modules/checklist";


let Site = Site || {};

(function ($) {

    Site = {
        //properites
        init: function () {
            this.scrollEvent();
            this.resizeEvent();
        },
        bootstrap: function () {
            this.init();
            // others
            Navbar.bootstrap();
            Home.bootstrap();
            CheckList.bootstrap();
        },
        scrollEvent: function () {
            $(window).scroll(function () {
                var scrollTop = $(window).scrollTop();
            })
        },
        resizeEvent: function () {
            $(window).resize(() => {

            });
        },
    };
})(jQuery);

$(document).ready(() => {
    Site.bootstrap();
});
