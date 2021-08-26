SCRABBLE - TWITTER

const tiles = "ai gnm icodddd";
const message = "i am codddding";

const scrabble = (tiles, message) => {
    let tilesHash = {};
    let messageHash = {};

    let tilesArray = tiles.split("");
    let messageArray = message.split("");

    let tilesArray = [...tiles];
    let messageArray = [...message];

    tilesArray.forEach((tile) => tilesHash[tile] ? tilesHash[tile]++ : tilesHash[tile] = 1);

    messageArray.forEach((letter) => tilesHash[letter] ? tilesHash[letter]-- : false);

    messageArray.forEach((letter) => messageHash[letter] ? messageHash[letter]++ : messageHash[letter] = 1);

    let resultArray = messageArray.map((letter) => messageHash[letter] <= tilesHash[letter] ? true : false);

    let messageHashValues = Object.values(messageHash);
    let reducedMessageHashValues = messageHashValues.reduce((a,b) => a + b);

    let tilesHashValues = Object.values(tilesHash);
    let reducedTilesHashValues = tilesHashValues.reduce((a,b) => a + b);

    //   console.log("TILES ARRAY: ", tilesArray);
    //   console.log("MESSAGE ARRAY: ", messageArray);
    //   console.log("TILES HASH: ", tilesHash);
    //   console.log("MESSAGE HASH: ", messageHash);
    //   console.log("MESSAGE HASH VALUES: ", messageHashValues);
    //   console.log("TILES HASH VALUES: ", tilesHashValues);
    //   console.log("REDUCED MESSAGE HASH VALUES: ", reducedMessageHashValues);
    //   console.log("REDUCED TILES HASH VALUES: ", reducedTilesHashValues);
    //   console.log("RESULT ARRAY: ", resultArray);
    //   console.log("INCLUDES FALSE ?: ",resultArray.includes(false));

    return resultArray.includes(false) ? false : true;
};

console.log(scrabble(tiles,message));