#include <iostream>

using namespace std;

class Foo {
	public:
		Foo() {
			cout << "created a Foo" << endl;
		}
};

class Car {
	public:
		string make;
		string model;
		int year;

		Car(string make, string model, int year) {
			this->make = make;
			this->model = model;
			this->year = year;
		}
};

class Bar {
	public:
		int foo;

		Bar(int foo);
};

Bar::Bar(int foo) {
	this->foo = foo;
}

void create_instance_with_constructor();
void create_instance_with_constructor_with_arguments();
void create_instance_with_constructor_defined_outside();

int main() {
	create_instance_with_constructor();
	create_instance_with_constructor_with_arguments();
	create_instance_with_constructor_defined_outside();

	return 0;
}

void create_instance_with_constructor() {
	Foo foo;
}

void create_instance_with_constructor_with_arguments() {
	Car car("Honda", "Civic Type R", 2024);

	cout << car.make << " " << car.model << " " << car.year << endl;
}

void create_instance_with_constructor_defined_outside() {
	Bar bar(1);
}
