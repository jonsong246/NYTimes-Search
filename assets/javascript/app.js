
let q = []

function searchAPI(){
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
    'api-key': "896fe5f1ca604377b0fc87c58211f0ec",
    'q': `${q}`
    :
    });
    $.ajax({
    url: url,
    method: 'GET',
    }).done(function(result) {
    console.log(result);
    }).fail(function(err) {
    throw err;
    });
}

$(document).ready(function() {
    $(document).on("click",'.submitBtn', function(){
        // get form data
        searchAPI()
    })

}
