#include <iostream>
#include <math.h>

using namespace std;

double calculate()
{
  double num1, num2;
  char operation;

  cout << "Enter a number: ";
  cin >> num1;

  cout << "Enter an operation (+, -, *, /, or \%): ";
  cin >> operation;

  cout << "Enter another number: ";
  cin >> num2;

  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    case '%':
      return fmod(num1, num2);
    default:
      return 0;
  }
}

int main()
{
  cout << calculate() << endl;
  
  return 0;
}
