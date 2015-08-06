if (Meteor.isClient) {
  Router.route('/', function(){
    this.render('tweets');
  });
  Router.route('/home', function(){
    this.render('tweets');
  });
  Router.route('/register', function(){
    this.render('register');
  });
  Router.route('/admin', function(){
    this.render('admin');
  })
  Router.route('/login', function(){
    this.render('login');
  });
  

  

  Template.tweets.helpers({
    tweets: function() {
        return Tweets.find({}, { sort: { created_at: -1}}).fetch();
    }
  })

  Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
            email: email,
            password: password }, 
            function (error) {
              if(error){
                  console.log(error.reason); 
              } else {
                  Router.go("/admin"); 
              }
            
        });
    }
  });
  
  Template.admin.helpers({
    tweets: function() {
        return Tweets.find({}, { sort: { created_at: -1}}).fetch();
    }
  });

  Template.admin.events({
    
    'click .delete': function(){
      
      Tweets.remove( {_id: this._id} );
        
    }

  });

  Template.navigation.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('login');
    }
  });

  Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password, function(error){
          if (error) {
            console.log(error.reason);
          }
          else {
              Router.go("/admin");
          }
        });
    }
});
  // Template.twitterScreen.helpers({

  // 	tweets: function() {
  //       var topTweet =  Tweets.find({approved_by_moderator: true}, { sort: {approved_at: -1}}).fetch()[0];
  //       topTweet.checkboxState = checkboxState;
  //       var result = new Array();
  //       result.push(topTweet);
  //       if (checkboxState){
  //           checkboxState = false ;
  //       }
  //       else{
  //         checkboxState = true;
  //       }
  //       return result;
  //   },


  // });


      

  
 
}