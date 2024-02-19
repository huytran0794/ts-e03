import { question } from "readline-sync";
import chalk from "chalk";
import Point2D from "./Point2D";
import Circle from "./Circle";

class Program {
  private point: Point2D;
  private circle: Circle;

  constructor() {
    this.point = new Point2D(0, 0);
    this.circle = new Circle(this.point, 1);
  }

  private menu() {
    let menu = `
    1. Nhập tọa độ x, y của 1 điểm
    2. Di chuyển tọa độ 1 điểm
    3. Tính khoảng cách 2 điểm
    4. In ra thông tin tọa độ 1 điểm
    5. Tạo ra 1 hình tròn
    6. Tính diện tích hình tròn
    7. Tính chu vi hình tròn
    8. Di chuyển tâm hình tròn
    9. In ra thông tin về hình tròn

    Press 0 to exit
    `;
    console.log(menu);
  }

  public run() {
    let choice: number = 0;
    do {
      this.menu();
      choice = Number(question("Chọn chức năng (Nhập số 0 để dùng): "));
      console.clear();
      switch (choice) {
        case 0:
          console.log(chalk.red("Đã thoát chương trình"));
          break;
        case 1:
          this.point.scan();
          break;
        case 2:
          let moveX = Number(question("Nhập số x để di chuyển: "));
          let moveY = Number(question("Nhập số y để di chuyển: "));
          this.point.move(moveX, moveY);
          console.log(chalk.green("Đã di chuyển điểm tới tọa độ: "));
          this.point.print();
          break;
        case 3:
          console.log("Nhập thông tin điểm thứ 2: ");
          let newPoint = new Point2D(0, 0);
          newPoint.scan();
          console.log(chalk.green("Khoảng cách 2 điểm"));
          let d = this.point.getDistance(newPoint);
          console.log(d);
          break;
        case 4:
          console.log(chalk.green("Thông tin tọa độ 1 điểm"));
          this.point.print();
          break;
        case 5:
          console.log(chalk.green("Tọa độ tâm hình tròn: "));
          let newCircle = new Circle(this.point, 1);
          newCircle.scan();
          console.log(chalk.green("Thông tin hình tròn mới tạo: "));
          newCircle.print();
          break;
        case 6:
          console.log(chalk.green("Tính diện tích hình tròn: "));
          this.circle.scan();
          let area = this.circle.getArea();
          console.log(`Diện tích: ${area}`);
          break;
        case 7:
          console.log(chalk.green("Tính chu vi hình tròn: "));
          this.circle.scan();
          let p = this.circle.getPerimeter();
          console.log(`Chu vi: ${p}`);
          break;
        case 8:
          console.log(chalk.green("Di chuyển tâm hình tròn: "));
          moveX = Number(question("Nhập số x để di chuyển: "));
          moveY = Number(question("Nhập số y để di chuyển: "));
          this.circle.move(moveX, moveY);
          console.log("Thông tin hình tròn sau khi dời tâm");
          this.circle.print();
          break;
        case 9:
          console.log(chalk.green("Thông tin hình tròn: "));
          this.circle.print();
        default:
          console.log(chalk.red("Chức năng không tồn tại"));
          break;
      }
    } while (choice !== 0);
    console.log("Cảm ơn bạn đã sử dụng ứng dụng. Tạm biệt !");
  }
}

export { Program };
