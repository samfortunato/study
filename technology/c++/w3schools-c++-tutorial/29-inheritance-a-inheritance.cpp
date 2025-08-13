#include <iostream>

using namespace std;

class Vehicle {
	public:
		string make;

		void honk_horn() {
			cout << "honk" << endl;
		}
};

class Car : public Vehicle {
	public:
		string model;
};

void create_instance_of_child_class();

int main() {
	create_instance_of_child_class();

	return 0;
}

void create_instance_of_child_class() {
	Car car;

	car.make = "Honda";
	car.model = "Civic Type R";

	car.honk_horn();

	cout << car.make << " " << car.model << endl;
}
