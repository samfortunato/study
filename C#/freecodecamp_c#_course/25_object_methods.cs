using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ObjectMethods
{
  class Program
  {
    static void Main(string[] args)
    {
      Student johnDoe = new Student("John Doe", "Music", 3.6);
      Student janeDoe = new Student("Jane Doe", "Philosophy", 2.3);

      Console.WriteLine(johnDoe.hasHonors());
      Console.WriteLine(janeDoe.hasHonors());
    }
  }

  class Student
  {
    public string name;
    public string major;
    public double gpa;

    public Student(string aName, string aMajor, double aGpa)
    {
      name = aName;
      major = aMajor;
      gpa = aGpa;
    }

    public bool hasHonors()
    {
      return gpa >= 3.5;
    }
  }
}
