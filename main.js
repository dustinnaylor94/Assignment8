$(document).keypress(function(e) {
    if(e.which == 13) {

        var searchText = $("#searchBox").val();
        console.log(searchText);
        getJson(searchText);
    }
});

function getJson(searchText){
    var apiKey = "49766ec6-b892-48eb-9ec8-2e1a92bbb4e5";
    console.log(searchText);
    $.ajax({
        url: "http://imdb.wemakesites.net/api/search" + searchText,
        data: {
            api_key: apiKey
        },
        crossDomain: true,
        dataType: "jsonp",
        success: function(data) {
            window.console.log(data);
            $.each(data.data.results.titles, function (i, movie) {
                $("#moviesContainer").append("<div id='movie'>" + data.data.results.titles[i].title + "<p>" + data.data.results.names[i].title + "</p></div>");

            });
        }
    });
}
$(function () {
   $("div").click(function () {
       $("#moviesContainer div").animate({height: "toggle"});

   });

});


