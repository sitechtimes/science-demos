import soilData from "@/components/SoilType/soilData";

function normalizeTernary(a, b, c) {
  const total = a + b + c; // Calculate the sum of the data points
  if (total === 0) {
    // Check if the total is zero to avoid division by zero
    return [0, 0, 0];
  }
  const normalizedPoints = [a, b, c].map((point) =>
    Number(((point / total) * 100).toFixed(2))
  );
  return normalizedPoints;
}

function isPointInPolygon(point, vertices) {
  // checks that the point falls into a given part of plot
  let x = point[0]; // Using clay as x-coordinate
  let y = point[1]; // Using sand as y-coordinate
  let inside = false;
  for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
    // iterates through given sides of range for soil type
    const v1 = vertices[i];
    const v2 = vertices[j];
    // takes vertices of a edge, checks that the point falls between the y coord and x coord of point is less than intersection
    const intersect =
      v1.sand > y !== v2.sand > y &&
      x < ((v2.clay - v1.clay) * (y - v1.sand)) / (v2.sand - v1.sand) + v1.clay;
    if (intersect) inside = !inside;
  }
  return inside;
}

function getSoilTypeDescription(normalizedPoints, soilType) {
  return [
    `clay composition: ${normalizedPoints[0]}%`,
    `sand composition: ${normalizedPoints[1]}%`,
    `silt composition: ${normalizedPoints[2]}%`,
    `soil type: ${soilType}`,
  ];
}

function findSoilType(point1, point2, point3) {
  const normalizedPoints = normalizeTernary(point1, point2, point3);

  // Check if point is in any polygon
  for (const [soilType, vertices] of Object.entries(soilData)) {
    if (isPointInPolygon(normalizedPoints, vertices)) {
      return getSoilTypeDescription(normalizedPoints, soilType);
    } else if (normalizedPoints[1] === 0 && normalizedPoints[2] === 0) {
      // if point is all clay
      return getSoilTypeDescription([100, 0, 0], "clay");
    }
  }

  // If silt is 0, determine soil type based on clay composition because silt is not considered  in isPointinPolygon
  const soilType = [
    // hard coded ranges for just the clay-sand axis
    { range: [0, 10], type: "sand" },
    { range: [10, 15], type: "loamy sand" },
    { range: [15, 20], type: "sandy loam" },
    { range: [20, 35], type: "sandy clay loam" },
    { range: [35, 55], type: "sandy clay" },
    { range: [55, 100], type: "clay" },
  ].find(
    (st) =>
      normalizedPoints[0] >= st.range[0] && normalizedPoints[0] < st.range[1]
  ).type;
  return getSoilTypeDescription(normalizedPoints, soilType);
}

function setChartData(point1, point2, point3) {
  const normalizedPoints = normalizeTernary(
    point1.value,
    point2.value,
    point3.value
  );
  const soilPlot = Object.keys(soilData).map(function (k, i) {
    let pts = soilData[k];
    pts = pts.concat(pts[0]);
    return {
      type: "scatterternary",
      mode: "lines",
      name: k,
      a: pts.map(function (d) {
        return d.clay;
      }),
      b: pts.map(function (d) {
        return d.sand;
      }),
      c: pts.map(function (d) {
        return d.silt;
      }),
      line: { color: "#444" },
      fill: "toself",
      fillcolor: pts[0].color,
      hoveron: "fills+points",
    };
  });
  soilPlot.push({
    type: "scatterternary",
    mode: "markers",
    text: ["your soil type"],
    a: [normalizedPoints[0]],
    b: [normalizedPoints[1]],
    c: [normalizedPoints[2]],
    marker: {
      symbol: 100,
      color: "#fdff",
      size: 20,
      line: { width: 5 },
      symbol: "hexagon-dot",
    },
    hoveron: "fills+points",
  });
  const soilProportion = [
    {
      x: ["your soil"],
      y: [normalizedPoints[1]],
      width: [0.4],
      name: "sand proportion",
      type: "bar",
      marker: { color: "#FFFFFF", line: { width: 2 } },
    },
    {
      x: ["your soil"],
      y: [normalizedPoints[2]],
      width: [0.4],
      name: "silt proportion",
      type: "bar",
      marker: { color: "#C2C5B5", line: { width: 2 } },
    },
    {
      x: ["your soil"],
      y: [normalizedPoints[0]],
      width: [0.4],
      name: "clay proportion",
      type: "bar",
      marker: { color: "#452B1F", line: { width: 2 } },
    },
    {
      x: ["your soil"],
      y: [20],
      width: [0.4],
      name: "water",
      type: "bar",
      marker: { color: "#c4f5ff", line: { width: 2 } },
    },
  ];
  return { soilPlot, soilProportion };
}

export { findSoilType, setChartData };
