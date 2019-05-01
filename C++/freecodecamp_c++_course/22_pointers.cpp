#include <iostream>

using namespace std;

int main()
{
  int age = 20;
  double gpa = 3.5;
  string name = "Yo Momma";

  int *pAge = &age;
  double *pGpa = &gpa;
  string *pName = &name;

  // memory address of age variable
  cout << &age << endl;

  cout << age << endl;
  cout << gpa << endl;
  cout << name << endl;
  
  cout << endl;

  cout << pAge << endl;
  cout << pGpa << endl;
  cout << pName << endl;

  cout << endl;

  // dereference pAge pointer
  //   gives you the actual value that the pointer
  //     is pointing to
  //   the value at that memory address
  cout << *pAge << endl;
  
  return 0;
}
