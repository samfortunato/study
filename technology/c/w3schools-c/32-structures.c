#include <stdio.h>
#include <string.h>

struct Foo {
	int bar;
	char baz;
};

struct Bar {
	int baz;
	char qux;
	char quux[30];
};

struct Car {
	char make[50];
	char model[50];
	int year;
};

void create_structure();
void access_structure_members();
void create_multiple_structures();
void wrong_way_to_assign_strings_to_structures();
void assign_strings_to_structures();
void create_a_structure_with_simpler_syntax();
void copy_structures();
void modify_values();
void copy_structure_and_modify_values();
void real_life_example();

int main() {
	create_structure();
	access_structure_members();
	create_multiple_structures();
	wrong_way_to_assign_strings_to_structures();
	assign_strings_to_structures();
	create_a_structure_with_simpler_syntax();
	copy_structures();
	modify_values();
	copy_structure_and_modify_values();
	real_life_example();

	return 0;
}

void create_structure() {
	struct Foo foo;
}

void access_structure_members() {
	struct Foo foo;

	foo.bar = 1;
	foo.baz = 'a';

	printf("%d\n", foo.bar);
	printf("%c\n", foo.baz);
}

void create_multiple_structures() {
	struct Foo foo;
	struct Foo bar;

	foo.bar = 1;
	foo.baz = 'a';

	bar.bar = 2;
	bar.baz = 'b';
}

void wrong_way_to_assign_strings_to_structures() {
	struct Bar foo;

	// will not work
	// foo.quux = "foo";
}

void assign_strings_to_structures() {
	struct Bar foo;

	strcpy(foo.quux, "foo");

	printf("%s\n", foo.quux);
}

void create_a_structure_with_simpler_syntax() {
	struct Bar foo = { 1, 'a', "foo" };

	printf("%d %c %s\n", foo.baz, foo.qux, foo.quux);
}

void copy_structures() {
	struct Foo foo = { 1, 'a' };
	struct Foo bar;

	bar = foo;
}

void modify_values() {
	struct Bar foo = { 1, 'a', "foo" };

	foo.baz = 2;
	foo.qux = 'b';
	strcpy(foo.quux, "bar");

	printf("%d %c %s\n", foo.baz, foo.qux, foo.quux);
}

void copy_structure_and_modify_values() {
	struct Bar foo = { 1, 'a', "foo" };
	struct Bar bar;

	bar = foo;
	bar.baz = 2;
	bar.qux = 'b';
	strcpy(bar.quux, "bar");

	printf("%d %c %s\n", foo.baz, foo.qux, foo.quux);
	printf("%d %c %s\n", bar.baz, bar.qux, bar.quux);
}

void real_life_example() {
	struct Car honda_civic = { "Honda", "Civic", 1990 };
	struct Car tesla_model_s = { "Tesla", "Model S", 2010 };
	struct Car lamborghini_huracan = { "Lamborghini", "Huracán STO", 2023 };

	printf("%s %s %d\n", honda_civic.make, honda_civic.model, honda_civic.year);
	printf("%s %s %d\n", tesla_model_s.make, tesla_model_s.model, tesla_model_s.year);
	printf("%s %s %d\n", lamborghini_huracan.make, lamborghini_huracan.model, lamborghini_huracan.year);
}
