#include <stdio.h>

void user_input() {
	int foo;

	printf("Type a number: ");

	scanf("%d", &foo);

	printf("Your number: %d\n", foo);
}

void multiple_inputs() {
	int foo;
	char bar;

	printf("Type a number, a space, and then a character, and press enter: ");

	scanf("%d %c", &foo, &bar);

	printf("Your number is: %d\n", foo);
	printf("Your character is: %c\n", bar);
}

void take_string_input() {
	char foo[30];

	printf("Enter up to 30 characters: ");

	scanf("%s", foo);

	printf("Your string: %s\n", foo);
}

void considers_whitespace_as_a_terminating_character() {
	char foo[30];

	printf("Type a word, then a space, then another word (it will cut off the second word): ");

	scanf("%s", foo);

	printf("The entire string: %s\n", foo);
}

void read_a_line_of_text() {
	char foo[30];

	printf("Type a sentence, with spaces: ");

	fgets(foo, sizeof foo, stdin);

	printf("Your sentence, with spaces: %s\n", foo);
}

int main() {
	user_input();
	multiple_inputs();
	take_string_input();
	considers_whitespace_as_a_terminating_character();
	// don't run any function before this if you want to run this function:
	// read_a_line_of_text();

	return 0;
}
