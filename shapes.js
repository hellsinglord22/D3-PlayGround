var dataArray = ['5', '11', '18']; 

var svg = d3.select('body').append('svg')
                                .attr('height', '100%')
                                .attr('width', '100%'); 

var rect = svg.selectAll('rect')
                        .data(dataArray)
                        .enter().append('rect')
                        .attr('x', function(d, i){ return 50 + (i * 25) + 'px'; })
                        .attr('y', function(d, i){ return 400 - (d * 15) + 'px';})
                        .attr('width', '20px')
                        .attr('height', function(d, i){ return (d * 15) + 'px'; });

var label = d3.select('body').append('label')
                                .attr('for', 'new')
                                .html('Enter A New Data: '); 

var textArea = d3.select('body').append('input')
                                .attr('type', 'text')
                                .attr('name', 'new');

var button = d3.select("body").append("button")
                                .html('Click Me')
                                .on('click', addNumberToArray); 

function addNumberToArray(){
        var textAreaInput = textArea.property('value');
        var elementToPush; 
        if (isNaN(textAreaInput)){
                alert('fuck you, we need a number !');
        } else if (textAreaInput == ''){
                alert('Its empty bugger!!');
        } else {
               elementToPush = parseInt(textAreaInput);  
               dataArray.push(elementToPush); 
               console.log('the vale of the array: ', dataArray);
        }
}