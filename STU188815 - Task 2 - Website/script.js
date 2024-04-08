function generate(){
    //add quotes ? how to stop consecutive repetition?
    var quotes = {
       "- Beyoncé" : '"Your self-worth is determined by you. You dont have to depend on someone telling you who you are."',
       "- Walt Whitman" : '"Keep your face always toward the sunshine, and shadows will fall behind you."',
       "- Rosa Parks" : '"To bring about change, you must not be afraid to take the first step. We will fail when we fail to try."',
        "- Walt Disney" : '"All our dreams can come true, if we have the courage to pursue them."',
        "- Madam C.J. Walker" : '"Dont sit down and wait for the opportunities to come. Get up and make them."',
        "- Billie Jean King" : '"Champions keep playing until they get it right."',
        "- C.S. Lewis" : '"You are never too old to set another goal or to dream a new dream."',
        "- Aristotle" : '"It is during our darkest moments that we must focus to see the light."',
        "- Theodore Roosevelt" : '"Believe you can and youre halfway there."',
    }


var authors = Object.keys(quotes);

console.log(authors);

var author = authors[Math.floor(Math.random() *authors.length)];
var quote = quotes[author];



document.getElementById("quote").innerHTML =quote;
document.getElementById("author").innerHTML =author;
}


