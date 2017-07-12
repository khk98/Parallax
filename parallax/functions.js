$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
    $('.logo').css({
       'transform' : 'translate(0px,'+ wScroll /2 + '% )'
    });
    console.log(wScroll);
    
    $('.harvey_img').css({
            
       'transform' : 'translate(0px,-'+ wScroll /7+ '% )'
        
    });
    
    $('.mike_img').css({
    
        
       'transform' : 'translate(0px,-'+ wScroll /4 + '% )'
    });
    
    
    $('.mike-quote').css({
    
        
       'transform' : 'translate(0px,-'+ wScroll /7+ '% )'
    });
    
    $('.harvey-quote').css({
    
        
       'transform' : 'translate(0px,-'+ wScroll /7 + '% )'
    });
    
    if(wScroll > $('.harvey-intro').offset.top)
        {
            $('.harvey-intro-img').each(function(){
                $('.harvey-intro-img').addClass('.is-showing');
            });
        }
    
    
   
});