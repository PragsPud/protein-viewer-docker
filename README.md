# 3D Protein Structure Viewer (Docker Implementation)
Docker implementation of a tool to visualize protein structures in 3D by simply entering a PDB ID

The main branch contains the complete Docker implementation for containerized deployment and the gh-pages branch is the static page version of the same tool. Both versions provide identical functionality for 3D protein structure visualization. The static version demo can be accessed [here.](https://pragspud.github.io/protein-viewer-docker/)

## Features

- Simple, intuitive interface
- Real-time 3D visualization of protein structures
- Works with any valid PDB ID from the Protein Data Bank
- Interactive viewing with mouse/touch controls:
  - Rotate the structure by dragging
  - Zoom with scroll/pinch gestures
  - Pan by right-click drag
- Automatically fetches structure data directly from PDB
- Spectrum colouring for better visualization

## Docker Version

For containerized deployment:

### Clone the repository
`git clone https://github.com/PragsPud/protein-viewer.git` 

`cd protein-viewer`

### Build the Docker image
`docker build -t protein-viewer .`

### Run the container
`docker run -p 8080:8080 protein-viewer`

### Then visit http://localhost:8080 in your browser

## GitHub Pages

For immediate use without any installation:

1. Visit the [demo](https://pragspud.github.io/protein-viewer-docker/)
2. Enter a valid PDB ID in the input field (default: 1mbn)
3. Click "View Structure" or press Enter
4. Interact with the 3D model using mouse controls

## Credits

- Protein structure data provided by [RCSB Protein Data Bank](https://www.rcsb.org/)
- Visualization powered by [3Dmol.js](https://3dmol.csb.pitt.edu/)

## License

MIT License - See LICENSE file for details
