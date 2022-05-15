//Variables
let userName = "edgarcastillo";
let userMail = "edgar@mail.com";
let userPassword = "12345";
let userProfile = "https://i.pinimg.com/280x280_RS/d7/bc/cb/d7bccb0c86e6f4a031f937e63071331a.jpg";
let numberCollections = 5;
let titleCollection = "aesthetic"
let numberPins = 64;
let collaboratorsCollection = 1;
let imageLink = "https://i.pinimg.com/564x/b2/ae/bc/b2aebc1314799d97187811192391c103.jpg";
let imageSource = "www.twitter.com";
let imageTitle = "Angel on Earth";
let description = "a paint i did yesterday"
let uploader = "Eli";
let following = false;
let followers = 521;
let comments = 3;
let saved = true;
let imageCollection = "ideas";
let favorite = true;  
let note = "Use as phone wallpaper";

//Results
document.writeln(`
<p>Username: ${userName}</p>
<p>Mail: ${userMail}</p>
<p>Number of Collections: ${numberCollections}</p>
<p>Collection Title: ${titleCollection}</p>
<p>Number of Pins: ${numberPins}</p>
<p>Collaborators: ${collaboratorsCollection}</p>
<p>Image Title: ${imageTitle}</p>
<p>Source: ${imageSource}</p>
<p>Description: ${description}</p>
<p>Author: ${uploader}</p>
<p>Following: ${following}</p>
<p>Number of Followers: ${followers}</p>
<p>Comments: ${comments}</p>
<p>Saved Image: ${saved}</p>
<p>Collection for Image: ${imageCollection}</p>
<p>Favorite: ${favorite}</p>
<p>Personal Note: ${note}</p>
`)