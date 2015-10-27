const RADIUS = 0.5;

const sliceyHelpers = {
  QUARTER: Math.PI / 2,
  HALF: Math.PI,
  ROUND: Math.PI * 2,

  getPointX: (angle) => RADIUS * Math.cos(angle),

  getPointY: (angle) => RADIUS * Math.sin(angle),
};

export default sliceyHelpers;
