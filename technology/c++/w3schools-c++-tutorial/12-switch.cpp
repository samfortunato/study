#include <iostream>

using namespace std;

void switch_a();
void switch_b();
void switch_c();

int main() {
	switch_a();
	switch_b();
	switch_c();

	return 0;
}

void switch_a() {
	int foo = 1;

	switch (foo) {
		case 1:
			cout << "foo" << endl;
			break;

		case 2:
			cout << "bar" << endl;
			break;

		default:
			cout << "baz" << endl;
	}
}

void switch_b() {
	int day = 4;

	switch (day) {
		case 1:
			cout << "monday" << endl;
			break;

		case 2:
			cout << "tuesday" << endl;
			break;

		case 3:
			cout << "wednesday" << endl;
			break;

		case 4:
			cout << "thursday" << endl;
			break;

		case 5:
			cout << "friday" << endl;
			break;

		case 6:
			cout << "saturday" << endl;
			break;

		case 7:
			cout << "sunday" << endl;
			break;

		default:
			cout << "not a day" << endl;
	}
}

void switch_c() {
	int day = 4;

	switch (day) {
		case 6:
			cout << "saturday" << endl;
			break;

		case 7:
			cout << "sunday" << endl;
			break;

		default:
			cout << "not the weekend/not a day" << endl;
	}
}
