var musicPuzzle = {
    stepCount: 0,
    startGame: function(images, gridSize) {
        //console.log(gridSize);
        this.setImage(images, gridSize);
        //$('#playPanel').show();
        $('#sortable').randomize();
        this.enableSwapping('#sortable li');
        this.stepCount = 0;

        //start ad
        //ad4game_html5_sdk.setAdBanner("10249");
        //ad4game_html5_sdk.init();
        //ad4game_html5_sdk.isMobile(isMobile);
    },
    enableSwapping: function(elem) {
        $(elem).draggable({
            snap: '#droppable',
            snapMode: 'outer',
            revert: "invalid",
            helper: "clone",
            start: function(event, ui) {

                if (isPlaying == true) {

                    //console.log(indexElement);
                    if (isTesting) return false;

                    if (indexElement) {
                        indexElement.nextSibling.style.display = "none";
                        indexElement.style.display = "";
                    }
                    pause();

                }

                ui.helper.context.style.backgroundImageOld = ui.helper.context.style.backgroundImage;
                ui.helper.context.style.backgroundImage = 'none';
                $(ui.helper.context.children[0]).hide();

                ui.helper[0].style.opacity = '0.9';
                $(ui.helper[0]).children().hide();

            },
            /* drag: function (event, ui) {}, */
            stop: function(event, ui) {

                ui.helper.context.style.backgroundImage = ui.helper[0].style.backgroundImage;
                $(ui.helper.context.children[0]).show();

            }

        });

        $(elem).droppable({

            over: function(event, ui) {
                $(this).css('borderStyle', 'dashed');
            },
            out: function(event, ui) {
                $(this).css('borderStyle', '');
            },
            drop: function(event, ui) {

                $('#collage #sortable li').css('borderStyle', '');

                /* if(isPlaying == true){
                	
                	//console.log(indexElement);
                	if(isTesting)return false;
                	
                	if(indexElement){
                	indexElement.nextSibling.style.display = "none";
                	indexElement.style.display = "";
                	}
                	pause();
                	
                } */

                var $dragElem = $(ui.draggable).clone().replaceAll(this);
                $(this).replaceAll(ui.draggable);


                $dragElem[0].style.backgroundImage = $(ui.draggable)[0].style.backgroundImageOld;
                $($dragElem[0].children[0]).show();

                initialize($dragElem[0].children[0]);

                $dragElem[0].onclick = function() {
                    if (!isTesting) this.firstChild.click()
                };
                $dragElem[0].ontouch = $dragElem[0].onclick;

                musicPuzzle.stepCount++;
                // $('.stepCount').text(musicPuzzle.stepCount);
                $('#visual-moves').text(musicPuzzle.stepCount);

                musicPuzzle.enableSwapping(this);
                musicPuzzle.enableSwapping($dragElem);
            }
        });
    },

    setImage: function(images, gridSize) {
        //console.log(gridSize);
        gridSize = gridSize || 8; // If gridSize is null or not passed, default it as 4.
        //console.log(gridSize);
        var percentage = 100 / (gridSize - 1);
        var image = images[Math.floor(Math.random() * images.length)];
        //$('#imgTitle').html(image.title);
        //$('#actualImage').attr('src', image.src);
        $('#sortable').empty();
        for (var i = 0; i < gridSize * gridSize; i++) {
            var xpos = (percentage * (i % gridSize)) + '%';
            var ypos = (percentage * Math.floor(i / gridSize)) + '%';

            var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

            var li = $('<li class="item" data-value="' + (i) + '"></li>').css({
                'background-image': 'url(' + image.src + ') ,url("images/bg.jpg")',
                'background-position': [100 / (gridSize * gridSize)] * i + '%' + ' ' + '0px',
                'background-size': 'cover',
                'width': w > h ? '25vh' : '25vw',
                'height': w > h ? '25vh' : '25vw'
                //'background-size': (gridSize * 100) + '%'
                //'background-position': xpos + ' ' + ypos  
                //'width': 'calc(100% * (1/'+gridSize+'))'
                //'height': 700 / gridSize

            });

            li[0].onclick = function() {
                if (!isTesting) this.firstChild.click()
            };
            li[0].ontouch = li[0].onclick;

            ////////////////////////////////li item for set ....
            var button = document.createElement('button');
            //button.innerHTML = 'play';
            li.append(button);

            initialize(button);

            var progress = document.createElement('progress');
            progress.style.width = "100%";
            progress.value = 0;
            progress.style.display = "none";
            li.append(progress);

            //////////////////////////////////
            $('#sortable').append(li);
        }
        $('#sortable').randomize();
    }
};

