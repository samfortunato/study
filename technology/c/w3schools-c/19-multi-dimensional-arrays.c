#include <stdio.h>

void two_dimensional_arrays() {
	int foo[2][3] = {
		{1, 2, 3},
		{4, 5, 6},
	};
}

void access_elements_of_a_2d_array() {
	int foo[2][3] = {
		{1, 2, 3},
		{4, 5, 6},
	};

	printf("%d", foo[0][1]);
}

void change_elements_in_a_2d_array() {
	int foo[2][3] = {
		{1, 2, 3},
		{4, 5, 6},
	};

	foo[0][0] = 10;

	printf("%d\n", foo[0][0]);
}

void loop_through_a_2d_array() {
	int foo[2][3] = {
		{1, 2, 3},
		{4, 5, 6},
	};

	int i, j;

	for (i = 0; i < 2; i++) {
		for (j = 0; j < 3; j++) {
			printf("%d\n", foo[i][j]);
		}
	}
}

int main() {
	two_dimensional_arrays();
	access_elements_of_a_2d_array();
	change_elements_in_a_2d_array();
	loop_through_a_2d_array();

	return 0;
}
