$(function(){

    $(".slider").slick({
        autoplay: true,
        dots:true,
        arrows:true,
        // fade:true
    })

    $(".menu-toggle-btn").click(function(){
        $(this).toggleClass("on");
        $(".m_nav").slideToggle();
    })

    // $("a").click(function(event){
    //     event.preventDefault()
    // })



})//jquery