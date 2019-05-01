#include <iostream>

using namespace std;

class Book
{
  public:
    string title;
    string author;
    int numPages;

    Book(string aTitle, string aAuthor, int aNumPages)
    {
      title = aTitle;
      author = aAuthor;
      numPages = aNumPages;
    }
};

int main()
{
  Book harryPotter1("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 350);

  cout << harryPotter1.title << endl;
  cout << harryPotter1.author << endl;
  cout << harryPotter1.numPages << endl;
  
  return 0;
}
