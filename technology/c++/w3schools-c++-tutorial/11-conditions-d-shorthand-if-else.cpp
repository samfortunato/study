#include <iostream>

using namespace std;

void if_else();
void ternary();

int main() {
	if_else();
	ternary();

	return 0;
}

void if_else() {
	int time = 20;

	if (time < 20) {
		cout << "day" << endl;
	} else {
		cout << "night" << endl;
	}
}

void ternary() {
	int time = 20;

	string result = time < 20 ? "day" : "night";

	cout << result << endl;
}
