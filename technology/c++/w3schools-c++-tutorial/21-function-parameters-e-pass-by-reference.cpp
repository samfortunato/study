#include <iostream>

using namespace std;

void swap_nums(int &x, int &y);
void swap_two_numbers();

int main() {
	swap_two_numbers();

	return 0;
}

void swap_nums(int &x, int &y) {
	int original_x = x;

	x = y;
	y = original_x;
}

void swap_two_numbers() {
	int first_num = 10;
	int second_num = 20;

	cout << "Before swap: ";
	cout << first_num << ", " << second_num << endl;

	swap_nums(first_num, second_num);

	cout << "After swap: ";
	cout << first_num << ", " << second_num << endl;
}
