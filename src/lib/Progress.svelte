<script>
    import { onMount, onDestroy } from 'svelte';
  
    const gridWidth = 50; // number of cells horizontally
    const gridHeight = 5; // number of cells vertically
    const canvasWidth = 500; // total canvas width in px
    const canvasHeight = 45; // total canvas height in px
    const cellWidth = canvasWidth / gridWidth; // individual cell width
    const cellHeight = canvasHeight / gridHeight; // individual cell height
  
    // Create a grid of cells, each with an opacity level
    const grid = Array(gridHeight).fill().map(() => Array(gridWidth).fill(0));
  
    let canvas;
    let ctx;
    let timer;
  
    function drawCell(x, y, color, opacity) {
      ctx.fillStyle = `rgba(${color.r},${color.g},${color.b},${opacity})`;
      ctx.fillRect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
    }
  
    function animate() {
      // Clear the canvas with a #f7f8f8 background
      ctx.fillStyle = '#f7f8f8';
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  
      // Randomly light up cells and decrease the opacity of all cells
      for (let y = 0; y < gridHeight; y++) {
        for (let x = 0; x < gridWidth; x++) {
          if (Math.random() > 0.95) { // Adjust this to control how many cells light up at once.
            grid[y][x] = 1; // Set the opacity of the cell to 1 (fully visible)
          } else if (grid[y][x] > 0) {
            grid[y][x] -= 0.02; // Decrease the opacity of the cell
          }
          drawCell(x, y, {r: 245, g: 222, b: 179}, grid[y][x]);
        }
      }
    }
  
    onMount(() => {
      ctx = canvas.getContext('2d');
  
      // Initial draw
      animate();
  
      // Start the animation
      timer = setInterval(animate, 50); // Adjust this to control the animation speed.
    });
  
    onDestroy(() => {
      clearInterval(timer);
    });
  </script>
  
  <canvas bind:this={canvas} width="{canvasWidth}" height="{canvasHeight}" style="background: #f7f8f8;" />
  