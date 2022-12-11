// Bootstrap demo

//import { Popover } from "bootstrap";

//new Popover(document.getElementById("popoverButton") ?? "");

// jQuery demo

import jQuery from "jquery";
/* eslint-disable */
(<any>window).$ = jQuery;
(<any>window).jQuery = jQuery;
/* eslint-enable */

//jQuery(function () {
//  $("p").text("The DOM is now loaded and can be manipulated.");
//});

// NODE_ENV demo

console.log(process.env["NODE_ENV"]);
