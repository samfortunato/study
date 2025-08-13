#include <iostream>

using namespace std;

void see_memory_address();

int main() {
	see_memory_address();

	return 0;
}

void see_memory_address() {
	string foo = "foo";

	cout << &foo << endl;
}
