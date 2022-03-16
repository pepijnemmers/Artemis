$(document).ready(function() {
    // test for change slides
    $(".donate-right .logo").click(function() {
        if (!$(".first-slide").hasClass("hidden")) {
            $(".first-slide").addClass("hidden");
            $(".second-slide").removeClass("hidden");
        } 
        else if ($(".first-slide").hasClass("hidden") && $(".third-slide").hasClass("hidden")) {
            $(".second-slide").addClass("hidden");
            $(".third-slide").removeClass("hidden");
        } 
        else if ($(".first-slide").hasClass("hidden") && $(".second-slide").hasClass("hidden")) {
            $(".first-slide").removeClass("hidden");
            $(".third-slide").addClass("hidden");
        }
    });

    // Localstorage clearen
    localStorage.clear();

    // variable aanmaken
    let selectedPrice = 0;

    // first slide 
        // Button selection
        $("#priceSelection1").click(function() {
            selectPrice(1);
        });
        $("#priceSelection2").click(function() {
            selectPrice(2);
        });
        $("#priceSelection3").click(function() {
            selectPrice(3);
        });
        $("#priceSelection4").click(function() {
            selectPrice(4);
        });
        $("#priceSelection5").click(function() {
            selectPrice(5);
        });
        $("#priceSelection6").click(function() {
            selectPrice(6);
        });
        $("#priceSelection7").click(function() {
            selectPrice(7);
        });        

        // on change van input
        $("#priceSelection7").change(function() {
            let inputValue = $("#priceSelection7 > input#bedrag").val();
            let inputValueRounded = Math.round(inputValue);
            $("#priceSelection7 > input#bedrag").val(inputValueRounded);
            $("#priceSelection7").attr("data-price", inputValueRounded);
            selectPrice(7);
        });

        // on click van prijsoptie
        function selectPrice(chosen) {
            $("#priceSelections > button").removeClass("active");
            $("#priceSelections > .input").removeClass("active");

            if (chosen == 7) {
                $("#priceSelections > .input").addClass("active");
            } else {
                $(`#priceSelection${chosen}`).addClass("active");
            }

            selectedPrice = $(`#priceSelection${chosen}`).attr("data-price");
            document.getElementById("btnBedragFirstSlide").innerHTML = `${selectedPrice},00`;
            document.getElementById("btnBedragSecSlide").innerHTML = `${selectedPrice},00`;
        }
        selectPrice(3);
        
        // verstuur knop
        $(".btn#toSecSlide").click(function() {
            if (selectedPrice >= 5) {
                $(".first-slide").addClass("hidden");
                $(".second-slide").removeClass("hidden");
            } else {
                $(".first-slide .msg").html("Het minimale bedrag is €5,-");
            }
        });

    // second slide
        // verstuur knop
        $(".btn#toSecSlide").click(function() {
            
        });
        
        // vorige knop
        $(".back-btn#toFirstSlide").click(function() {
            $(".first-slide").removeClass("hidden");
            $(".second-slide").addClass("hidden");
        });

    // third slide
        // Data aanpassen
            // 1. Totalprice
            // 2. TotalDonaters
            // 3. Progresbar
            // 4. Array met namen (loopen bij "Bedankt voor je donatie  + naam ")
            // 5. Laatste donateurs
        // sluiten knop werkend maken
        // opslaan in localstorage

        
    // share menu

});