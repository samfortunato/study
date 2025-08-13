#include <iostream>

using namespace std;

int foo(int bar);
float foo(float bar);
double foo(double bar, double baz);
int sum(int x, int y);
double sum_double(double x, double y);
void print_sum_and_double_sum();
void print_sum_and_double_sum_overload();

int main() {
	foo(1);
	foo(1.1f);
	foo(1.11111111, 2.22222222);
	print_sum_and_double_sum();
	print_sum_and_double_sum_overload();

	return 0;
}

int foo(int bar) {
	cout << bar << endl;

	return bar;
}

float foo(float bar) {
	cout << bar << endl;

	return bar;
}

double foo(double bar, double baz) {
	double qux = bar + baz;

	cout << qux << endl;

	return qux;
}

int sum(int x, int y) {
	return x + y;
}

double sum(double x, double y) {
	return x + y;
}

double sum_double(double x, double y) {
	return x + y;
}

void print_sum_and_double_sum() {
	int int_result = sum(1, 2);
	double double_result = sum_double(1.1000000, 2.2000000);

	cout << int_result << endl;
	cout << double_result << endl;
}

void print_sum_and_double_sum_overload() {
	int int_result = sum(1, 2);
	double double_result = sum(1.1, 2.2);

	cout << int_result << endl;
	cout << double_result << endl;
}
