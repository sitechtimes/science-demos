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

function findSoilType(point1, point2, point3) {
  // loops through all the points and checks
  const userPoints = normalizeTernary(point1, point2, point3);
  for (const [soilType, vertices] of Object.entries(soilData)) {
    if (isPointInPolygon(userPoints, vertices)) {
      return [
        `clay composition: ${userPoints[0]}%`,
        `sand composition: ${userPoints[1]}%`,
        ` silt composition: ${userPoints[2]}%`,
        `soil type: ${soilType}`,
      ];
    }
  }
  return null; // Point is not in any soil type
}

export default findSoilType;
