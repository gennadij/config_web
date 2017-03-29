jQuery(document).ready(function($) {
      $("#svgContainer").HTMLSVGconnect({
        stroke: "#000",
        strokeWidth: 8,
        orientation: "auto",
        paths: [
          { start: "#person_1", end: "#person_2", strokeWidth: 5, },
          { start: "#person_1", end: "#person_3", strokeWidth: 5, }
        ]
      });
    });