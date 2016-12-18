var dataArray = [2, 11, 15, 30, 36];
var body = d3.select('body'); 
var svg = body.append('svg').attr('width', '100%').attr('height', '100%'); 

const padding = 20; 
var scale = 1; 
var horizontalStartPoint = 0; 
var verticalStartPoint = 300; 
var radius; 


var circle = svg.selectAll('circle')
                .data(dataArray)
                .enter().append('circle');
circle.attr('cy', verticalStartPoint) .attr('cx',  function (d, i){
            radius = d * scale; 
            center = radius + horizontalStartPoint; 
            horizontalStartPoint += ( 2 * radius ) + padding; 
            return center; 
        })
        .attr('r', function(d) { return d * scale; }); 

function update(scale){
    horizontalStartPoint = 0; 
    circle.transition()
            .duration(2000)
            .delay(function(d, i) { return i * 25;})
            .attr('cx',  function (d, i){
                radius = d * scale; 
                center = radius + horizontalStartPoint; 
                horizontalStartPoint += ( 2 * radius ) + padding; 
                return center; 
            })
            .attr('r', function(d) { return d * scale; });
}

update(5);

