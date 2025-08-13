#include <iostream>

using namespace std;

void omit_array_size();
void declare_array_then_specify_elements();

int main() {
	omit_array_size();
	declare_array_then_specify_elements();

	return 0;
}

void omit_array_size() {
	// don't need to specify size
	string foo[] = {"foo", "bar", "baz"};
	string bar[3] = {"foo", "bar", "baz"};
}

void declare_array_then_specify_elements() {
	string foo[5];

	foo[0] = "foo";
	foo[1] = "bar";
	foo[2] = "baz";
	foo[3] = "qux";
	foo[4] = "quux";
}
