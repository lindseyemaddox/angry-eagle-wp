function expandfaq(){$("#faq p.faquestion").click(function(){var n=$(this).index();$("#faq p.faqanswer").hide(),$(this).next("#faq p.faqanswer").slideDown(300)})}function firstLoad2(){initVars(),expandfaq()}$(function(){firstLoad2()});