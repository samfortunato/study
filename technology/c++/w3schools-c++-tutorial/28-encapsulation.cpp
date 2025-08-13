#include <iostream>

using namespace std;

class Employee {
	public:
		void set_salary(int salary) {
			this->salary = salary;
		}

		int get_salary() {
			return this->salary;
		}

	private:
		int salary;
};

void create_instance_with_setters();

int main() {
	create_instance_with_setters();

	return 0;
}

void create_instance_with_setters() {
	Employee employee;

	employee.set_salary(1000000);

	cout << employee.get_salary() << endl;
}
