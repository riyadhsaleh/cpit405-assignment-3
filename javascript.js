// Step 1: Images data
var images = [
    {
        name: "home",
        likes: 20,
        dateUploaded: "23 March 2018",
        src:"tt22.jpg"
    },
    {
        name: "black",
        likes: 50,
        dateUploaded: "22 March 2018",
        src:"tt2.5.jpg"
    },
	{
        name: "office",
        likes: 22,
        dateUploaded: "26 March 2018",
        src:"tt2.2.jpg"
    },
	{
        name: "living room",
        likes: 10,
        dateUploaded: "15 March 2018",
        src:"tt2.1.jpg"
    },
	{
        name: "room",
        likes: 30,
        dateUploaded: "11 December 2018",
        src:"tt2.3.jpg"
    },
	{
        name: "light room",
        likes: 60,
        dateUploaded: "9 November 2018",
        src:"tt2.4.jpg"
    },
	{
        name: "villa",
        likes: 15,
        dateUploaded: "15 March 2018",
        src:"tt2.jpg"
    }
]

// Step 2: Generate the HTML Page using the DOM API
/*
< ul >
    <li>
       <img src="images/black-cat.png" alt="Black Cat"/>
    </li>
    <li></li>
</ul >
*/
// use the DOM API
var ulElem = document.getElementById("list");
for (var i=0; i<images.length; i++){
var liElem = document.createElement("li");
var imgElem = document.createElement("img");
imgElem.src = images[i].src;
liElem.appendChild(imgElem);
ulElem.appendChild(liElem);
}
// Step 3: Handle mouse events
// When the user changes the drop down menu item, do:
// 1. Sort your array (images) by the selected key
function sortElements() {
	var list = document.getElementById("sort");
	
	if(list.value != "empty"){
	if(list.value == "like")
	images.sort(like);
	if(list.value == "name")
	images.sort(name);
	if(list.value == "date")
	images.sort(date);
	
	display();
	}
	
	
}

function like(a, b) {
    return b.likes - a.likes;
}

function name(a, b) {
    var titleA = a.name.toLowerCase(), titleB = b.name.toLowerCase();
    if (titleA < titleB) return -1;
    if (titleA > titleB) return 1;
    return 0;
}

function date(a, b) {
    var dateA = new Date(a.dateUploaded), dateB = new Date(b.dateUploaded);
    return dateB - dateA;
}

function display(){
var ulElem = document.getElementById("list");
for (var i=0; i<images.length; i++){
var liElem = document.createElement("li");
var imgElem = document.createElement("img");
imgElem.src = images[i].src;
liElem.appendChild(imgElem);
ulElem.replaceChild(liElem, ulElem.children[i]);
}
}