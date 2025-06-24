myQuote=[
{
    Text_Arcticture:'“Be yourself; everyone else is already taken.',
    Text_Auther:'--Oscar Wilde'
},

{
    Text_Arcticture:'So many books, so little time.',
    Text_Auther:'--Frank Zappa'
},

{
    Text_Arcticture:'Two things are infinite: the universe and human stupidity; and Iam not sure about the universe.',
    Text_Auther:'--Albert Einstein'
},

{
    Text_Arcticture:'A room without books is like a body without a soul.',
    Text_Auther:'--Marcus Tullius Cicero'
},

{   
    Text_Arcticture:'You only live once, but if you do it right, once is enough.',
    Text_Auther:'--Mae West'
}

]



function getQuote(){
  
var correctNumber=Math.floor(Math.random()*myQuote.length)


document.getElementById('Text_Arcticture').innerHTML=myQuote[correctNumber].Text_Arcticture
document.getElementById('Text_Auther').innerHTML=myQuote[correctNumber].Text_Auther
   
}



