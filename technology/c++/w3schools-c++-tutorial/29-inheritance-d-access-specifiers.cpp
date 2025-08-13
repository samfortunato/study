#include <iostream>

using namespace std;

class Employee {
	protected:
		int salary;
};

class Programmer : public Employee {
	public:
		int bonus;

		int get_salary() {
			return this->salary;
		}

		void set_salary(int salary) {
			this->salary = salary;
		}
};

void create_instance_of_child_with_parent_that_has_a_protected_member();

int main() {
	create_instance_of_child_with_parent_that_has_a_protected_member();

	return 0;
}

void create_instance_of_child_with_parent_that_has_a_protected_member() {
	Programmer programmer;

	programmer.set_salary(500000);
	programmer.bonus = 100000;

	cout << "Salary: " << programmer.get_salary() << endl;
	cout << "Bonus: " << programmer.bonus << endl;
}
