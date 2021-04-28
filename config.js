/**
 * 
 setTimeout(function () {
    sites = [
        'https://instagram.com'
    ];
    for (let i = 0; i < sites.length; i++) {
        window.open(sites[i], "_self");
    }
}, 1000 * 2);


// website lists
const urlList = ['https://www.google.com']

// open the first url and cache the window object reference
const win = window.open(urlList[0], "_self")

// variable for keeping track of array position(urls)
let i = 1;

// create interval with 10seconds delay and keep 
// interval reference to clear the event in future
let int = setInterval(() => {
  // update the location with next array value
  win.location = urlList[i];
  // check value of i and increment, if reached the max value then clear the interval
  if (i++ >= urlList.length) clearInterval(int)
}, 1000)
*/



setTimeout(function () {
    const urlList = ['https://www.google.com'];
    for (let i = 0; i < urlList.length; i++) {
        const win = window.open(urlList[0], "_self")
    }
}, 1000 * 9);
