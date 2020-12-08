var isSongs = false;
var gameName = 'Music Puzzle';
var currentSong = null;
var currentSinger = null;

var winAudio = new Audio('images/win.mp3');
var loseAudio = new Audio('images/lose.mp3');
var sound = null;

const GRID = document.getElementById('grid');

function initalize() {

    GRID.innerHTML = "";

    var singerCount = data.length;
    var unlocked = 0;

    for (var i = 0; i <= data.length - 1; i++) {

        var a = data[i];
        var block = createBlock();
        block.data = a;
        block.data.start = block.data.start + 1;

        if (a.locked == false)
            block.children[0].style.backgroundImage = "url('images/music icon.png')"
			block.children[0].style.flexDirection = 'column';
			block.children[0].style.alignItems = '';

        if (a.locked == true) {
            block.style.pointerEvents = 'none';
            block.style.opacity = 0.5;
            block.children[0].style.backgroundImage = "url('images/locked.png')" //," + block.children[0].style.backgroundImage;
            block.children[0].style.backgroundSize = "30px," + block.children[0].style.backgroundSize;
        } else unlocked++;

        var p = document.createElement('p');
        p.style.overflow = 'hidden';
        p.style.whiteSpace = 'nowrap';
        p.style.textOverflow = 'ellipsis';
        p.innerHTML = a.song;
        block.children[0].appendChild(p);

        var div = document.createElement('div');

        var p = document.createElement('p');
        p.style.overflow = 'hidden';
        p.style.whiteSpace = 'nowrap';
        p.style.textOverflow = 'ellipsis';
        p.innerHTML = 'Best Score: ' + a.hiScore;
        //block.children[0].appendChild(p);

        var star = Math.floor(a.hiScore / 50) - 1;
        var starDiv = createStarBox(star);
        starDiv.style.background = 'black';
        starDiv.style.opacity = 0.7;
        //if(a.locked == false)
        //block.children[0].appendChild(starDiv);

        div.appendChild(starDiv);
        div.appendChild(p);
        if (a.locked == false)
            block.children[0].appendChild(div);

        var p = document.createElement('p');
        p.style.overflow = 'hidden';
        p.style.whiteSpace = 'nowrap';
        p.style.textOverflow = 'ellipsis';
        p.innerHTML = '(' + a.singer + ')';
        //block.children[0].appendChild(p);


        GRID.appendChild(block);

    }
    $('#unlocked').text(" " + unlocked + '/' + singerCount);
    GRID.flag = true;
}

function createBlock(isSong) {
    var article = document.createElement('article');
    article.classList.add('cards');
    var div = document.createElement('div');
    div.classList.add('card-back');

    div.style.backgroundSize = "contain";
    div.style.backgroundRepeat = "no-repeat";
    div.style.backgroundPosition = "center center";

    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.style.justifyContent = 'space-between';

    //div.style.alignItems = 'flex-end';
    //div.style.justifyContent = 'flex-end';

    div.style.color = 'white';
    div.style.textAlign = 'center';

    div.onclick = function() {
        $('#menu').hide();
        $('#collage').show();
        currentSong = this.parentElement.data;
        //currentSong.fullSrc = this.parentElement.singer.url() + this.parentElement.song.src;
        currentSong.dom = this.parentElement;
        title.innerHTML = currentSong.song;
        lives = 3;
        $('#visual-stars').text(lives);
        startGame(images, currentSong.difficult);
    }

    article.appendChild(div);

    return article;
}


function goToStart() {

    $('#overlay').show();
    $('#start-game-popup').show();
    $('#menu').hide();

}


function playButtonClick() {

    $('#overlay').hide();
    $('#start-game-popup').hide();
    $('#menu').show();

    if (!GRID.flag) initalize();

}


