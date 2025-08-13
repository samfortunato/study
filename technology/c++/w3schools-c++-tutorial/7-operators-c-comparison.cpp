#include <iostream>

using namespace std;

void comparison();

int main() {
	comparison();

	return 0;
}

void comparison() {
	int foo = 1;
	int bar = 2;

	bool isFooGreater = foo > bar;

	cout << isFooGreater << endl;
}
