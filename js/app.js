(function ($) {
    "use strict";

    // isotope
    var grid = $(".grid").isotope({
        itemSelector: ".grid-item",
        percentPosition: true,
    });
    // filter items on button click
    $(".filter-button-group").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        grid.isotope({ filter: filterValue });
    });
    //active
    $(".nav-list button").click(function () {
        $(".nav-list button.active").removeClass("active");
        $(this).addClass("active");
    });

    
})(jQuery);
