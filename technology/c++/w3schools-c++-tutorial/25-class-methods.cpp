#include <iostream>

using namespace std;

class Foo {
	public:
		void do_bar();
		int do_qux(int qux);

		void do_foo() {
			cout << "foo" << endl;
		}

		int do_baz(int baz) {
			return baz;
		}
};

void Foo::do_bar() {
	cout << "bar" << endl;
}

int Foo::do_qux(int qux) {
	return qux;
}

void call_class_method();
void call_outside_class_method();
void call_methods_with_arguments();

int main() {
	call_class_method();
	call_outside_class_method();
	call_methods_with_arguments();

	return 0;
}

void call_class_method() {
	Foo foo;

	foo.do_foo();
}

void call_outside_class_method() {
	Foo foo;

	foo.do_bar();
}

void call_methods_with_arguments() {
	Foo foo;

	cout << foo.do_baz(1) << endl;
	cout << foo.do_qux(2) << endl;
}
