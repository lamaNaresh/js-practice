$(document).ready(function(){
    $('.js-hide').click(function(){
        $('.hide').hide();
    });
    $('.js-show').click(function(){
        $('.hide').show();
    });
});

//change style by js 複数ではないとき
// $(document).ready(function(){
//     $('.js-change-style').click(function(){
//         $('.color-box__link').css('textDecoration','none');
//     });
// });

//change style by js複数の時
// $(document).ready(function(){
//     $('.js-change-style').click(function(){
//         $('.color-box__link').css({
//             'textDecoration':'none',
//             'color':'#ffffff',
//             'backgroundColor':'#ff0000'
//         });
//     });
// });

//body全体の背景色変更
// $(document).ready(function(){
//     $('.js-click').click(function(){
//         $('*').css('backgroundColor','blue');
//     });
// });

//current elementの箇所のみ色変更するjs-clickの背景が変わる
// $(document).ready(function(){
//     $('.js-click').click(function(){
//         $(this).css('backgroundColor','blue');
//     });
// });

// $(document).ready(function(){
//     $('.js-click').click(function(){
//         $('.txt-list li:nth-child(even)').css('color','blue');
//     });
// });


// $('.js-click').click(function(){
//     $('.txt-list__item').css('color','blue');
// });

// $('.js-click').dblclick(function(){
//     $('.area-list__item').css('color','red');
// });

// $(document).ready(function(){
//     $(".js-click").click(function(){
//         $(".txt-list").hide("slow");
//     });
// });

// $(".js-click").dblclick(function(){
//     $(".txt-list").show("slow");
// });


$(document).ready(function(){
    $('.focus-box__focus,.focus-box__blur').css('display','none');
    $('.focus-box__input').focus(function(){
        $('.focus-box__focus').css('display','inline').fadeOut(4000);
    });
    $('.focus-box__input').blur(function(){
        $('.focus-box__blur').css('display','inline').fadeOut(4000);
    });
});


$(document).ready(function(){
    $('.js-click').click(function(){
        $('.area-list').toggle('slow');
    });
});


$(document).ready(function(){
    $('.js-out-btn').click(function(){
        $('.-one').fadeOut();
        $('.-two').fadeOut('slow');
        $('.-three').fadeOut(2000);
    });
    $('.js-in-btn').click(function(){
        $('.-one').fadeIn();
        $('.-two').fadeIn('slow');
        $('.-three').fadeIn(2000);
    });
});

$(document).ready(function(){
    $('.js-fade-toggle').click(function(){
        $('.-one').fadeToggle();
        $('.-two').fadeToggle('slow');
        $('.-three').fadeToggle(2000);
    });
});


$(document).ready(function(){
    $('#date-picker').datepicker({
        dateformat:"yy/mm/dd    ",
        changeYear:true,
        changeMonth:true
    });
});