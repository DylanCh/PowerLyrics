var axios = require('axios');

module.exports= function(request, response){
	const musixMatchAPIKey = require('../../musixMatch').APIKey;
	var url = 'http://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track='
                    + request.query.title
                    +'&q_artist='
                    + request.query.artist
                    + '&apikey=' +musixMatchAPIKey;
    axios({
        method: 'get',
        url : url
    }).then(function(result){
        console.log(result.data);
        response.setHeader('content-type','application/json');
        response.send(result.data);
        response.end();
    })
    .catch(function(error){
        console.log('Cannot GET')
    });
};