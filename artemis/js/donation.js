$(document).ready(function() {
    // Localstorage clearen of scherm tonen
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
            if (selectedPrice >= 2) {
                $(".first-slide").addClass("hidden");
                $(".second-slide").removeClass("hidden");
            } else {
                $(".first-slide .msg").html("Het minimale bedrag is €2,-");
            }
        });

    // second slide
        // verstuur knop
        document.getElementById("donateForm").addEventListener("submit", () => {
            fullname = $(".second-slide #name").val();
            email = $(".second-slide #email").val();
            setLocalStorage(fullname, email);

            $(".second-slide").addClass("hidden");
            $(".third-slide").removeClass("hidden");

            updateContent();
        });          

        // vorige knop
        $(".back-btn#toFirstSlide").click(function() {
            $(".first-slide").removeClass("hidden");
            $(".second-slide").addClass("hidden");
        });

    // set local storage
    function setLocalStorage(fullname, email) {
        localStorage.setItem("price", selectedPrice);
        localStorage.setItem("name", fullname);
        localStorage.setItem("email", email);
    }        

    // third slide - content aanpassen
    function updateContent() {
        // Totalprice
        let totalPrice = 321 + parseInt(localStorage.getItem("price"));
        document.getElementById("totalPrice").innerHTML = `€${totalPrice},00`;

        // Progresbar
        document.getElementById("progressbar").style.width = (totalPrice * 100 / 1980) + "%";

        // TotalDonaters
        let totalDonaters = 15;
        let newDonaters = totalDonaters + 1;
        document.getElementById("totalDonates").innerHTML = newDonaters + " Donateurs"

        // Nieuwste donateur toevoegen
        document.getElementById("thanksDonater").innerHTML = localStorage.getItem("name");

        // Laatste donateurs
        const latestDonatersHtml = `<li><span>${localStorage.getItem("name")}</span> met een donatie van <span>€${localStorage.getItem("price")},00</span></li>`
        $(".latest-donates ul").prepend(latestDonatersHtml);
    }     

     
    // share menu
    $(".share").click(function() {
        const text = window.location;
        try {
            navigator.clipboard.writeText(text);
            $(".share").addClass("copied");
            setTimeout(function() {
                $(".share").removeClass("copied");
            }, 2500);
        } catch {
            window.prompt("Kopieer: Ctrl + C, Enter", text);
        }
    });

    // show all donaters
    $("#showAllDonates").click(function() {
        if ($(".latest-donates ul").hasClass("show-all")) {
            $(".latest-donates ul").removeClass("show-all");
            $("#showAllDonates").html("Toon alle");
        }
        else {
            $(".latest-donates ul").addClass("show-all");
            $("#showAllDonates").html("Toon eerste 5");
        }
    });    
});