jQuery(document).ready(function($) {
      $("#svgContainer").HTMLSVGconnect({
        stroke: "#000",
        strokeWidth: 8,
        orientation: "auto",
        paths: [
          { start: "#person_1", end: "#person_2", stroke: "#FE2E2E", strokeWidth: 5, orientation: "horizontal"  },
          { start: "#person_1", end: "#person_3", stroke: "#01DF01", strokeWidth: 5, orientation: "horizontal" },
          { start: "#person_4", end: "#person_2", stroke: "#0101DF", strokeWidth: 5, orientation: "horizontal" }
        ]
      });
    });