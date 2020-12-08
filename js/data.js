document.createElement('img').src = 'images/icon.png';
var data = [];
const GAME_EASY = 2,
    GAME_MEDIUM = 3,
    GAME_HARD = 4;

if (localStorage.getItem('data')) {

    data = JSON.parse(localStorage.getItem('data'));

} else defaultData();


function saveData() {
    localStorage.clear();
    localStorage.setItem('data', JSON.stringify1(data));
}

//defaultData();
//////////////////////////////////////////***DEFAULT DATA***/////////////////////////////////////////////////////////////////
function defaultData() {

    data = [
		{
            singer: "Ludwig van Beethoven",
            song: "Für Elise",
            locked: false,
            hiScore: 0,
            difficult: GAME_EASY,
            start: 54,
            end: 60 + 9
        },

        {
            singer: "Dmitri Shostakovich",
            song: "Waltz No. 2",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 19,
            end: 39
        },

        {
            singer: "Johann Sebastian Bach",
            song: "Badinerie",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 39,
            end: 54
        },
		{
            singer: "Antonín Dvořák",
            song: "Slavonic Dance",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 0,
            end: 19
        },

        {
            singer: "Pyotr Ilyich Tchaikovsky",
            song: "The Garland Waltz",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 60 + 9,
            end: 60 + 29
        },

        {
            singer: "Johannes Brahms",
            song: "Hungarian Dance No. 5",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 60 + 29,
            end: 60 + 53
        },

        {
            singer: "Wolfgang Amadeus Mozart",
            song: "Rondo Alla Turca",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 60 + 53,
            end: 2 * 60 + 8
        },

        {
            singer: "Luigi Boccherini",
            song: "Minuet",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 2 * 60 + 8,
            end: 2 * 60 + 24
        },

        {
            singer: "Johann Strauss I",
            song: "Radetzky March",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 2 * 60 + 24,
            end: 2 * 60 + 49
        },

        {
            singer: "Sergei Prokofiev",
            song: "Dance of the Knights",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 2 * 60 + 49,
            end: 3 * 60 + 4
        },

        {
            singer: "Georg Friedrich Händel",
            song: "Sarabande",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 3 * 60 + 4,
            end: 3 * 60 + 24
        },

        {
            singer: "Wolfgang Amadeus Mozart",
            song: "Eine Kleine Nachtmusik",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 3 * 60 + 24,
            end: 3 * 60 + 43
        },

        {
            singer: "Georges Bizet",
            song: "L'Arlesienne",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 3 * 60 + 43,
            end: 3 * 60 + 58
        },

        {
            singer: "Pyotr Ilyich Tchaikovsky",
            song: "Dance Of The Little Swans",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 3 * 60 + 58,
            end: 4 * 60 + 17
        },

        {
            singer: "Nikolai Rimsky-Korsakov",
            song: "Flight of the Bumblebee",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 4 * 60 + 17,
            end: 4 * 60 + 38
        },

        {
            singer: "Franz Schubert",
            song: "Ave Maria",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 4 * 60 + 38,
            end: 4 * 60 + 54
        },

        {
            singer: "Tekla Bądarzewska-Baranowska",
            song: "A Maiden's Prayer",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 4 * 60 + 54,
            end: 5 * 60 + 18
        },

        {
            singer: "Johann Sebastian Bach",
            song: "Air on the G string",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 5 * 60 + 18,
            end: 5 * 60 + 37
        },

        {
            singer: "Frédéric Chopin",
            song: "Grande Valse Brillante",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 5 * 60 + 37,
            end: 5 * 60 + 57
        },

        {
            singer: "Ludwig van Beethoven",
            song: "Piano Concerto No. 5",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 5 * 60 + 57,
            end: 6 * 60 + 15
        },

        {
            singer: "Richard Wagner",
            song: "The Ride of the Valkyries",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 6 * 60 + 15,
            end: 6 * 60 + 35
        },

        {
            singer: "Wolfgang Amadeus Mozart",
            song: "Lacrimosa",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 6 * 60 + 35,
            end: 6 * 60 + 59
        },

        {
            singer: "Maurice Ravel",
            song: "Bolero",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 6 * 60 + 59,
            end: 7 * 60 + 13
        },

        {
            singer: "Claude Debussy",
            song: "Claire De Lune",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 7 * 60 + 13,
            end: 7 * 60 + 33
        },

        {
            singer: "Johannes Brahms",
            song: "Hungarian Dance No. 1",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 7 * 60 + 33,
            end: 7 * 60 + 48
        },

        {
            singer: "Jacques Offenbach",
            song: "Infernal Gallop",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 7 * 60 + 48,
            end: 8 * 60 + 12
        },

        {
            singer: "Johann Pachelbel",
            song: "Canon in D major",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 8 * 60 + 12,
            end: 8 * 60 + 27
        },

        {
            singer: "Pyotr Ilyich Tchaikovsky",
            song: "Dance of the Sugar Plum Fairy",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 8 * 60 + 27,
            end: 8 * 60 + 47
        },

        {
            singer: "Johann Sebastian Bach",
            song: "Toccata and Fugue in D minor",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 8 * 60 + 47,
            end: 9 * 60 + 4
        },

        {
            singer: "Johann Strauss II",
            song: "The Blue Danube",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 9 * 60 + 4,
            end: 9 * 60 + 29
        },

        {
            singer: "Georges Bizet",
            song: "Habanera",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 9 * 60 + 29,
            end: 9 * 60 + 45
        },

        {
            singer: "Giuseppe Verdi",
            song: "La Traviata",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 9 * 60 + 45,
            end: 10 * 60 + 2
        },

        {
            singer: "Sergei Prokofiev",
            song: "Peter and the Wolf",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 10 * 60 + 2,
            end: 10 * 60 + 22
        },

        {
            singer: "Georg Friedrich Händel",
            song: "Hallelujah Chorus",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 10 * 60 + 22,
            end: 10 * 60 + 38
        },

        {
            singer: "Ludwig van Beethoven",
            song: "Moonlight Sonata",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 10 * 60 + 38,
            end: 10 * 60 + 53
        },

        {
            singer: "Camille Saint",
            song: "Saëns The Aquarium",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 10 * 60 + 53,
            end: 11 * 60 + 7
        },

        {
            singer: "Niccolò Paganini",
            song: "Caprice No. 24",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 11 * 60 + 7,
            end: 11 * 60 + 24
        },

        {
            singer: "Carl Orff",
            song: "O Fortuna",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 11 * 60 + 24,
            end: 11 * 60 + 47
        },

        {
            singer: "Frédéric Chopin",
            song: "Revolutionary Etude",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 11 * 60 + 47,
            end: 12 * 60 + 7
        },

        {
            singer: "Johann Sebastian Bach",
            song: "Cello Suite No. 1",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 12 * 60 + 7,
            end: 12 * 60 + 21
        },

        {
            singer: "Pyotr Ilyich Tchaikovsky",
            song: "1812 Overture",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 12 * 60 + 21,
            end: 12 * 60 + 41
        },

        {
            singer: "Bedřich Smetana",
            song: "Vltava",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 12 * 60 + 41,
            end: 13 * 60 + 6
        },

        {
            singer: "Gioachino Rossini",
            song: "William Tell Overture",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 13 * 60 + 6,
            end: 13 * 60 + 26
        },

        {
            singer: "Richard Wagner",
            song: "Wedding March",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 13 * 60 + 26,
            end: 13 * 60 + 41
        },

        {
            singer: "Johannes Brahms",
            song: "Lullaby",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 13 * 60 + 41,
            end: 14 * 60 + 6
        },

        {
            singer: "Franz Schubert",
            song: "Serenade",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 14 * 60 + 6,
            end: 14 * 60 + 21
        },

        {
            singer: "Ion Ivanovici",
            song: "Waves of the Danube",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 14 * 60 + 21,
            end: 14 * 60 + 39
        },

        {
            singer: "Georges Bizet",
            song: "Toreador Song",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 14 * 60 + 39,
            end: 14 * 60 + 55
        },

        {
            singer: "Antonio Vivaldi",
            song: "Spring",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 14 * 60 + 55,
            end: 15 * 60 + 15
        },

        {
            singer: "Nino Rota",
            song: "Vito's Waltz",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 15 * 60 + 15,
            end: 15 * 60 + 32
        },

        {
            singer: "Sergei Rachmaninoff",
            song: "Piano Concerto No. 2",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 15 * 60 + 32,
            end: 15 * 60 + 55
        },

        {
            singer: "Edward Elgar",
            song: "Pomp and Circumstance March",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 15 * 60 + 55,
            end: 16 * 60 + 20
        },

        {
            singer: "Wolfgang Amadeus Mozart",
            song: "The Marriage of Figaro",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 16 * 60 + 20,
            end: 16 * 60 + 40
        },

        {
            singer: "Pyotr Ilyich Tchaikovsky",
            song: "Piano Concerto No. 1",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 16 * 60 + 40,
            end: 17 * 60 + 1
        },

        {
            singer: "Alessandro Marcello",
            song: "Oboe Concerto in D minor",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 17 * 60 + 1,
            end: 17 * 60 + 26
        },

        {
            singer: "Johann Strauss II",
            song: "Tritsch Tratsch Polka",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 17 * 60 + 26,
            end: 17 * 60 + 45
        },

        {
            singer: "Ludwig van Beethoven",
            song: "Symphony No. 9",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 17 * 60 + 45,
            end: 18 * 60 + 5
        },

        {
            singer: "Gabriel Fauré",
            song: "Pavane op. 50",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 18 * 60 + 5,
            end: 18 * 60 + 20
        },

        {
            singer: "Edvard Grieg",
            song: "Morning Mood",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 18 * 60 + 20,
            end: 18 * 60 + 40
        },

        {
            singer: "Franz Liszt",
            song: "Hungarian Rhapsody No. 2",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 18 * 60 + 40,
            end: 19 * 60 + 0
        },

        {
            singer: "Antonio Vivaldi",
            song: "Winter",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 19 * 60 + 0,
            end: 19 * 60 + 25
        },

        {
            singer: "Wolfgang Amadeus Mozart",
            song: "Symphony No. 40",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 19 * 60 + 25,
            end: 19 * 60 + 46
        },

        {
            singer: "Pyotr Ilyich Tchaikovsky",
            song: "Miniature Overture",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 19 * 60 + 46,
            end: 20 * 60 + 9
        },

        {
            singer: "Hector Berlioz",
            song: "Symphonie Fantastique",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 20 * 60 + 9,
            end: 20 * 60 + 32
        },

        {
            singer: "Johann Strauss II",
            song: "Vienna Blood Waltz",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 20 * 60 + 32,
            end: 20 * 60 + 52
        },

        {
            singer: "Felix Mendelssohn",
            song: "Wedding March",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 20 * 60 + 52,
            end: 21 * 60 + 6
        },

        {
            singer: "Frédéric Chopin",
            song: "Funeral March",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 21 * 60 + 6,
            end: 21 * 60 + 26
        },

        {
            singer: "Edvard Grieg",
            song: "Piano Concerto in A Minor",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 21 * 60 + 26,
            end: 21 * 60 + 46
        },

        {
            singer: "Ludwig van Beethoven",
            song: "Symphony No. 5",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 21 * 60 + 46,
            end: 22 * 60 + 1
        },

        {
            singer: "Samuel Barber",
            song: "Agnus Dei",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 22 * 60 + 1,
            end: 22 * 60 + 21
        },

        {
            singer: "Aram Khachaturian",
            song: "Sabre Dance",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 22 * 60 + 21,
            end: 22 * 60 + 46
        },

        {
            singer: "Modest Mussorgsky",
            song: "Night on Bald Mountain",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 22 * 60 + 46,
            end: 23 * 60 + 6
        },

        {
            singer: "Gustav Mahler",
            song: "Symphony No. 5",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 23 * 60 + 6,
            end: 23 * 60 + 31
        },

        {
            singer: "Edvard Grieg",
            song: "In the Hall of the Mountain King",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 23 * 60 + 31,
            end: 23 * 60 + 50
        },

        {
            singer: "Erik Satie",
            song: "Gymnopédie No. 1",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 23 * 60 + 50,
            end: 24 * 60 + 9
        },

        {
            singer: "Jean Sibelius",
            song: "Finlandia",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 24 * 60 + 9,
            end: 24 * 60 + 34
        },

        {
            singer: "Antonín Dvořák",
            song: "New World Symphony",
            locked: true,
            hiScore: 0,
            difficult: GAME_MEDIUM,
            start: 24 * 60 + 34,
            end: 24 * 60 + 25
        }


    ];

    /* data = [

    	{
    	singer: "Strauss Sr. Johann",
    	song : "Radetzky March",
    	locked: false,
    	hiScore: 0,
    	difficult: GAME_EASY,
    	start: 0,
    	end: 8
    	},

    	{
    	singer: "Antonín Dvořák",
    	song : "Symphony No. 9",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 9,
    	end: 22
    	},
    	
    	{
    	singer: "Verdi",
    	song : "Dies Irae",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 23.5,
    	end: 32
    	},
    	
    	{
    	singer: "Mozart",
    	song : "Magic Flute",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 33.5,
    	end: 41
    	},
    	
    	{
    	singer: "Puccini",
    	song : "Nessun Dorma",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 42.5,
    	end: 60
    	},
    	
    	{
    	singer: "Liszt",
    	song : "Liebestraun No. 3",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 61.5,
    	end: 60+17
    	},
    	
    	{
    	singer: "Ricketts",
    	song : "Colonel Bogey March",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 60+18,
    	end: 60+31
    	},
    	
    	{
    	singer: "Delibes",
    	song : "Sylvia: Pizzicato",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 60+33,
    	end: 60+45
    	},
    	
    	{
    	singer: "Beethoven",
    	song : "Symphony No. 7: II",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 60+46,
    	end: 120.5
    	},
    	
    	{
    	singer: "Mozart",
    	song : "Piano Concereto No. 21",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 120+1.5,
    	end: 120+9.5
    	},
    	
    	{
    	singer: "Prokofiev",
    	song : "Romeo And Juliet",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 120+11,
    	end: 120+22
    	},
    	
    	{
    	singer: "Handel",
    	song : "Water Music: Alla Hornpipe",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 120+22.5,
    	end: 120+31.5
    	},
    	
    	{
    	singer: "Strauss",
    	song : "Tritsch-Tratsch Polka",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 120+32,
    	end: 120+43.5
    	},
    	
    	{
    	singer: "Mozart",
    	song : "Requiem: Lacrimosa",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 120+44,
    	end: 120+54.5
    	},
    	
    	{
    	singer: "Verdi",
    	song : "II Trovatore: Anvil Chorus",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 120+55.3,
    	end: 180+3.2
    	},
    	
    	{
    	singer: "Sousa",
    	song : "The Washington Post",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 180+3.5,
    	end: 180+14
    	},
    	
    	{
    	singer: "Holst",
    	song : "Planets: Mars, The Bringer Of War",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 180+14.5,
    	end: 180+36
    	},
    	
    	{
    	singer: "Rossini",
    	song : "Barber Of Seville",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 180+37,
    	end: 180+52.5
    	},
    	
    	{
    	singer: "Mozart",
    	song : "Symphony No. 40",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 180+53.3,
    	end: 240+0.4
    	},
    	
    	{
    	singer: "Tchaikovsky",
    	song : "Swan Lake",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 240+1.3,
    	end: 240+22.5
    	},
    	
    	{
    	singer: "Saint-Saëns",
    	song : "Carnival Of The Animals",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 240+23.5,
    	end: 240+30.5
    	},
    	
    	{
    	singer: "Vivaldi",
    	song : "Four Seasons: Winter",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 240+32,
    	end: 240+42
    	},
    	
    	{
    	singer: "Waldteufel",
    	song : "Skater's Waltz",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 240+43,
    	end: 240+53
    	},
    	
    	{
    	singer: "Bach",
    	song : "Bourrée",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 240+54,
    	end: 240+59.5
    	},
    	
    	{
    	singer: "Supeé",
    	song : "Light Cavalry Overture",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 300+01,
    	end: 300+7.7
    	},
    	
    	{
    	singer: "Mozart",
    	song : "Requiem: Dies Irae 2",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 300+8,
    	end: 300+15
    	},
    	
    	{
    	singer: "Tchaikovsky",
    	song : "Nutcracker: March",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 300+16,
    	end: 300+23.5
    	},
    	
    	{
    	singer: "Grieg",
    	song : "Piano Concereto",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 300+24,
    	end: 300+31.7
    	},
    	
    	{
    	singer: "Saint-Saëns",
    	song : "Carnival Of The Animals: Aquarium",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 300+32,
    	end: 300+48.5
    	},
    	
    	{
    	singer: "Jenkins",
    	song : "Palladio: Allegretto",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 300+49,
    	end: 300+58
    	},
    	
    	{
    	singer: "Verdi",
    	song : "Rigoletto: La Donna È Mobile",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 300+58.5,
    	end: 360+8
    	},
    	
    	{
    	singer: "Tchaikovsky",
    	song : "Romeo And Juliet Fantasy Overture",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 360+8.5,
    	end: 360+16
    	},
    	
    	{
    	singer: "Prokofiev",
    	song : "Peter And The Wolf: The Story Begins",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 360+17,
    	end: 360+24.5
    	},
    		
    	{
    	singer: "Bach",
    	song : "Branderburg Concereto No. 3",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 360+25,
    	end: 360+36.4
    	},
    	
    	{
    	singer: "Tchaikovsky",
    	song : "Nutcracker: Tea(Chinese Dance)",
    	locked: true,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 360+37.5,
    	end: 360+46.0
    	},


    	{
    	singer: "Wire",
    	song : "Classical Top 100",
    	locked: false,
    	hiScore: 0,
    	difficult: GAME_MEDIUM,
    	start: 0,
    	end: 1199.99425
    	}
    ] */

}
////////////////////////////////////////////////////////Plugins/////////////////////////////////////////////////////////////
JSON.stringify1 = function(obj, replacer, indent) {
    var printedObjects = [];
    var printedObjectKeys = [];

    function printOnceReplacer(key, value) {
        if (printedObjects.length > 2000) { // browsers will not print more than 20K, I don't see the point to allow 2K.. algorithm will not be fast anyway if we have too many objects
            return 'object too long';
        }
        var printedObjIndex = false;
        printedObjects.forEach(function(obj, index) {
            if (obj === value) {
                printedObjIndex = index;
            }
        });

        if (key == '') { //root element
            printedObjects.push(obj);
            printedObjectKeys.push("root");
            return value;
        } else if (printedObjIndex + "" != "false" && typeof(value) == "object") {
            if (printedObjectKeys[printedObjIndex] == "root") {
                return "(pointer to root)";
            } else {
                return "(see " + ((!!value && !!value.constructor) ? value.constructor.name.toLowerCase() : typeof(value)) + " with key " + printedObjectKeys[printedObjIndex] + ")";
            }
        } else {

            var qualifiedKey = key || "(empty key)";
            printedObjects.push(value);
            printedObjectKeys.push(qualifiedKey);
            if (replacer) {
                return replacer(key, value);
            } else {
                return value;
            }
        }
    }
    return JSON.stringify(obj, printOnceReplacer, indent);
};


