#include <stdio.h>
#include <stdbool.h>

void the_if_statement_a() {
	bool is_foo = true;

	if (is_foo) {
		printf("true");
	}
}

void the_if_statement_b() {
	if (20 > 18) {
		printf("20 is greater than 18");
	}
}

void the_if_statement_c() {
	int x = 20;
	int y = 18;

	if (x > y) {
		printf("x is greater than y");
	}
}

void the_else_statement_a() {
	bool is_foo = false;

	if (is_foo) {
		// ...
	} else {
		// ...
	}
}

void the_else_statement_b() {
	int time = 20;

	if (time < 18) {
		printf("Good afternoon");
	} else {
		printf("Good evening");
	}
}

void the_else_if_statement_a() {
	bool is_foo = false;
	bool is_bar = true;

	if (is_foo) {
		// ...
	} else if (is_bar) {
		// ...
	} else {
		// ...
	}
}

void the_else_if_statement_b() {
	int time = 20;

	if (time < 18) {
		printf("Good morning");
	} else if (time == 20) {
		printf("Good afternoon");
	} else {
		printf("Good evening");
	}
}

void the_else_if_statement_c() {
	int foo = 10;

	if (foo > 0) {
		printf("positive");
	} else if (foo < 0) {
		printf("negative");
	} else {
		printf("the number is 0");
	}
}

int main() {
	the_if_statement_a();
	the_if_statement_b();
	the_if_statement_c();
	the_else_statement_a();
	the_else_statement_b();
	the_else_if_statement_a();
	the_else_if_statement_b();
	the_else_if_statement_c();

	return 0;
}
