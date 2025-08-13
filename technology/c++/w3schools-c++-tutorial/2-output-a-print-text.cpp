#include <iostream>

using namespace std;

void print_text();
void print_multiple_lines();

int main() {
	print_text();
	print_multiple_lines();

	return 0;
}

void print_text() {
	cout << "Hello, world!\n";
}

void print_multiple_lines() {
	cout << "Hello, world!";
	cout << "I am using C++.";
}
