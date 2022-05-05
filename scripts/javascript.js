var today = new Date();
var hourNow = today.getHours();
var greeting;
var wallpaper;

if (hourNow > 18) {
    greeting = 'Good evening!';
    wallpaper = 'evening';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
    wallpaper = 'afternoon';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
    wallpaper = 'morning';
} else {
    greeting = 'Welcome!';
    wallpaper = 'road';
}

document.write('<h3>' + greeting + '</h3>');
document.getElementById('body').style.background = 'URL(images/' + wallpaper + '.jpg) no-repeat center center fixed';