function isSorted(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] != i)
            return false;
    }
    return true;
}
$.fn.randomize = function(selector) {
    var $elems = selector ? $(this).find(selector) : $(this).children(),
        $parents = $elems.parent();

    $parents.each(function() {
        $(this).children(selector).sort(function() {
            return Math.round(Math.random()) - 0.5;
        }).remove().appendTo(this);
    });
    return this;
};


function initialize(button) {

    button.ontouchstart = button.onclick;
    button.onclick = function() {
        if (isPlaying == true) {

            pause();

            if (indexElement) {
                indexElement.nextSibling.style.display = "none";
                indexElement.style.display = "";
            }

        }

        var self = button;
        self.style.display = "none";
        self.nextSibling.style.display = "";
        self.nextSibling.value = 0;

        var index = Number($(self.parentElement).attr('data-value'));
        indexElement = self;
        var gridSizeS = gridSize * gridSize;

        /* 	var startTime = (sound.duration/gridSizeS) * index;
        	var endTime =  (sound.duration/gridSizeS) * (index+1);
        	var duration = endTime - startTime;
        	
        	sound.currentTime = startTime; */
        var dur = sound.duration;
        var start = currentSong.start;
        var end = currentSong.end;
        var duration = end - start;

        var startTime = start + (duration / gridSizeS) * index;
        var endTime = start + (duration / gridSizeS) * (index + 1);
        var duration = endTime - startTime;

        sound.currentTime = startTime;

        play();

        //if(isTesting == true){self.parentElement.style.outline = "3px "+[(index == $(self.parentElement).index() )?"greenyellow":"red"]+" ridge";self.parentElement.style.outlineOffset = "-3px";}
        if (isTesting == true) {
            self.parentElement.style.borderColor = [(index == $(self.parentElement).index()) ? "greenyellow" : "red"];
        }

        sound.ontimeupdate = function() {
            if (document.getElementById('help').className == 'Stop') {

                if (sound.currentTime >= currentSong.end) pause();
                return false;

            }

            if (sound.currentTime < endTime) {
                self.nextSibling.value = (sound.currentTime - startTime) / duration;
            } else {
                pause();

                if (isTesting == false) {
                    self.style.display = "";
                }
                self.nextSibling.style.display = "none";

                if (isTesting == true) {

                    if (self.parentElement.nextSibling) {
                        self.parentElement.nextSibling.children[0].click();
                    } else {
                        isTesting = false;
                        //$('#test').toggleClass('Play');
                        document.getElementById('test').className = 'Play';
                        timer();
                        $('#collage #sortable li button').css('display', '');

                        win();
                    }
                }
            }

        }
    }


}

function test() {

    if (document.getElementById('test').className == 'Stop') {

        $('#collage #sortable li').css('borderColor', '');
        $('#collage #sortable li progress').css('display', 'none');
        pause();

        //$('#test').toggleClass('Play');
        document.getElementById('test').className = 'Play';
        timer();

        $('#sortable > li').each(function(i, el) {
            //el.style.outline = "3px "+[( Number($(el).attr('data-value')) == $(el).index() )?"greenyellow":"red"]+" ridge";
            //el.style.outlineOffset = "-3px";
            el.style.borderColor = [(Number($(el).attr('data-value')) == $(el).index()) ? "greenyellow" : "red"];
        })
        $('#collage #sortable li button').css('display', '');

        win();

        isTesting = false;
        return false;
    }

    isTesting = true;
    document.getElementById('test').className = 'Stop';
    clearTimeout(t);
    $('#collage #sortable li').css('borderColor', '');
    $('#sortable')[0].children[0].children[0].click();
    $('#collage #sortable li button').css('display', 'none');

}


