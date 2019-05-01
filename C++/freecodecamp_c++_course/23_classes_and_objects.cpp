#include <iostream>

using namespace std;

class Book {
  public:
    string title;
    string author;
    int amtPages;
};

int main()
{
  Book book1;
  book1.title = "Sup dude";
  book1.author = "Yo Momma";
  book1.amtPages = 20000;

  Book theHobbit;
  theHobbit.title = "The Hobbit";
  theHobbit.author = "J.R.R. Tolkien";
  theHobbit.amtPages = 800;

  cout << theHobbit.title << endl;
  
  return 0;
}
