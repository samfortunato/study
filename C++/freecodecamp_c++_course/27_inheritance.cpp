#include <iostream>

using namespace std;

class Chef
{
  public:
    void makeChicken()
    {
      cout << "The chef made chicken." << endl;
    }

    void makeSalad()
    {
      cout << "The chef made salad." << endl;
    }

    void makeDailySpecial()
    {
      cout << "The chef made today's special." << endl;
    }
};

class ItalianChef : public Chef
{
  public:
    void makeChicken()
    {
      cout << "The Italian chef made chicken parmesean." << endl;
    }

    void makePasta()
    {
      cout << "The Italian chef made pasta." << endl;
    }
};

int main()
{
  Chef chef;

  chef.makeChicken();
  chef.makeSalad();
  chef.makeDailySpecial();

  ItalianChef italianChef;

  italianChef.makeChicken();
  italianChef.makeSalad();
  italianChef.makePasta();
  
  return 0;
}
