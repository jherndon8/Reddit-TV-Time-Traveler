//For now, we'll just use breaking bad's show and id
console.log("Loaded");
var show = "BreakingBad";
var id = 169;

function onSelectEpisode(season, episode) {
    console.log("onSelectEpisode");
    var link = "http://epguides.com/common/exportToCSVmaze.asp?maze=" + id;
    getAPIResult(link, "json", onSelectEpisodeResponse, [season, episode]);
}

function onSelectEpisodeResponse(response, seasonAndEpisode) {
    console.log("onSelectEpisodeResponse");
    var season = seasonAndEpisode[0];
    var episode = seasonAndEpisode[1];
    for (var i = 0; i < response.length; i++) {
        episode = response[i];
        if (episode["season"] == season && episode["number"] == episode) {
            console.log(episode);
            goToEpisode(episode);
            break;
        }
    }
}

function goToEpisode(episode) {
    //Take episode airdate and convert it to unix timestamp and go to reddit
    console.log(episode);
}

function getAPIResult(link, responseType,  callback, callbackParams) {
    console.log("getAPIResult");
    var request = new XMLHttpRequest();
    request.open("get", link, true);
    request.responseType = responseType;
    request.onload = function() {
        if (request.status == 200) {
            callback(request.response, callbackParams);
        } else {
            //TODO : Handle error
            console.log("No Result");
        }
    }
    request.send();
}

onSelectEpisode(4, 2);
