#include <iostream>

using namespace std;

class Student
{
  public:
    string name;
    string major;
    double gpa;

    Student(string aName, string aMajor, double aGpa)
    {
      name = aName;
      major = aMajor;
      gpa = aGpa;
    }

    bool onHonorRoll()
    {
      return gpa >= 3.5;
    }
};

int main()
{
  Student jim("Jim", "Manga", 4.0);
  Student jorb("Jorb", "Pottery", 0.2);
  
  cout << jim.onHonorRoll() << endl;
  cout << jorb.onHonorRoll() << endl;
  
  return 0;
}
