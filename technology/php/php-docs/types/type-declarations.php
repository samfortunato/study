<?php

class C { }
class D extends C { }
class E { }

function foo(C $obj)
{
  echo get_class($obj) . "\n";
}

foo(new C());
foo(new D());

// won't work, E is wrong type:
// foo(new E());

interface IFoo
{
  public function foo();
}

class Foo implements IFoo
{
  function foo()
  { }
}

class Bar
{
  function foo()
  { }
}

function bar(IFoo $foo)
{
  echo get_class($foo) . "\n";
}

bar(new Foo());
// won't work. Bar doesn't implement IFoo
// bar(new Bar());

function sum($a, $b): float
{
  return $a + $b;
}

var_dump(sum(10, 0.5));

class Baz { }

function create_baz()
{
  return new Baz();
}

var_dump(create_baz());

function baz(?Baz $baz)
{
  var_dump($baz);
}

baz(new Baz());
baz(NULL);

function qux(?string $qux)
{
  var_dump($qux);
}

qux('qux');
qux(NULL);

function get_foo(): ?string
{
  if (isset($_GET['foo']))
  {
    return $_GET['foo'];
  }

  return NULL;
}

var_dump(get_foo());

function cargo(mixed $cargo)
{
  var_dump($cargo);
}

function garply(): never
{
  exit(1);
}

// garply();

function add(int $a, int $b)
{
  return $a + $b;
}

var_dump(add(1, 2));
// wont work.
// var_dump(add(1.5, 2.5));

function change_val(array &$val)
{
  $val = 1;
}

$my_val = [];
change_val($my_val);
var_dump($my_val);
// wont work. $my_val is now an int, and change_val is expecting an array
// change_val($my_val);
