var Twit = Meteor.npmRequire('twit');
var Fiber =  Meteor.npmRequire('fibers');
var T = new Twit({
    consumer_key:         'OVRBntKZyfBZr2bi8TPHg'
  , consumer_secret:      '8Z9ygiHEYEtS1Du9Vmxa7A6opkQ9kkAZg5D450Two'
  , access_token:         '1161469866-KJZvzBCwi8JtQJKohcZOf8QHog59SidKR476B8M'
  , access_token_secret:  '2PdcA7Hbqtjihs2ToFFoWMCnrdJasV9xeVtjuSmug4'
})
 

 
// 
//  search twitter for all tweets containing '#fglsgmconf15', '#sgmConf15', "#sgmConf"
// 

var stream = T.stream('statuses/filter', { track: ['#FGLFUNFIT'], language: 'en' })

stream.on('tweet', function (tweet) {
			// console.log(tweet);
			// console.log(tweet.extended_entities.media[0].video_info.variants[0].url);


			var text = tweet.text;
			if(text.indexOf('http')>-1){
				text = text.substring(0, text.search("http"));
			}

			var media_url = "";
			var if_media  = false;
			if(tweet.entities.media !== undefined){
				media_url = tweet.entities.media[0].media_url;
				if_media = true;
			}


			var video_url = "";
			var if_video = false;
			if(tweet.entities.media !== undefined){
				if(tweet.extended_entities.media[0].video_info !== undefined){
					if(tweet.extended_entities.media[0].video_info.variants[0].url !== undefined){
						video_url = tweet.extended_entities.media[0].video_info.variants[0].url;
						if_video = true;
					}
				}
			}
			Fiber(function(){
				console.log(tweet);
				//Tweets.remove({});
				
				Tweets.insert({
					tweet 		 	: text,
					profile_picture : tweet.user.profile_image_url,
					screen_name  	: tweet.user.screen_name,
					real_name	 	: tweet.user.name,
					pic          	: tweet.user.profile_image_url,
					retweeted	 	: tweet.retweeted,
					created_at 		: tweet.created_at,
					approved_by_moderator : false,
					approved_at 	: null,
					if_media		: if_media,
					media_url 		: media_url,
					if_video		: if_video,
					video_url		: video_url, 
					checkboxState	: true

				});

			}).run();

	
})
