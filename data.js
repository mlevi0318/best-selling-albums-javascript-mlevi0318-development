let bestSellingAlbums = [
    {
        artist: "Michael Jackson",
        title: "Thriller",
        year: 1982,
        genres: ["pop", "post-disco", "funk", "rock"],
        sale: 70000000,
    },
    {
        artist: "AC/DC",
        title: "Back in Black",
        year: 1980,
        genres: ["hard rock"],
        sale: 50000000,
    },
    {
        artist: "Whitney Houston",
        title: "The Bodyguard",
        year: 1992,
        genres: ["r&b", "soul", "pop", "soundtrack"],
        sale: 45000000,
    },
    {
        artist: "Pink Floyd",
        title: "The Dark Side of the Moon",
        year: 1973,
        genres: ["progressive rock"],
        sale: 45000000,
    },
    {
        artist: "Eagles",
        title: "Their Greatest Hits (1971 - 1975)",
        year: 1976,
        genres: ["country rock", "soft rock", "folk rock"],
        sale: 44000000,
    },
    {
        artist: "Eagles",
        title: "Hotel California",
        year: 1976,
        genres: ["soft rock"],
        sale: 42000000,
    },
    {
        artist: "Shania Twain",
        title: "Come On Over",
        year: 1997,
        genres: ["country", "pop"],
        sale: 40000000,
    },
    {
        artist: "Fleetwood Mac",
        title: "Rumours",
        year: 1977,
        genres: ["soft rock"],
        sale: 40000000,
    },
];


// DO NOT MODIFY THE CODE ABOVE THIS LINE
// WRITE YOUR CODE BELOW THIS LINE

let averageSale = (bestSellingAlbums[0].sale + bestSellingAlbums[1].sale + bestSellingAlbums[2].sale + bestSellingAlbums[3].sale + bestSellingAlbums[4].sale + bestSellingAlbums[5].sale + bestSellingAlbums[6].sale + bestSellingAlbums[7].sale) / 8;
console.log("The average sale income is: " + averageSale);

let averageAge = ( (2023 - bestSellingAlbums[0].year) + (2023 - bestSellingAlbums[1].year) + (2023 - bestSellingAlbums[2].year) + (2023 - bestSellingAlbums[3].year) + (2023 - bestSellingAlbums[4].year) + (2023 - bestSellingAlbums[5].year) + (2023 - bestSellingAlbums[6].year) + (2023 - bestSellingAlbums[7].year) ) / 8;
console.log("The average age is: " + averageAge);

let newestAlbum = "Come On Over";
console.log(newestAlbum);

let oldestAlbum = "The Dark Side of the Moon";
console.log(oldestAlbum);

const eagleAlbums = [
    {
        artist: "Eagles",
        title: "Their Greatest Hits (1971 - 1975)",
        year: 1976,
        genres: ["country rock", "soft rock", "folk rock"],
        sale: 44000000,
    },
    {
        artist: "Eagles",
        title: "Hotel California",
        year: 1976,
        genres: ["soft rock"],
        sale: 42000000,
    },
];

const albumsOfEagles = {
    sales: eagleAlbums[0].sale + eagleAlbums[1].sale, //két eagle album eladásának összege
    isBothSoftRock: eagleAlbums[0].genres[1] === eagleAlbums[1].genres[0]
};

console.log(albumsOfEagles);


const myFavAlbum = {
    artist: "Red Hot Chili Peppers",
    title: "Californication",
    year: 1999,
    genres: ["alternative rock", "funk,", "punk rock"],
    sale: 15000000
};

bestSellingAlbums[8] = myFavAlbum; //9.elem = 8
console.log(bestSellingAlbums);

bestSellingAlbums[0].iLikeIt = true;
bestSellingAlbums[1].iLikeIt = false;
bestSellingAlbums[2].iLikeIt = true;
bestSellingAlbums[3].iLikeIt = false;
bestSellingAlbums[4].iLikeIt = false;
bestSellingAlbums[5].iLikeIt = true;
bestSellingAlbums[6].iLikeIt = false;
bestSellingAlbums[7].iLikeIt = true;
bestSellingAlbums[8].iLikeIt = true;

console.log(bestSellingAlbums);

// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
	toExport = [
		{name: "averageSale", content: averageSale, type: "number"},
        {name: "averageAge", content: averageAge, type: "number"},
        {name: "newestAlbum", content: newestAlbum, type: "object"},
        {name: "oldestAlbum", content: oldestAlbum, type: "object"},
        {name: "albumsOfEagles", content: albumsOfEagles, type: "object"}
	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport};
