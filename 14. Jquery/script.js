/*  document.querySelector('h1'); 
    is equal to
    $('h1'); in jquery
*/
// we check first whether our document is ready to be accessed then only we start to word with the js code
$(document).ready(function () {
    // the below code is similar to document.querySelector('h1').style.color="red";
    // $('h1').css('color','red');

    // there is absolutely no difference between in selecting one element or multiple elemtens
    /*
        Ex: -> standard JS for selecting one element
                document.querySelector("h1"); 
            
            -> Jquery
                $("h1")

            -------or-------
            -> standard JS for selecting multiple elemetns
                document.qeurySelectorAll("button")

            -> Jquery
                $("button")


        -- css(param1, param2)
        We can also get the current value of the element's CSS property using jquery
        console.log($('element').css('property name'));

        Note: while using .css method there are mainly two parameteres which is to be passes
        $('element').css(param1,param2);
        @param1 - property name
        @param2 - property value

        ** if we only pass the first param then the jqeury returns the current value of that property, else it sets the value with the specified propety for the element

    */
    console.log($('h1').css('font-size'));
    //     the above code returns the value of font-size for h1 tag

    /*
        -- addClass()
        We can also add or remove classes to an element uisng
        $('element').addClass('class1 class2 etc');
        
        -- removeClass()
        $('element').removeClass('class1 class2 etc');
        
        -- hasClass()
        we can also check whether an element has a particular class being applied to it
        $('element').hasClass('classname'); return true or false
        
    */
    $('h1').addClass('green-background');
    /*
        -- text()
        In order to change text of an element use .text() method
        $('element').text('text goes here');
    
        -- html()
        to add some html code to and existing element
    
    */
    $('h1').text('text goes here');
    $('h1').html('<em>Hiiiii</em>');

    /*
        -- attr(param1, param2)
        @param1 - which attritubute to deal with
        @param2 - value for the attribute
    
        if only @param1 is passed then it returns the value of the attribute
        if both are passed it sets the value for the attribute with the second param as new value
    
        attributes can be anything such as id,class,href,src etc
    */
    console.log($('a').attr('href')); // prints the value of the href attribute
    $('a').attr('href', 'https://www.flipkart.com');

    /*
        ----------------------------------
                Event listeners
        Link- https://api.jquery.com/category/events/
        ----------------------------------
        Syntax:
            $('element).click('',callback function(){
                // body
            });
    */

    $('h1').click(function () {
        $('h1').css('color', 'pink');
    });

    $('li').click(function () {
        $(this).css('font-size', '' + Math.floor(Math.random() * 100) + 'px');
    });

    /*
        ------------------------------------
                Detecting keypress
        ------------------------------------
        Syntax: 
        $('element').keypress(callback function(){
            //code
        });
    */
    // the below code detects the key press in the input field and updates the h1 tag
    $('input').keypress(function (event) {
        $('h1').text(event.key);
    });

    /*
        Link - https://developer.mozilla.org/en-US/docs/Web/Events#event_index
        -- on() method
        Syntax: 
            $('element').on('event type',callback function(){
                //body
            });
        some popular events are
        - click
        - change
        - toggle
    */
    $('input').on('click', function () {
        $('h1').css('color', "red");
    });

    /*
        ---------------------------------------
            Adding elements dynamically
        ---------------------------------------
        -- before()
        to add html before the element specified
        Syntax: $('element').before('<button>click me</button>');
        
        -- after()
        to add html after the element specified
        Syntax: $('element').before('<button>click me</button>');
        
        -- prepend()
        to add html before the content of the element specified inside it
        Syntax: $('element').before('<button>click me</button>');
        
        -- append()
        to add html after the content of the element specified inside it
        Syntax: $('element').before('<button>click me</button>');
    */

    $('h1').before('<button>Before</button>');
    $('h1').after('<button>After</button>');
    $('h1').prepend('<button>Prepend</button>');
    $('h1').append('<button>Append</button>');

    /*
        ---------------------------------------
                    Animations
        ---------------------------------------
    
        -- hide()
        in order to hide an element this also suddenly changes the flow of the document
        * if we want to avoid it we can use fadeOut() method instead
        Ex: $('element').hide()
    
        -- show()
        -- toggle()
    
        does the exact same job but with a little smoothness
        --fadeOut()
        --fadeIn()
        --fadeToggle()
    
        for dropdowns
        --slideUp()
        --slideDown()
        --slideToggle()
    
    */
    $('button').click(function () {
        var currentButton = this.id;
        switch (currentButton) {
            case '1':
                $('h2').hide();
                break;
            case '2':
                $('h2').show();
                break;
            case '3':
                $('h2').toggle();
                break;
            case '4':
                $('h2').fadeOut();
                break;
            case '5':
                $('h2').fadeIn();
                break;
            case '6':
                $('h2').fadeToggle();
                break;
            case "7":
                $('h2').slideUp();
                break;
            case "8":
                $('h2').slideDown();
                break;
            case '9':
                $('h2').slideToggle();
                break;

            default:
                break;
        }
    });

    /*
        -------------------------------------
                Custom animation
        -------------------------------------
        use .animate({param1: param2, etc.}) method
        @param1 - property name
        @param2 - property value(should be numeric)
        Ex: $('h1').animate({opacity: 0.5});
        inside braces we can pass multiple properties
    
        we can also chain the animations together
    
    */

    $('#animate').click(function () {
        $('h2').animate({
            opacity: '0.5',
            padding: "10px"
        });
        $('h2').slideUp().slideDown().animate({ margin: '10px', opacity: 0.5 });
        $('h2').animate({ margin: 0, opacity: 1 });
    });

});