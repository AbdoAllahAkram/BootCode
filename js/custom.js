/*jshint -W117*/
$(document).ready(function () {

    // Show Color Option Div When Click On   Chick Gear
    $(".check-gear").click(function () {
        $(".color-option").fadeToggle();
    });

    // Change Style Color From Check Gear
    var liColor = $(".color-option ul li");

    liColor
        .eq(0).css("backgroundColor", "#65af00").end()
        .eq(1).css("backgroundColor", "#C62828").end()
        .eq(2).css("backgroundColor", "#FF9800").end()
        .eq(3).css("backgroundColor", "#9C27B0")

    liColor.click(function () {
        console.log($(this).attr("data-value"))
        $("link[href*='theme']").attr("href", "css/" + $(this).attr("data-value") + ".css")
        $("img[src*='icon_cloud']").attr("src", "images/icon_cloud_" + $(this).attr("data-value") + ".png")

    });

    // Loading Page
    $(window).ready(function () {


        $(".loading .spinner").fadeOut(1000,
            function () {
                $("body").css("overflow", "auto");
                $(".loading").fadeOut(1000,
                    function () {
                        $(".loading").remove();
                    }
                );
            });

    });


});
