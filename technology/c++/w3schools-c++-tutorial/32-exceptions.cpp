#include <iostream>

using namespace std;

void throw_exception();
void throw_exception_2();
void throw_exception_with_error_code();
void throw_exception_with_error_of_any_type();

int main () {
	throw_exception();
	throw_exception_2();
	throw_exception_with_error_code();
	throw_exception_with_error_of_any_type();

	return 0;
}

void throw_exception() {
	try {
		// ...

		if (false) {
			throw "exception";
		}
	} catch (int error_code) {
		// ...
	}
}

void throw_exception_2() {
	int age = 15;

	try {
		if (age >= 18) {
			cout << "Access granted. You may visit the sex room." << endl;
		} else {
			throw age;
		}
	} catch (int not_allowed_age) {
		cout << "Access denied. You cannot enter the sex room unless you are 18 or over." << endl;
		cout << "Age: " << not_allowed_age << endl;
	}
}

void throw_exception_with_error_code() {
	const int ERROR_UNDERAGE = 505;

	int age = 15;

	try {
		if (age >= 18) {
			cout << "You may enter." << endl;
		} else {
			throw ERROR_UNDERAGE;
		}
	} catch (int error_code) {
		cout << "Access denied. You must be 18 years or older to enter." << endl;
		cout << "Error code: " << error_code << endl;
	}
}

void throw_exception_with_error_of_any_type() {
	const int ERROR_UNDERAGE = 505;

	int age = 15;

	try {
		if (age >= 18) {
			cout << "You may enter." << endl;
		} else {
			throw ERROR_UNDERAGE;
		}
	} catch (...) {
		cout << "Access denied. You must be 18 years or older." << endl;
	}
}
