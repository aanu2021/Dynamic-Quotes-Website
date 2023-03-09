const quotes = document.getElementById('quotes');
const author = document.getElementById('author');
const quoteBtn = document.getElementById('quoteBtn');
const tweetMe = document.getElementById('tweetMe');

let realData = "";
let textContent = "";
let authorName = "";

const tweetNow = () => {

   let tweetUrl = `https://twitter.com/intent/tweet?text=${textContent}`;
   window.open(tweetUrl,"_blank");

}

const getNewQuotes = () => {

   let realDataLength = realData.length; 
   let rNum = Math.floor(Math.random()*realDataLength);
   authorName = realData[rNum].author;
   textContent = realData[rNum].text;
   quotes.innerText = textContent;
   if(authorName === null){
      author.innerText = 'Anonymous';
   }
   else{
      author.innerText = authorName;
   }
   
}


const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";

  try {
    let data = await fetch(api);
    realData = await data.json();
    getNewQuotes();
  } catch (err) {
    console.error(err);
  }
};

quoteBtn.addEventListener('click',getNewQuotes);
tweetMe.addEventListener('click',tweetNow);
window.onload = getQuotes;
