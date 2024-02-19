import Circle from "./Circle";
import Point2D from "./Point2D";

const mainCircle = () => {
  // test circle
  let point = new Point2D();
  console.log("Update point");
  point.scan();
  console.log("After update, point info is: ");
  point.print();
  let newCircle = new Circle(point, 10);
  console.log("Created circle is: ");
  console.log(newCircle);

  // test scan circle
  console.log("Update circle");
  newCircle.scan();

  console.log("Circle info: ");
  // test newCircle
  newCircle.print();
};

mainCircle();
