//////////////////////////////////////////////
//     Switching Between Movies & Series    //
//////////////////////////////////////////////

let mov = document.getElementById('Movies');
let ser = document.getElementById('Series');

    //Show Movies Cards
    document.getElementById('movies-list').addEventListener('click', (e) => {
        mov.style.display = 'block';
        ser.style.display = 'none';
        document.getElementById('movies-list').style.borderBottom = '1px solid white';
        document.getElementById('series-list').style.borderBottom = 'none';
    });
    //Show Series Cards
    document.getElementById('series-list').addEventListener('click', (e) => {
        ser.style.display = 'block';
        mov.style.display = 'none';
        document.getElementById('series-list').style.borderBottom = '1px solid white';
        document.getElementById('movies-list').style.borderBottom = 'none';
    });


//////////////////////////////////////////////
//         Show & Hide Card-Features        //
//////////////////////////////////////////////
let cardlist = document.getElementsByClassName('card');
let featurelist = document.getElementsByClassName('cf');

for (let index = 0; index < cardlist.length; index++) {
    const card = cardlist[index];
    const feature = featurelist[index];
    card.addEventListener('click', item => {
        if (feature.style.display === 'none') {
            closeAll();
            feature.style.display = 'flex';
        } else {
            feature.style.display = 'none';
        }
    });
}

// Closing all other card features //
// after clicking a different card //
function closeAll() {
    for (let index = 0; index < featurelist.length; index++) {
        const feature = featurelist[index];
        feature.style.display = 'none';
    }
}

///////////////////////////////////////////////////
//   Play sample video on clicking Play Button   //
///////////////////////////////////////////////////

let buttonList = document.getElementsByClassName('play');

for (let index = 0; index < buttonList.length; index++) {
    const element = buttonList[index];
    element.addEventListener('click' , () => {
        document.getElementById('vidbox').style.visibility = 'visible';
        document.getElementById('vid').style.visibility = 'visible';
        document.getElementById('vid').load();
        document.getElementById('vid').play();
    });
}

// hiding the videoplayer //

document.getElementById('vidbox').addEventListener('click' , () => {
    document.getElementById('vidbox').style.visibility = 'hidden';
    document.getElementById('vid').style.visibility = 'hidden';
    document.getElementById('vid').pause();
});