function win() {

    currentList = $('#sortable > li').map(function(i, el) {
        return $(el).attr('data-value');
    });
    if (isSorted(currentList)) {
        //alert('MIQ = '+getScore()*200);
        //$('#collage #sortable').hide();
        clearTimeout(t);
        showResult();
    } else {
        lives--;
        $('#visual-stars').text(lives);
        if (lives <= 0) showResult();

    }

}

function pause() {

    sound.pause();
    //sound.currentTime = 0;
    isPlaying = false;


}

function play() {

    sound.play();
    isPlaying = true;

}

function help() {

    if (this.className == 'Play') {

        if (isPlaying == false && isTesting == false) {

            this.className = 'Stop';
            sound.currentTime = currentSong.start;
            play();

        }

    } else {

        this.className = 'Play';
        pause();

    }
}


function startGame(images, gridS) {

    if (sound) pause();
    //loadSound(src);
    musicPuzzle.startGame(images, gridSize = gridS);
    resetTimer();
    resetStepCount();
    $('#collage #sortable').show();

}

function resetStepCount() {
    musicPuzzle.stepCount = 0;
    //$('.stepCount').text(musicPuzzle.stepCount);
    $('#visual-moves').text(musicPuzzle.stepCount);
}

function resetTimer() {
    clearTimeout(t);
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer();
}

function loadSound(src) {
    if (!src) src = 'data/songs.mp3';
    sound = new Audio(src);
    //title.innerHTML = sound.src.substring(sound.src.lastIndexOf('/')+1,sound.src.lastIndexOf('.'));
    sound.onpause = function() {
        // console.log(sound.currentTime);
        if (document.getElementById('help').className == 'Stop') document.getElementById('help').className = 'Play';
    }
    sound.onended = function() {
        isPlaying = false
    };

    sound.ontimeupdate = function() {
        if (document.getElementById('help').className == 'Stop') {

            if (sound.currentTime >= currentSong.end) pause();
            return false;

        }
    }
}

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    //(hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    var time = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    if (hours > 0) time = 'more than hour';
    //h1.textContent = time;
    $('#visual-timer').text(time);

    timer();
}

function timer() {
    t = setTimeout(add, 1000);
}

function getTime() {
    return (hours * 60 * 60) + (minutes * 60) + (seconds);
}

function getSteps() {
    return musicPuzzle.stepCount + 1;
}

function getScore() {

    var mcoef = 3 * (currentSong.end - currentSong.start);
    var score = 0;

    currentList = $('#sortable > li').map(function(i, el) {
        return $(el).attr('data-value');
    });

    if (isSorted(currentList)) {

        /* var tscore = 1 - getTime()/x;
        if(tscore<=0)tscore = 0.1;
        if(tscore>1)tscore = 1;
        
        var sscore = 1 - getSteps()/(gridSize*gridSize*2);
        if(sscore<=0)sscore = 0.1;
        if(sscore>1)sscore = 1;
        
        score = tscore+sscore/2;
        
        console.log(tscore)
        console.log(sscore);
        console.log(score); */

        var score = 200 + mcoef - getTime();
        var steps = Math.round(getSteps() / 3) * -1;
        score += steps;
        score /= 200;
    }

    if (score < 0) score = 0;
    if (score > 1) score = 1;

    return score;
}

$(window).resize(function() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    $('#collage #sortable li').css({
        'width': w > h ? '25vh' : '25vw',
        'height': w > h ? '25vh' : '25vw'
    });
});

$(window).on("orientationchange", function(event) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    $('#collage #sortable li').css({
        'width': w > h ? '25vh' : '25vw',
        'height': w > h ? '25vh' : '25vw'
    });
});