
let url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
//&begin_date=${begin_date}&end_date=${end_date}
let apikey = '896fe5f1ca604377b0fc87c58211f0ec'
let q = 'test'
let fq = ''
let begin_date = '20170210'
let end_date = ''
let sort = ''
let fl = ''
let hl = ''
let page = '1'
let facet_field = ''
let facet_filter = ''

function buildURL(){
    let tempURL = url + `?api-key=${apikey}`
    if(q.length > 0){
        tempURL = tempURL + `&q=${q}`
    }
    if(page.length > 0){
        tempURL = tempURL + `&page=${page}`
    }
    if(begin_date > 0){
        tempURL = tempURL + `&begin_date=${begin_date}`
    }
    if(end_date > 0){
        tempURL = tempURL + `&end_date=${end_date}`
    }
    console.log(`build url: ${tempURL}`)
    return tempURL
}

function searchAPI(){
    var url = ``
    url = buildURL()

    $.ajax({
    url: url,
    method: 'GET',
    }).done(function(results) {
        console.log(results)
        let arr = results.response.docs

        arr.forEach(result => {
            console.log(result.headline.main)
        })
    }).fail(function(err) {
        throw err;
    });
}

//running here
    console.log('running search API')
    searchAPI()

    $(document).on("click",'.submitBtn', function(){
        // get form data
        searchAPI()
    })

