function drawChart(data, config) {
  // Get the root element where the visualization will be drawn
  const root = document.getElementById(config.elementId);
  
  // Clear any existing content
  root.innerHTML = '';

  // Create a basic example chart (a simple div with text)
  const chart = document.createElement('div');
  chart.textContent = "Hello, Looker Studio!";
  chart.style.width = "100%";
  chart.style.height = "100%";
  chart.style.backgroundColor = "#f3f4f6";
  chart.style.display = "flex";
  chart.style.alignItems = "center";
  chart.style.justifyContent = "center";

  // Append to the root element
  root.appendChild(chart);
}

// Initialize the Looker Studio visualization
looker.plugins.visualizations.add({
  id: "custom_chart",
  create: function (element, config) {
    element.innerHTML = `<div id="custom-chart-root" style="width:100%;height:100%;"></div>`;
  },
  updateAsync: function (data, element, config, queryResponse, details, done) {
    drawChart(data, { elementId: "custom-chart-root" });
    done();
  }
});
