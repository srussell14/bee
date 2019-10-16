var introTime = 60 * 300;
var iphoneWidth = 750;
var iphoneHeight = 1294;
var currentPage = 0;

var backgroundLogo;

var blimp;
var blimpX = 790;
var blimpY = 125;
var blimpDirection = -1;

var bee1Xarray = [];
var bee1Yarray = [];

var bee2Xarray = [];
var bee2Yarray = [];

function preload() {
  backgroundLogo = loadImage("assets/background_logo.png");
  blimp = loadImage("assets/blimp.png");
  bee = loadImage("assets/bee.png");
}
function setup() {
  // put setup code here
  createCanvas(iphoneWidth / 2, iphoneHeight / 2.5);
  rectMode(CENTER);
  imageMode(CENTER);
  for(var i=0;i<1;i++){
  bee1Xarray[i]=random(150,150)}
  for(var i=0;i<1;i++){
  bee1Yarray[i]=random(425,425)}

  for(var j=0;j<3;j++){
  bee2Xarray[j]=random(200,200)}
  for(var j=0;j<3;j++){
  bee2Yarray[j]=random(450,450)}

}
function draw() {
    displayThankYouPage();
}
function displayThankYouPage() {
  image(backgroundLogo, width / 2, height / 2, width, height);

  for(var j=0;j<3;j++){
  image(bee, bee2Xarray[j],bee2Yarray[j], width/15, height/23);
  bee2Xarray[j]+= random(-2,2);
  bee2Yarray[j]-= random(-2,2);

}

  for(var i=0;i<1;i++){
  image(bee, bee1Xarray[i],bee1Yarray[i], width/9, height/16);
  bee1Xarray[i]+= random(-2,2);
  bee1Yarray[i]-= random(-2,2);
}
  image(blimp, blimpX, blimpY, 700, 100);
  blimpX = blimpX + blimpDirection
  if (blimpX < -350) {
    blimpDirection = -350
    blimpX = 790;
    blimpDirection = -1;
  }

}
