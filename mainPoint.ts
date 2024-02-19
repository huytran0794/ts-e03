import Point2D from "./Point2D";

const mainPoint = () => {
  let point = new Point2D();
  console.log(point.x);
  console.log(point.y);

  point.scan();
  point.print();

  //   move
  point.move(0, -1);
  point.print();

  let newPoint = new Point2D(1, 2);

  //   get distance
  let d: number = point.getDistance(newPoint);
  console.log(d);

  // test private method
  point.x = 1;
  point.y = 2;

  // use getter and setter
  point.x = 1;
  point.y = 2;
  console.log(point.x, point.y);
};

mainPoint();
