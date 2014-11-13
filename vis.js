var redditSvg;
var previousData;

<<<<<<< HEAD
var POLL_SPEED = 1000;

=======
var POLL_SPEED = 2000;
>>>>>>> remotes/origin/gh-pages

function redditVis() {
  // setup a poll requesting data, and make an immediate request
  setInterval(requestData,POLL_SPEED);
  requestData();
<<<<<<< HEAD
   var w = 1400, //width
h = 1400, //height
r = 500, //radius
 
data = [{"label":"one", "value":20},
{"label":"two", "value":50},
{"label":"three", "value":30}];

color = d3.scale.category20c(); //builtin range of colors
  // initial setup only needs to happen once 
  // - we don't want to append multiple svg elements
  redditSvg = d3.select("body")
.append("svg:svg") //create the SVG element inside the <body>
.data([data]) //associate our data with the document
.attr("width", w) //set the width and height of our visualization (these will be attributes of the <svg> tag
.attr("height", h)
.append("svg:g") //make a group to hold our pie chart
.attr("transform", "translate(" + r + "," + r + ")") //move the center of the pie chart from 0, 0 to radius, radius
  var arc = d3.svg.arc() //this will create <path> elements for us using arc data
.outerRadius(r);
 
var pie = d3.layout.pie() //this will create arc data for us given a list of values
.value(function(d) { return d.value; }); //we must tell it out to access the value of each element in our data array
 
var arcs = redditSvg.selectAll("g.slice") //this selects all <g> elements with class slice (there aren't any yet)
.data(pie) //associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties)
.enter() //this will create <g> elements for every "extra" data element that should be associated with a selection. The result is creating a <g> for every object in the data array
.append("svg:g") //create a group to hold each slice (we will have a <path> and a <text> element associated with each slice)
.attr("class", "slice"); //allow us to style things in the slices (like text)
 
arcs.append("svg:path")
.attr("fill", function(d, i) { return color(i); } ) //set the color for each slice to be chosen from the color function defined above
.attr("d", arc); //this creates the actual SVG path using the associated data (pie) with the arc drawing function
 
arcs.append("svg:text") //add a label to each slice
.attr("transform", function(d) { //set the label's origin to the center of the arc
//we have to make sure to set these before calling arc.centroid
d.innerRadius = 0;
d.outerRadius = r;
return "translate(" + arc.centroid(d) + ")"; //this gives us a pair of coordinates like [50, 50]
})
.attr("text-anchor", "middle") //center the text on it's origin
.text(function(d, i) { return data[i].label; }); //get the label from our original data array
=======

  // initial setup only needs to happen once 
  // - we don't want to append multiple svg elements
  redditSvg = d3.select("body")
        .append("svg")
        .attr("width",document.body.clientWidth - 50)
        .attr("height",document.body.clientWidth -50)
>>>>>>> remotes/origin/gh-pages
}

function requestData() {
  // our jsonp url, with a cache-busting query parameter
  d3.jsonp("https://www.reddit.com/.json?jsonp=runVis&noCache=" + Math.random());
}


//////// PLEASE EDIT runVis /////////
/////////////////////////////////////
/////////////////////////////////////

function runVis(data) {
<<<<<<< HEAD
//console.log(data);
d3.select("svg").remove(); 
=======

>>>>>>> remotes/origin/gh-pages
  // d3 never does anything automagical to your data
  // so we'll need to get data into the right format, with the
  // previous values attached
  var formatted = formatRedditData(data,previousData);
<<<<<<< HEAD
var data2 = [];
jQuery.each(formatted, function() {
 data2.push({ 
        "label" : this.score + "-" +this.id ,
        "value"  : this.score
    });
 
});
 var w = 1400, //width
h = 1400, //height
r = 500 //radius
var vis = d3.select("body")
.append("svg:svg") //create the SVG element inside the <body>
.data([data2]) //associate our data with the document
.attr("width", w) //set the width and height of our visualization (these will be attributes of the <svg> tag
.attr("height", h)
.append("svg:g") //make a group to hold our pie chart
.attr("transform", "translate(" + r + "," + r + ")") //move the center of the pie chart from 0, 0 to radius, radius
 
var arc = d3.svg.arc() //this will create <path> elements for us using arc data
.outerRadius(r);
 
var pie = d3.layout.pie() //this will create arc data for us given a list of values
.value(function(d) { return d.value; }); //we must tell it out to access the value of each element in our data array
 
var arcs = vis.selectAll("g.slice") //this selects all <g> elements with class slice (there aren't any yet)
.data(pie) //associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties)
.enter() //this will create <g> elements for every "extra" data element that should be associated with a selection. The result is creating a <g> for every object in the data array
.append("svg:g") //create a group to hold each slice (we will have a <path> and a <text> element associated with each slice)
.attr("class", "slice"); //allow us to style things in the slices (like text)
 
arcs.append("svg:path")
.attr("fill", function(d, i) { return color(i); } ) //set the color for each slice to be chosen from the color function defined above
.attr("d", arc); //this creates the actual SVG path using the associated data (pie) with the arc drawing function
 
arcs.append("svg:text") //add a label to each slice
.attr("transform", function(d) { //set the label's origin to the center of the arc
//we have to make sure to set these before calling arc.centroid
d.innerRadius = 0;
d.outerRadius = r;
 var c = arc.centroid(d);

        return "translate(" + c[0]*1.7 +"," + c[1]*1.7+ ")";
})
.attr("text-anchor", "middle") //center the text on it's origin
.text(function(d, i) { return data2[i].label; }); //get the label from our original data array

  

=======

  // select our stories, pulling in previous ones to update
  // by selecting on the stories' class name
  var stories = redditSvg
     .selectAll("text")
     // the return value of data() is the update context - so the 'stories' var is
     // how we refence the update context from now on
     .data(formatted,function(d) {
       // prints out data in your console id, score, diff from last pulling, text
       
       // console.log(d.id,d.score,d.diff,d.title);

       // use a key function to ensure elements are always bound to the same 
       // story (especially important when data enters/exits)
       return d.id;
     });

  // ENTER context
  stories.enter()
    .append("text")
    .text(function(d){return d.score + " " + d.diff + " " + d.title})
    .attr("y", function(d,i){return 1.5*i + 1 + "em"})
    .style("color","black");

  // UPDATE + ENTER context
  // elements added via enter() will then be available on the update context, so
  // we can set attributes once, for entering and updating elements, here
  stories
    .text(function(d){return d.score + " " + d.diff + " " + d.title})

  // EXIT content
  stories.exit()
    .remove()
>>>>>>> remotes/origin/gh-pages
}


//////// PLEASE EDI runVis() /////////
/////////////////////////////////////
/////////////////////////////////////


function formatRedditData(data) {
  // dig through reddit's data structure to get a flat list of stories
  var formatted = data.data.children.map(function(story) {
    return story.data;
  });
  // make a map of storyId -> previousData
  var previousDataById = (previousData || []).reduce(function(all,d) {
    all[d.id] = d;
    return all;
  },{});
  // for each present story, see if it has a previous value,
  // attach it and calculate the diff
  formatted.forEach(function(d) {
    d.previous = previousDataById[d.id];
    d.diff = 0;
    if(d.previous) {
      d.diff = d.score - d.previous.score;
    }
  });
  // our new data will be the previousData next time
  previousData = formatted;
  return formatted;
}

redditVis();
