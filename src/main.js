const drawGrid = function(element) {
  const gridWidth = element.innerWidth();
  const gridHeight = element.innerHeight();

  const cellRows = [];
  const cells = [];
  
  console.log(`Width: ${gridWidth} Height: ${gridHeight}`);
  
  for (let i = 0; i < 10; i++) {
    cells.push([]);
    cellRows.push($('<div></div>').width(gridWidth)
      .height(gridHeight / 10)
      .addClass('rowContainer')
      .attr('id', `gridRow${i}`));
    element.append(cellRows[i]);

    for (let j = 0; j < 10; j++) {
      cells[i].push($('<div></div>').width(gridWidth / 10)
        .height(gridHeight / 10)
        .addClass('cell')
        .attr('id', `cell${j}-${i}`)
        .click(() => {
          //Test method, will have to sent shot requests to game engine.
          $(`#cell${j}-${i}`).css('background-color', 'red');
        }));
      cellRows[i].append(cells[i][j]);
    }
  }
};

$(function() {
  const gridContainer = $('#grid');
  drawGrid(gridContainer);
});
