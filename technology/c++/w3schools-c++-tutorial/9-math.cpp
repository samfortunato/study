#include <iostream>
#include <cmath>

using namespace std;

void max_and_min();
void using_cmath();

int main() {
	max_and_min();
	using_cmath();

	return 0;
}

void max_and_min() {
	int foo = max(1, 2);
	int bar = min(1, 2);

	cout << foo << endl;
	cout << bar << endl;
}

void using_cmath() {
	cout << sqrt(64) << endl;
	cout << round(1.2) << endl;
	cout << log(2) << endl;
	cout << abs(-1) << endl;
	cout << acos(1) << endl;
	cout << asin(1) << endl;
	cout << atan(1) << endl;
	cout << cbrt(9) << endl;
	cout << ceil(1.1) << endl;
	cout << cos(1) << endl;
	cout << cosh(1) << endl;
	cout << exp(1) << endl;
	cout << expm1(1) << endl;
	cout << fabs(-1.1) << endl;
	cout << fdim(1, 1) << endl;
	cout << floor(1.9) << endl;
	cout << hypot(1, 1) << endl;
	cout << fma(1, 2, 3) << endl;
	cout << fmax(1, 2) << endl;
	cout << fmin(1, 2) << endl;
	cout << fmod(1, 2) << endl;
	cout << pow(2, 2) << endl;
	cout << sin(1) << endl;
	cout << sinh(1) << endl;
	cout << tan(1) << endl;
	cout << tanh(1) << endl;
}
