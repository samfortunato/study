#include <iostream>

using namespace std;

void string_length();
void string_size();

int main() {
	string_length();
	string_size();

	return 0;
}

void string_length() {
	string foo = "foo";

	int length = foo.length();

	cout << length << endl;
}

void string_size() {
	string foo = "foo";

	// synonym for length()
	int size = foo.size();

	cout << size << endl;
}
