const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=fcebb50236a5442e89d0190363388bef";
//console.log(url);

const results = document.querySelector(".replacetext");

async function receiveFacts() {

    const waitingtime = await fetch(url);

    const apidata = await waitingtime.json();

    console.log(apidata);

    const apireceiver = apidata.all;


for (let i = 0; i < apireceiver.length; i++) {
    console.log(apireceiver[i].text);

if (i === 8); {
break;
}


results.innerHTML = `<div class="api">${apireceiver[i].text}</div>;`

}
}
//console.log(receiveFacts);

receiveFacts();

//const newText = document.querySelector(".finalresults");

//async function apilogs() {

//const respondtime = await fetch(url);

//const waiting = await respondtime.json();

//const displaytext = waiting.all;

//for (let i = 0; i < displaytext.length; i++) {
//    console.log(displaytext[i].text);
//}
//}

//apilogs();

