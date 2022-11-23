$(function () {
    // $("p").hide()
    // $("p").css("color" ,"red")

    $("#welcome").css("color", "red");

    $("#btn-hide").click(function () {
        // $("p").css("color",'transparent')
        // $("p").css("display",'none')

        // $("p").css("color", "blue");
        $(this).css("background-color", "red");

        // $("p").hide(1000,function(){ $("span").show(1000)})
        // $("p").hide(1000,function(){ $("span").toggle(1000)})
        $("#welcome").toggle(700, function () {
            $("#p-hidden-message").toggle(700);
        });
    });

    // $("#btn-hide").click(function () {

    //     $("p").toggle()
    // });

    $("#btn-hide").dblclick(function () {
        $("#welcome").css("color", "green");
        $(this).css("background-color", "yellow");
    });

    $("#btn-hide").mouseenter(function () {
        $("#welcome").css("color", "pink");
        $(this).css("background-color", "orange");
    });
    $("#btn-hide").mouseleave(function () {
        $("#welcome").css("color", "purple");
        $(this).css("background-color", "blue");
    });
    $("#btn-hide").hover(function () {
        //uses mouse leave and mouse enter at the same time

        $("#welcome").css("color", "rose");
        $(this).css("background-color", "#777");
    });

    /*
  
      fadeIn()
      fadeOut ()
      fadeToggle()
      fadeTo()
   */

    // fadeIn

    // $("#fade-btn").click(function(){
    //      // in css file make #div-show-message diplay :none; and #cont-div showed
    //     $("#cont-div").fadeIn(2000,function(){
    //         $('#div-show-message').fadeIn(500)
    //     })
    // })

    // fadeOut

    // $("#fade-btn").click(function(){
    //     // in css file make #div-show-message diplay :none; and #cont-div display:none;
    //     $("#cont-div").fadeOut(2000,function(){
    //         $('#div-show-message').fadeIn(500)
    //     })
    // })

    //  fadeToggle

    //     $("#fade-btn").click(function(){
    //         // in css file make #div-show-message diplay :none; and #cont-div display:none;
    //         $("#cont-div").fadeToggle(2000,function(){
    //             $('#div-show-message').fadeToggle(500)
    //         })
    //     })

    //   fadeTo

    $("#fade-btn").click(function () {
        // in css file make #div-show-message diplay :none; and #cont-div display:none;
        $("#cont-div").fadeTo(2000, 0.3, function () {
            $("#div-show-message").fadeIn(700);
        });
    });

    /**
   slideUp ()
   slideDown()
   SlideToggle()
   */
    // $(".open").click(function(){
    //     $(".opened").slideDown(1800,function(){
    //         $('.open').slideUp(1800)
    //     })
    // })

    $(".open").click(function () {
        $(".opened").slideToggle(1800, function () {
            // $('.open').slideToggle(1800)
        });
    });
    /*
  animate()
  */
    let animatedDiv = $(".animated");

    // animatedDiv.animate({

    //     width:"-=100px",
    //     left:"100px",
    //     height:"+=100px",
    //     opacity:".5",
    //     borderRadius:"30px",
    //     backgroundColor : "red",
    //     color : "blue"
    // },2000
    // )
    // animatedDiv.animate({

    //     width:"-=100px",
    //     left:"100px",
    //     height:"+=100px",
    //     opacity:"1",
    //     borderRadius:"30px",
    //     backgroundColor:"red",
    //     color : "#00f",
    //     fontSize:"20px"
    // },2000
    // )
    // animatedDiv.animate({

    //     width:"+=100px",
    //     left:"100px",
    //     height:"-=100px",
    //     opacity:"1",
    //     borderRadius:"30px",

    //     fontSize:"20px"
    // },2000
    // ).css({
    //     background:"red",
    //     color : "blue",
    // })

    /*
  stop()
  */
    $(".btn-stop-animation").click(function () {
        $(".animated").stop(false, true);
    });
    /**
     * chain()
     *
     *
     */
    //raod number one
    $(".chained").slideUp(1000);
    $(".chained").slideDown(1000);
    $(".chained").fadeOut(1000);
    $(".chained").fadeIn(1000);
    //raod number two
    let chainedDiv = $(".chained");
    chainedDiv.css("background", "blue")
        .slideUp(2000)
        .slideDown(2000)
        .fadeOut(2000)
        .fadeIn(2000)
        .animate({
            width: "+=100px",
            left: "100px",
            height: "+=100px"
        }, 1500)

    /**
     * html()
     * text()
     * val()
     * attr()
     */


    let setGetHtmlDivText = $("#set-get-html-div").text()
    var setGetHtmlDivHtml = $("#set-get-html-div").html();
    console.log(setGetHtmlDivHtml)
    //    setGetHtmlP.text(setGetHtmlDivText)
    $("#set-get-html-p").html(setGetHtmlDivHtml);

    $("#get-val-btn").click(function () {
        $('#val-input').val(setGetHtmlDivText)
    })

    $("#set-val-btn").click(function () {
        $('#set-val-div').text($('#val-input').val())
    })

    console.log($(".ahmed").attr("class"))
    $(".ahmed").attr("class", "samy")
    $(".ahmed").attr({
        "class": "samy",
        "translate": "no"
    }
    )



    /**
     * append()// inside element last one (parent => child)
     * prepend() //inside element first one(parent => child)
     * after()  //after the element(parent => child)
     * before() //before the element (parent => child)
     * 
     * appendTo()// inside element last one  (child =>  parent)
     * prependTo() //inside element first one  (child =>  parent)
     */

    $(".chained").append("<a href='#' >Google </a>")
    $(".chained").prepend("<a href='#' > FaceBook </a>")
    $(".chained").before("<a href='#' >Before </a>")
    $(".chained").after("<a href='#' >After </a>")

    $(".span-add-file").click(function () {
        $("#bvar ").after("<input type='file'>")
    })

    $("<p></p>", {
        text: " welcome remove-p",
        class: "p-jguery"
    }).appendTo(".chained")




    /**
     * remove()// 
     * empty() //
     * detach() 
     */

    $(".remove-p").click(function () {
        $(".p-jguery").fadeOut(2000, function () {
            $(this).empty()
            // $(this).remove()   //remove element from main tree 
            ///$(this).detach()   // de atach element from proberties and remain proberties
            // $("p").empty(":contains('remove-p')")
        })
    })


    /**
     *  addClass()// 
     *  removeClass() //
     * toggleClass() 
     * hasClass()
     */

    $(".btn-addclass").click(function () {
        $(".p-addclass, .div-addclass ").addClass("custom br").removeClass("osama")
    })


    $(".p-addclass, .div-addclass ").click(function () {
        $(this).toggleClass("custom")
    })

    /**
     *  css()// set or get css properties
     * 
     */
    $(".btn-set-css").click(function () {
        // var color= $(".p-set-css").css("color")
        // console.log(color)
        var color = $(".input-set-css").val()
        $(".p-set-css").css({ "color": color, "background": "gray" })
    })


    /**
     * width()
     * text()
     * outerWidth()// contain margin , border ,  padding and div
     * innerWidth()//contain padding and div 
     * innerHeight()
     * outerHeight()
     */

    var dw = $(document).width()
    console.log(dw)
    if (dw >= 1220) {
        console.log("Congratulation you have a big screen ")
    } else {
        console.log("Sorry, you don't have  a big screen ")
    }
    var dv = $(".dim")
    dv.click(function () {
        if ($(this).width() >= 650) {
            $(dv.css({
                width: "200px"
            }))
        } else {
            $(this).width("+=" + 50)
        }


        $(this).text("Your div width is " + $(this).width() + "px")
        console.log("Your div width is " + $(this).width() + "px")
    })


    var lf = $(".left")
    var rh = $('.right')

    lf.click(function () {
        if ($(this).width() < 640) {
            $(this).width("+=" + 50)
            rh.width("-=" + 50)

            $(this).text("Your div width is " + $(this).width() + "px")
            rh.text("Your div width is " + rh.width() + "px")
            console.log("Your div width is " + $(this).width() + "px")
        }
    })
    rh.click(function () {
        if ($(this).width() < 600) {
            $(this).width("+=" + 50)
            lf.width("-=" + 50)
        }
        $(this).text("Your div width is " + $(this).width() + "px")
        lf.text("Your div width is " + lf.width() + "px")
        console.log("Your div width is " + $(this).width() + "px")
    })

    /**
    * traversing
    * parent()
    * parents()
    * parentsUntil()
    * childern()///the next level only
    * find() //nasted level
    */

    $(".tra-span").parent().css({
        "border": "1px solid red"
    })
    $(".tra-span").parents().css({
        "padding": "10px"
    })
    $(".tra-span").parents(".top").css({
        "border": " 1px solid blue"
    })
    $(".tra-span").parentsUntil(".top").css({
        "border": " 1px solid green"
    })




    $("section").children(".jht").css({
        "border": " 1px solid red"
    })
    $(".top").children(".tra-p").css({
        "border": " 1px solid orange"
    })


    $("section").find(".tra-p span").css({
        "font-weight": "800 "
    })

    $("section").find($("span:contains('Traversing two')")).css({
        "color": "#f0f ",
        "font-weight": "800 "

    })
    /**
     * siblings()
     * next()
     * nextAll()
     * nextUntil()
     * prev()
     * prevAll()
     * prevUntil()
     * 
     * 
     */



    $("nav div, nav p").click(function () {

        // $(this).siblings().slideIn(3000)

        // $(this).siblings(".select").fadeOut(1000)

        //  $(this).prev().slideUp(2000)
        //  $(this).next().css({
        //     "color":"#f0f ",
        //     "font-weight":"800 ",
        //     "border":" 1px solid orange"
        // })
        $(this).nextAll("nav p").slideUp(1000)
        $(this).nextAll("nav div").slideUp(1000)

    })

    /**
     * first()
     * last()
     * eq()
     * filter()
     */

    //first()
    $("address div").first().next().css({
        "background": "#555"
    })

    $("address div").first().css({
        "background": "#555"
    })
    // last()
    $("address div").last().css({
        "background": "#888",
        color: "white"
    })
    $("address div").last().prev().css({
        "background": "#777", color: "white"
    })

    ////eq()
    $("address div").eq(2).css({
        "background": "#777", color: "red"
    })
    $("address div").eq(-3).css({
        "background": "#777", color: "red"
    })

    //filter()
    $("address div").filter(".div-5").nextAll().css({
        color: "orange",
    })
    //not()
    $("address div").not(".div-3").css({
        "border": "1px solid green",
    })

    $("address div").click(function () {
        $(this).first().css({
            "background": "#555",
        })
    })

    //selectors
    // $(img["title ='ahmed'"]).css({border:" 1px solid red"}) // get the element that title e "ahmed"
    // $(img["title !='ahmed'"]).css({border:" 1px solid red"}) // get all the element that have not "ahmed"
    // $(img["title *='ahmed'"]).css({border:" 1px solid red"}) // get all the element that contain " dvahmeddfvd"
    // $(img["title ~='ahmed'"]).css({border:" 1px solid red"}) // get all the element that contain "wefwef ahmed ewewew"
    // $(img["title ^='ahmed'"]).css({border:" 1px solid red"}) // get all the element that Start with "ahmed ewewew"



    var norDiv = $(".normal")
    norDiv.click(function () {
        $(this).hide(2000)
    })

    norDiv.mouseenter(function () {
        $(this).toggleClass("dim")
    })


    //bind()

    // var mapDiv = $(".map")
    // mapDiv.bind({
    //     click: function () { $(this).text("you have click on me") },
    //     dblclick: function () { $(this).text("you have double click on me") },
    //     mouseenter: function () { $(this).text("you have enter on me") },
    //     mouseleave: function () { $(this).text("you have leave me") },
    // })


    var cus = $(".custom")
    var btnCus = $(".btn-custom")

    cus.bind("myCustomEvent", function (event, myName, myAge) {
        cus.text('hello ' + myName + ' Your Age is ' + myAge)
    })

    btnCus.click(function () {
        cus.trigger("myCustomEvent", ["ahmed", '32'])
    })


    //   var btnCustomDesign=$(".btn-custom-design")
    //   var CustomDesign=$(".custom-design")


    //   CustomDesign.bind("myCustomEvent", function (event, myWidth, myHeight ,myBack, myColor) {
    //     CustomDesign.height(myHeight).width(myWidth)
    //     $(this).css({
    //         backgroundColor:myBack,
    //         color:myColor
    //     })
    // })

    // btnCustomDesign.click(function () {
    //     CustomDesign.trigger("myCustomEvent", ["250px", '320px','red',"white"])
    // })
    // live works on version 1.0.7 from jQuery
    // $(".input-file-div span").live("click" ,function(){
    //     $(" <input type='file'><span>+</span> <hr> ").insertAfter($(this))
    // })
    // delegate  works on version 1.0.7 from jQuery
    // $(".input-file-div ").delegate("span","click" ,function(){
    //     $(" <input type='file'><span>+</span> <hr> ").insertAfter($(this))
    // })


    var mapDiv = $(".map")
    mapDiv.on({
        click: function () { $(this).text("you have click on me") },
        dblclick: function () { $(this).text("you have double click on me") },
        mouseenter: function () { $(this).text("you have enter on me") },
        mouseleave: function () { $(this).text("you have leave me") },
    })



    var btnCustomDesign = $(".btn-custom-design")
    var CustomDesign = $(".custom-design")


    CustomDesign.on("myCustomEvent", function (event, myWidth, myHeight, myBack, myColor) {
        CustomDesign.height(myHeight).width(myWidth)
        $(this).css({
            backgroundColor: myBack,
            color: myColor
        })
    })
    btnCustomDesign.on('click', function () {
        CustomDesign.trigger("myCustomEvent", ["250px", '320px', 'red', "white"])
    })


    $(".input-file-div span").on("click", function () {
        $(" <input type='file'><span>+</span> <hr> ").insertAfter($(this))
    })


    var aGoogle = $('.a-google')
    aGoogle.on("click", function (event) {
        event.preventDefault()

        if (event.isDefaultPrevented()) {
            $(".a-message").text("the link wont work")
            $(".sampa-img").fadeIn(1500)
        } else {
            $(".a-message").text("the link will go to google")
        }

    })
    /**
     * شرح كل خواص الضغط على الأزرار
     * keyup()
      * keydown()
     *  keypress()
     */

    $(".key-input-title").on("keyup", function (event) {
        $('.key-div h3').text($(this).val())
    })
    $(".key-input-subject").on("keyup", function (event) {
        $('.key-div p').text($(this).val())
    })




    $("select").on("change", function () {
        $(".key-div").css({
            backgroundColor: $(this).val(),
            color: "white"

        })
    })


    $(".event-one").one("click dblclick", function () {
        $(this).animate({
            fontSize: "+=3px"
        })
    })


    $("textarea").on("click", function () {
        $(this).select()
    })

    $("textarea").select(function () {
        $(this).after("text copied")
    })

    $(window).on("resize", function () {
        var wid = $(window).width()
        var hei = $(window).height()
        $("section").width(wid)
        $("section").height(hei)

        console.log(wid, hei)
        if (wid <= 500) {
            $('.phone-black-screen').text("sorry the website is not ready to phone").removeClass("hidden")
        }
        else {
            $('.phone-black-screen').addClass("hidden")
        }
    })


    $(window).on("scroll", function () {

        var sct = $(window).scrollTop()
        if (sct >= 1000) {
            $(".div-up").fadeIn(500)
            $(".div-up").on('click', function () {
                $(window).scrollTop(0)
            })

        } else {
            $(".div-up").fadeOut(500)
        }
    })

    $("html").mousemove(function (e) {
        $(".loc-mouse").text("X:Axis : " + e.pageX + " Y:Axis : " + e.pageY)
        $(".circle").show().offset({
            left: e.pageX,
            top: e.pageY
        })
    })

    $(".pre-form").submit(function (e) {
        if ($("input[name='username']").val() === "yes") {
            $(".incorrect").text("done").show()
        } else {
            $(".incorrect").text("word not correct").show().delay(5000).fadeOut(2000)
            e.preventDefault()
        }

    })

    $(".clone").on("click", function () {
        $(".form-con").clone(true).appendTo("body")
    })

    $("#activate-btn").on("click", function (event) {
        event.preventDefault()
        $("input[name='username']").prop({
            "disabled": false,
            "class": "username",
            "id": "username"

        })

    })

    $(".div-replace").on("click", function (e) {
        $(this).replaceWith('<input type="text" name="replace" value="'+$(this).text()+ '">')
        $("#btn-replace").fadeIn()
    })


    $("#btn-replace").on("click", function (e) {
        $("input[name='replace']").replaceWith('<div class="div-replace" > ' +$("input[name='replace']").val()+'</div>')
        $(this).fadeOut()
    })

//wrap(html element) to add parent to element
//unwrap() to remove parent to element

$(".wwe ul li").each(function(){
    if($(this).hasClass("test-li")){
        $(this).css({color :"red"})
    }
})
});

$(document).ready(function () {


});

