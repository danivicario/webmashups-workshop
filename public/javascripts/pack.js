const URL = "http://localhost:3000/javascripts/exoplanets.json";
var diameter = 5000;
let planetTextures;

axios
  .get(URL)
  .then(exoplanets => {
    exoplanets = cleanExoplanets(exoplanets.data, 2000);

    var bubble = d3
      .pack()
      .size([diameter, diameter])
      .padding(5);

    var svg = d3
      .select("body")
      .append("svg")
      .attr("width", diameter)
      .attr("height", diameter)
      .attr("class", "bubble");

    exoplanets = { children: exoplanets };

    var root = d3.hierarchy(exoplanets).sum(function(d) {
      return d.size;
    });

    bubble(root);

    var node = svg
      .selectAll(".node")
      .data(root.children)
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", function(d) {
        return "translate(" + d.x + "," + d.y + ")";
      });

    node
      .append("circle")
      .attr("r", function(d) {
        return d.r;
      })
      .style("fill", function(d) {
        return `rgba(${randomInt(100, 255)}, ${randomInt(100, 255)}, ${randomInt(100, 255)}, 1)`;
      });

    node
      .append("text")
      .attr("dy", ".1em")
      .style("text-anchor", "middle")
      .text(function(d) {
        return d.data.name;
      });
  });
