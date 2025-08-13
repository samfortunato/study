#include <iostream>

using namespace std;

void declare_multidimensional_array();
void access_elements_in_multidimensional_array();
void change_elements_in_multidimensional_array();
void loop_through_multidimensional_array();
void loop_through_three_dimensional_array();

int main() {
	declare_multidimensional_array();
	access_elements_in_multidimensional_array();
	change_elements_in_multidimensional_array();
	loop_through_multidimensional_array();
	loop_through_three_dimensional_array();

	return 0;
}

void declare_multidimensional_array() {
	string foo[3][2];

	string bar[2][2] = {
		{"foo", "bar"},
		{"baz", "qux"},
	};

	string baz[2][2][2] = {
		{
			{"foo", "bar"},
			{"baz", "qux"},
		},
		{
			{"quux", "cargo"},
			{"garply", "waldo"},
		},
	};
}

void access_elements_in_multidimensional_array() {
	char foo[2][4] = {
		{'a', 'b', 'c', 'd'},
		{'e', 'f', 'g', 'h'},
	};

	char letter = foo[0][2];

	cout << letter << endl;
}

void change_elements_in_multidimensional_array() {
	int foo[2][4] = {
		{1, 2, 3, 4},
		{5, 6, 7, 8},
	};

	foo[0][2] = 100;

	cout << foo[0][2] << endl;
}

void loop_through_multidimensional_array() {
	string foo[2][4] = {
		{"foo", "bar", "baz", "qux"},
		{"quux", "cargo", "garply", "waldo"},
	};

	for (int i = 0; i < 2; i++) {
		for (int j = 0; j < 4; j++) {
			cout << foo[i][j] << endl;
		}
	}
}

void loop_through_three_dimensional_array() {
	int foo[3][2][3] = {
		{
			{1, 2, 3},
			{4, 5, 6},
		},
		{
			{7, 8, 9},
			{10, 11, 12},
		},
		{
			{13, 14, 15},
			{16, 17, 18},
		},
	};

	for (int i = 0; i < 3; i++) {
		for (int j = 0; j < 2; j++) {
			for (int k = 0; k < 3; k++) {
				cout << foo[i][j][k] << endl;
			}
		}
	}
}
