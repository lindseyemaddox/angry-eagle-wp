var $showNav,$nav;function initVars(){$showNav=$("nav span#nav"),$nav=$("nav > ul")}function showDrop(){$(".drop > a").click(function(n){$(this).next("ul").hasClass("expanded")?$(this).next("ul").removeClass("expanded"):($(".drop ul").removeClass("expanded"),$(this).next("ul").addClass("expanded")),n.preventDefault()})}function showNav(){$showNav.click(function(){return $nav.toggleClass("expanded"),!1})}function firstLoad(){initVars(),showDrop(),showNav(),initPlaceholders()}$(function(){firstLoad()});