
let url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'

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
let num = ''

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
    $('#content').empty()
    var url = ``
    pullAPIParameters()
    url = buildURL()

    $.ajax({
    url: url,
    method: 'GET',
    }).done(function(results) {
        console.log(results)
        let arr = results.response.docs

        for (i = 0; i < num; i++) {
            if (i % 2 === 0) {
                $('#content').append(`
                   <div class="article col-sm-12 whitebg">
                       <h3>${i + 1} ${arr[i].headline.main}</h3><h5>${arr[i].snippet}</h5><a href="${arr[i].web_url}"><h6>${arr[i].web_url}</h6></a>
                   </div>
                `)
            } else {
                $('#content').append(`
                   <div class="article col-sm-12 graybg">
                       <h3>${i + 1} ${arr[i].headline.main}</h3><h5>${arr[i].snippet}</h5><a href="${arr[i].web_url}"><h6>${arr[i].web_url}</h6></a>
                   </div>
                `)
            }
            console.log(arr[i].headline.main)
        }
    }).fail(function(err) {
        throw err;
    });
}

function pullAPIParameters(){
    console.log('pulling parameters')

    q = $('#searchTerm').val()
    page = parseInt($('#numRecords').val() / 10)
    num = $('#numRecords').val()
    begin_date = $('#startYear').val()
    end_date = $('#endYear').val()
}

//running here

$(document).ready(function() {

    $(document).on("click", "#search", function(){
        // get form data
        console.log('running search API')
        searchAPI()
    })

    $(document).on("click", "#clear", function(){
        // clear form data and results
        $('#searchTerm').val('')
        $('#numRecords').val('1')
        $('#startYear').val('')
        $('#endYear').val('')
        $('#content').empty()
    })
})

