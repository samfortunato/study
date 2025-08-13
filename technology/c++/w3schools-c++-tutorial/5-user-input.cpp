#include <iostream>

using namespace std;

void user_input();
void do_simple_calculation();

int main() {
	user_input();
	do_simple_calculation();

	return 0;
}

void user_input() {
	int foo;

	cout << "Type a number, and press enter: ";

	cin >> foo;

	cout << "Your number is: " << foo << endl;
}

void do_simple_calculation() {
	int x, y, sum;

	cout << "Type a number: ";
	cin >> x;

	cout << "Type another number: ";
	cin >> y;

	sum = x + y;

	cout << "Your sum is: " << sum << endl;
}
