#include <iostream>

using namespace std;

int add_5(int num);
int sum(int x, int y);
void print_add_5();
void print_sum();
void store_sum_in_variable();

int main() {
	print_add_5();
	print_sum();
	store_sum_in_variable();

	return 0;
}

int add_5(int num) {
	return num + 5;
}

int sum(int x, int y) {
	return x + y;
}

void print_add_5() {
	cout << add_5(5) << endl;
}

void print_sum() {
	cout << sum(1, 2) << endl;
}

void store_sum_in_variable() {
	int result = sum(1, 2);

	cout << result << endl;
}
