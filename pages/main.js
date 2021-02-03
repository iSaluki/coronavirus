$(function () {
    var $stats = $("#stats");
    $.ajax({
        type: "GET",
        url: "https://covid19-api.org/api/status",
        success: function(stats){
        $.each(stats, function(i, stat)
        {
            $stats.append("<li>Country: "+ stat.country +", Cases: "+ stat.cases +" , Deaths: "+ stat.deaths + ", Updated at: "+ stat.last_update +", Recovered:" + stat.recovered + "</li>");
        })
        }
    });
});