function createStarBox(star, flag) {

    var starDiv = document.createElement('div'); //footer
    starDiv.style.display = 'flex';
    starDiv.style.alignItems = 'center';
    starDiv.style.justifyContent = 'center';

    if (!flag) {
        //starDiv.style.background = '#3F51B5';
        //starDiv.style.margin = '1px';
    }

    var div1 = document.createElement('div');
    div1.style.width = '24px';
    div1.style.height = '24px';
    div1.style.backgroundSize = "contain";
    div1.style.backgroundRepeat = "no-repeat";
    div1.style.backgroundPosition = "center center";
    div1.style.backgroundImage = "url('images/star" + (star >= 1 ? "" : "1") + ".png')";
    div1.style.marginRight = '3px';
    starDiv.appendChild(div1);

    var div2 = document.createElement('div');
    div2.style.width = '24px';
    div2.style.height = '24px';
    div2.style.backgroundSize = "contain";
    div2.style.backgroundRepeat = "no-repeat";
    div2.style.backgroundPosition = "center center";
    div2.style.backgroundImage = "url('images/star" + (star >= 2 ? "" : "1") + ".png')";
    div2.style.marginLeft = '3px';
    div2.style.marginRight = '3px';
    if (flag) div2.style.marginBottom = '10px';
    starDiv.appendChild(div2);

    var div3 = document.createElement('div');
    div3.style.width = '24px';
    div3.style.height = '24px';
    div3.style.backgroundSize = "contain";
    div3.style.backgroundRepeat = "no-repeat";
    div3.style.backgroundPosition = "center center";
    div3.style.backgroundImage = "url('images/star" + (star >= 3 ? "" : "1") + ".png')";
    div3.style.marginLeft = '3px';
    starDiv.appendChild(div3);

    return starDiv;

}

function showResult() {

    $('#overlay').show();
    $('#end-game-popup').slideDown(2000);
    $('#collage').hide();

    var score = Math.round(getScore() * 200);
    $('#mTitle').text(currentSong.song);
    var star = Math.floor(score / 50); // - 1;

    winAudio.currentTime = 0;
    loseAudio.currentTime = 0;

    star >= 1 ? winAudio.play() : loseAudio.play();

    if (star >= 1) {

        //var newIndex = currentSong.singer.songs.indexOf(currentSong) + 1;
        var newIndex = data.indexOf(currentSong) + 1;

        if (data[newIndex])

            if (data[newIndex].locked == true) {
                data[newIndex].locked = false;
                alert(data[newIndex].song + " unlocked!!!");
                $('#next').show();
                $('#next')[0].nextSong = data[newIndex];
                //$('#next')[0].singer = currentSong.singer;
            } else {
                $('#next').show();
                $('#next')[0].nextSong = data[newIndex];
                //$('#next')[0].singer = currentSong.singer;	
            }

        if (newIndex == data.length) {
            alert('win_game');
        }
    }

    star = createStarBox(star, true);
    $('#starBox').empty();
    $('#starBox').append(star);
    $('#score').text(score);

    $('#bestScore').text('Best: ' + [score > currentSong.hiScore ? score : currentSong.hiScore]);
    currentSong.hiScore = score > currentSong.hiScore ? score : currentSong.hiScore;

    saveData();
}

function next() {

    $('#end-game-popup').hide();
    $('#overlay').hide();

    $('#collage').show();

    currentSong = this.nextSong;
    title.innerHTML = currentSong.song;
    lives = 3;
    $('#visual-stars').text(lives);
    startGame(images, currentSong.difficult);
    $(this).hide();
}

function replay() {
    $('#end-game-popup').hide();
    $('#overlay').hide();

    $('#collage').show();
    lives = 3;
    $('#visual-stars').text(lives);
    startGame(images, currentSong.difficult);
}

function closeGame() {
    $('#end-game-popup').hide();
    $('#overlay').hide();

    $('#collage').hide();
    $('#menu').show();

    initalize();
    delete currentSong.dom;
    currentSong = null;
    pause();

    document.getElementById('help').className = 'Play';
    document.getElementById('test').className = 'Play';
    isTesting = false;
}

function closeInfoPause() {

    $('#info-help-popup').hide();
    $('#grid')[0].style.pointerEvents = '';

}

function openInfoPause(isInfo) {

    $('#info-help-popup').show();
    $('#start-game-popup').hide();

    $('#grid')[0].style.pointerEvents = 'none';

    if (isInfo) {
        $('#infoPanel').show();
        $('#helpPanel').hide();
    } else {
        $('#infoPanel').hide();
        $('#helpPanel').show();
    }

}