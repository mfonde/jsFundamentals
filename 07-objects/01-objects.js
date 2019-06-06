/**
 * OBJECTS
 *An object is a data type that consists of key/value pairs. 
 *
 * let name = {
 *      (1)   (2)
 *  key:    value
 *   (3)      (4)    
 * }
 * 1- Name of the object, how its identified
2- All of the data for an object is contained in curly braces
3- this is the name of the specific data inside the object
4- The data name and value are separated by a colon
5- The value of the data. Each key/value pairing ends with a comma 
 */

let netflix = {
    id: 9,
    name: "Super Store",
      season1: {
        seasonInfo: {
          episodeInfo : [
            { episode: 1, episodeName: "Pilot"},
            { episode: 2, episodeName: "Magazine Profile"},
            { episode: 3, episodeName: "Shots and Salsa"},
            { episode: 4, episodeName: "Mannequin"},
            { episode: 5, episodeName: "Shoplifter"}
          ]
        }
      },
      season2: {
        seasonInfo: {
          episodeInfo : [
            { episode: 1, episodeName: "Secret Shopper"},
            { episode: 2, episodeName: "Color Wars"},
            { episode: 3, episodeName: "Wedding Day Sale"},
            { episode: 4, episodeName: "All-Nighter"},
            { episode: 5, episodeName: "Demotion"},
            { episode: 6, episodeName: "Labor"}
          ]
        }
      },
      season3: {}
    };

    // console.log(netflix);
    // console.log(netflix.season2.seasonInfo.episodeInfo)
    // console.log(netflix.season2.seasonInfo.episodeInfo[1].episodeName)

    console.log(netflix.season1.seasonInfo.episodeInfo[2].episode, netflix.season1.seasonInfo.episodeInfo[2].episodeName);
  
  
  
  