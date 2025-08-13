#include <iostream>

using namespace std;

int nth_triangular_number(int num);
void print_nth_triangular_number();

int main() {
	print_nth_triangular_number();

	return 0;
}

int nth_triangular_number(int num) {
	if (num <= 0) {
		return 0;
	}

	return num + nth_triangular_number(num - 1);
}

void print_nth_triangular_number() {
	int sum = nth_triangular_number(10);

	cout << sum << endl;
}