/* When the openFullscreen() function is executed, open the video in fullscreen.
Note that we must include prefixes for different browsers, as they don't support the requestFullscreen method yet */
function openFullscreen(elem) {
    if (!elem) elem = document.body;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

Math.avg = function(a, b) {
    return (a + b) / 2
};

window.mobileAndTabletcheck = function() {
    var check = false;
    (function(a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};
var isMobile = mobileAndTabletcheck();
//////////////////////////////////Load game resources/////////////////////////////////////////////////

var defaultResources = {
    images: [
        'images/background0.jpg', 'images/background1.jpg', 'images/background2.jpg', 'images/bg.jpg', 'images/button.png',
        'images/icon.png', 'images/music icon.png', 'images/playButton.png', 'images/playButton1.png', 'images/star.png', 'images/star1.png',
        'images/locked.png',
        'images/notes/note1.png', 'images/notes/note2.png', 'images/notes/note3.png', 'images/notes/note4.png', 'images/notes/note5.png'
    ],
    audios: [
        'images/win.mp3', 'images/lose.mp3'
    ]
};


function loadData() {

    var a = document.createElement('div');
    a.className = 'loadPanel';

    var b = document.createElement('img');
    b.style.height = '50%';
    b.src = 'images/icon.png';

    var c = document.createElement('progress');
    c.value = 0;
    c.max = getCount();

    a.appendChild(b);
    a.appendChild(c);
    document.body.appendChild(a);
    document.body.removeAttribute('hidden');
    loadResource(c);

}

function getCount() {
    var count = 1; //singers.length;
    count += defaultResources.images.length + defaultResources.audios.length;
    //count += data.length;
    /* for(var i = 0; i<= singers.length-1; i++){
    	count += singers[i].songs.length;
    	} */
    return count;
}

function loadResource(a) {

    var audio = document.createElement('audio');
    audio.src = 'data/songs.mp3';
    audio.oncanplaythrough = function() {
        a.value++;
        if (a.value == a.max) {
            a.parentElement.style.display = 'none';
            $('#start-game-btn').click();
        }
    }
    audio.onerror = function() {
        a.parentElement.innerText = 'Error loading data';
    }

    for (var i = 0; i <= defaultResources.images.length - 1; i++) {
        var img = document.createElement('img');
        img.src = defaultResources.images[i];
        img.onload = function() {
            a.value++;
            if (a.value == a.max) {
                a.parentElement.style.display = 'none';
                $('#start-game-btn').click();
            }
        }
        img.onerror = function() {
            a.parentElement.innerText = 'Error loading data';
        };
    }

    for (var i = 0; i <= defaultResources.audios.length - 1; i++) {
        var audio = document.createElement('audio');
        audio.src = defaultResources.audios[i];
        audio.oncanplaythrough = function() {
            a.value++;
            if (a.value == a.max) {
                a.parentElement.style.display = 'none';
                $('#start-game-btn').click();
            }
        }
        audio.onerror = function() {
            a.parentElement.innerText = 'Error loading data';
        }
    }

    /* for(var i = 0; i<= data.length-1; i++){
    	
    	var img = document.createElement('img');
    	img.src = singers[i].img();
    	img.onload = function(){a.value++;if(a.value == a.max)a.parentElement.style.display = 'none';}
    	img.onerror = function(){a.parentElement.innerText = 'Error loading data';};
    		for(var ii = 0; ii<= singers[i].songs.length-1; ii++){
    			var audio = document.createElement('audio');
    			audio.src = singers[i].url() + singers[i].songs[ii].src;
    			audio.oncanplaythrough = function(){a.value++;if(a.value == a.max)a.parentElement.style.display = 'none';}
    			audio.onerror = function(){a.parentElement.innerText = 'Error loading data';}
    		}
    } */

}

function t() {
    defaultData();
    for (var i in data) data[i].locked = false;
    initalize();
}