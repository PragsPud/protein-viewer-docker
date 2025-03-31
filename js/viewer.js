let viewer;

$(document).ready(function() {
    // Initialize the viewer
    initViewer();
    
    // Load a default protein (myoglobin)
    loadProtein('1mbn');
    
    // Add event listeners
    $("#view-button").on("click", function() {
        loadProtein();
    });
    
    // Allow Enter key to submit
    $("#pdb-id").on("keypress", function(e) {
        if (e.which === 13) { // Enter key
            loadProtein();
        }
    });
});

function initViewer() {
    viewer = $3Dmol.createViewer($("#protein-viewer"), {
        backgroundColor: "white"
    });
}

function loadProtein(pdbId) {
    if (!pdbId) {
        pdbId = $("#pdb-id").val().trim();
    }
    
    if (!pdbId) {
        alert("Please enter a valid PDB ID");
        return;
    }
    
    // Clear any existing viewer
    if (viewer) {
        viewer.clear();
    }
    
    // Show loading indicator
    $("#protein-viewer").html("<p style='text-align:center;padding-top:20px;'>Loading structure " + pdbId + "...</p>");
    
    // Create a new viewer
    initViewer();
    
    // Use 3Dmol.js built-in methods to fetch PDB (handles CORS)
    $3Dmol.download(`pdb:${pdbId}`, viewer, {}, function(model) {
        viewer.setStyle({}, {cartoon: {color: 'spectrum'}});
        viewer.zoomTo();
        viewer.render();
    }, function(error) {
        $("#protein-viewer").html("<p style='text-align:center;padding-top:20px;color:red;'>Error loading structure. Please check the PDB ID and try again.</p>");
        console.error("Error fetching PDB:", error);
    });
}
