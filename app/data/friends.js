//a couple of dummy users to "seed" the app

var buddiesArray = [
    {
        name: "Jane",
        photo: "https://www.nasa.gov/images/content/174173main_aries-young-330.jpg",
        scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        totalScore: 30
    },
    {
        name: "John",
        photo: "https://www.cdc.gov/importation/images/cat.jpg",
        scores: [1, 1, 1, 4, 5, 1, 1, 1, 1, 1],
        totalScore: 17
    }, 
    {
        name: "Cheery", 
        photo: "https://www.fda.gov/ucm/groups/fdagov-public/documents/image/ucm188890.gif", 
        scores: [5, 5, 4, 4, 5, 5, 5, 5, 5, 5], 
        totalScore: 48
    }
]

// export the array
module.exports = buddiesArray;
