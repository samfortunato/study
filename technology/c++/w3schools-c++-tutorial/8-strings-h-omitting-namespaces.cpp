#include <iostream>

void omitting_namespaces();

int main() {
	omitting_namespaces();

	return 0;
}

void omitting_namespaces() {
	std::string foo = "foo";

	std::cout << foo << std::endl;
}
