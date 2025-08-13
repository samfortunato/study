#include <stdio.h>

void arrays_a() {
	int foo[] = {1, 2, 3, 4};
}

void access_elements_of_an_array() {
	int foo[] = {1, 2, 3, 4};

	printf("%d\n", foo[0]);
}

void change_an_array_element_a() {
	int foo[] = {1, 2, 3, 4};

	foo[0] = 10;
}

void change_an_array_element_b() {
	int foo[] = {1, 2, 3, 4};

	foo[0] = 20;

	printf("%d\n", foo[0]);
}

void loop_through_an_array() {
	int foo[] = {1, 2, 3, 4};
	int i;

	for (i = 0; i < 4; i++) {
		printf("%d\n", foo[i]);
	}
}

void set_array_size() {
	int foo[4];

	foo[0] = 1;
	foo[1] = 2;
	foo[2] = 3;
	foo[3] = 4;
}

int main() {
	arrays_a();
	access_elements_of_an_array();
	change_an_array_element_a();
	change_an_array_element_b();
	loop_through_an_array();
	set_array_size();

	return 0;
}
