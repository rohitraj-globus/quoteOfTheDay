var express=require('express');
var app=express();
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));
var port= process.env.PORT || 8080;

var quotes=[
    "You can do anything, but not everything. —David Allen",
    "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. —Antoine de Saint-Exupéry",
    "The richest man is not he who has the most, but he who needs the least. —Unknown Author",
    "You miss 100 percent of the shots you never take. —Wayne Gretzky",
    "Courage is not the absence of fear, but rather the judgement that something else is more important than fear. —Ambrose Redmoon",
    "You must be the change you wish to see in the world. —Gandhi",
    "When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean. —Lin-Chi",
    "The third-rate mind is only happy when it is thinking with the majority. The second-rate mind is only happy when it is thinking with the minority. The first-rate mind is only happy when it is thinking. —A. A. Milne",
    "To the man who only has a hammer, everything he encounters begins to look like a nail. —Abraham Maslow",
    "We are what we repeatedly do; excellence, then, is not an act but a habit. —Aristotle",
    "A wise man gets more use from his enemies than a fool from his friends. —Baltasar Gracian",
    "Do not seek to follow in the footsteps of the men of old; seek what they sought. —Basho",
    "Do illegal thing legally  __Rohit Raj__",
    "Everyone is a genius at least once a year. The real geniuses simply have their bright ideas closer together. —Georg Christoph Lichtenberg",
    "What we think, or what we know, or what we believe is, in the end, of little consequence. The only consequence is what we do. —John Ruskin",
    "The real voyage of discovery consists not in seeking new lands but seeing with new eyes. —Marcel Proust",
    "Work like you don’t need money, love like you’ve never been hurt, and dance like no one’s watching —Unknown Author",
    "Try a thing you haven’t done three times. Once, to get over the fear of doing it. Twice, to learn how to do it. And a third time, to figure out whether you like it or not. —Virgil Garnett Thomson",
    "Even if you’re on the right track, you’ll get run over if you just sit there. —Will Rogers",
    "People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily. Zig Ziglar"
    ];

app.get('/',function(req,res){
    var randomNumber=Math.floor((Math.random() * 20) + 1);
    var quote = quotes[randomNumber-1]
    res.render('home',{quote: quote});
});

app.listen(port,function(req,res){
    console.log("Server is up and running at port no "+port);
});