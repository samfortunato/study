#include <iostream>

using namespace std;

class Foo {
	public:
		void foo() {
			cout << "foo" << endl;
		}
};

class Bar {
	public:
		void bar() {
			cout << "bar" << endl;
		}
};

class Baz : public Foo, public Bar { };

int main() {
	Foo foo;
	Bar bar;
	Baz baz;

	foo.foo();

	bar.bar();

	baz.foo();
	baz.bar();

	return 0;
}
