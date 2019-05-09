using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Inheritance
{
  class Program
  {
    static void Main(string[] args)
    {
      Chef chef = new Chef();
      chef.MakeChicken();
      chef.TakeOutBoobs();

      ItalianChef italianChef = new ItalianChef();
      italianChef.MakeUdon();
      italianChef.MakeChicken();
      italianChef.MakePasta();
      italianChef.TakeOutBoobs();
    }
  }

  class Chef
  {
    public virtual void MakeChicken()
    {
      Console.WriteLine("The chef made chicken.");
    }

    public void MakeUdon()
    {
      Console.WriteLine("The chef made udon. Good shit.");
    }

    public void TakeOutBoobs()
    {
      Console.WriteLine("Nani?! The chef is actually a hot woman!");
      Console.WriteLine("The chef took out her boobies!");
      Console.WriteLine("It was hot as fuck.");
    }
  }

  class ItalianChef : Chef
  {
    public void MakePasta()
    {
      Console.WriteLine("The Italian chef made pasta. Ravioli! Mitsubishi!");
    }

    public override void MakeChicken()
    {
      Console.WriteLine("The Italian chef made chicken. Tortellini!");
    }
  }
}
