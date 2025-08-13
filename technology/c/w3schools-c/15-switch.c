#include <stdio.h>
#include <stdbool.h>

void switch_statement_a() {
	int foo = 1;

	switch (foo) {
		case 1:
			// ...
			break;

		case 2:
			// ...
			break;

		default:
			// ...
			break;
	}
}

void switch_statement_b() {
	int day = 4;

	switch (day) {
		case 1:
			printf("sunday");
			break;

		case 2:
			printf("monday");
			break;

		case 3:
			printf("tuesday");
			break;

		case 4:
			printf("wednesday");
			break;

		case 5:
			printf("thursday");
			break;

		case 6:
			printf("friday");
			break;

		case 7:
			printf("saturday");
			break;

		default:
			printf("that day does not exist.");
			break;
	}
}

void switch_statement_c() {
	int day = 4;

	switch (day) {
		case 6:
			printf("saturday");
			break;

		case 7:
			printf("sunday");
			break;

		default:
			printf("when is the weekend");
			break;
	}
}

int main() {
	switch_statement_a();
	switch_statement_b();
	switch_statement_c();

	return 0;
}
