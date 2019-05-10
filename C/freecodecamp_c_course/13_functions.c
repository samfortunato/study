#include <stdio.h>
#include <stdlib.h>

void sayHello(char name[], int age)
{
  printf("Hello %s\n", name);
  printf("You are %d years old\n", age);
}

int main()
{
  sayHello("Suppo", 32);
  
  return 0;
}
