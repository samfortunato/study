#include <stdio.h>
#include <stdlib.h>

// this is not working well...

int main()
{
  int userNumber;
  double gpa;
  char grade;

  // max 20 chars in this string
  char name[20];
  
  printf("Enter your latest letter grade: ");
  scanf("%c", &grade);

  printf("Enter an integer: ");
  scanf("%d", &userNumber);

  printf("Give me your GPA: ");
  scanf("%lf", &gpa);

  printf("What's your name?: ");
  fgets(name, 20, stdin);

  printf("\n");
  printf("The number you entered was: %d\n", userNumber);
  printf("Your GPA is: %f\n", gpa);
  printf("Your name is: %s\n", name);
  printf("Your latest letter grade is: %c\n", grade);
  
  return 0;
}
