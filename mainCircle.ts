import Circle from "./Circle";
import Point2D from "./Point2D";

const mainCircle = () => {
  // test circle
  let point = new Point2D();
  point.scan();
  let newCircle = new Circle(point, 10);
  console.log(newCircle);
  point.x = 5;
  point.y = 100;

  // test scan circle
  newCircle.scan();
  // test newCircle
  newCircle.print();
};

mainCircle();
