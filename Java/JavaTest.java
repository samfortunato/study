public class Program {
  public static void main(String[] args) {
    double yoMommasWeight = 500.43;
    int yoMommasAge = 502;
    char yoMommasBraSize = 'Z';
    String yoMommasFavoriteRestaurant = "McDonald's";
    boolean isYoMommaFat = true;

    String franciscosName = "Francisco";
    char franciscosFirstInitial = 'F';
    String singleChar = "s";
    
    System.out.println("Sup???");
    System.out.println(yoMommasWeight);
  }
}

public class Car {
  String color;
  int numWheels;
  double milesPerGallon;

  public Car(String carColor, int amtWheels, double mpg) {
    color = carColor;
    numWheels = amtWheels;
    milesPerGallon = mpg;
  }

  public void vroom() {
    System.out.println("Vroom vroom, mothafucka");
  }

  public int howManyWheels() {
    return numWheels;
  }

  public static void main(String[] args) {
    Car lamborghini = new Car("black", 4, 11.0);

    lamborghini.vroom();
    System.out.println(lamborghini.howManyWheels());
    System.out.println(lamborghini.color);
  }
}
