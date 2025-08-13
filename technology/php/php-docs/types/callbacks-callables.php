<?php

function foo(callable $fn)
{
  // ...

  $fn();

  // ...
}

function my_callback_func()
{
  echo "my_callback_func\n";
}

class Foo
{
  static function my_callback_method()
  {
    echo "my_callback_method\n";
  }
}

call_user_func('my_callback_func');
call_user_func(['Foo', 'my_callback_method']);

$obj = new Foo();
call_user_func([$obj, 'my_callback_method']);

call_user_func('Foo::my_callback_method');

class A
{
  public static function bar()
  {
    echo "bar A\n";
  }
}

class B extends A
{
  public static function bar()
  {
    echo "bar B\n";
  }
}

call_user_func(['B', 'parent::bar']);
call_user_func(['B', 'bar']);

class C
{
  public function __invoke($name)
  {
    echo "Hello $name!\n";
  }
}

$c = new C();

call_user_func($c, 'PHP');

// ---

$double = function ($num) {
  return $num * 2;
};

$nums = range(1, 5);
$mapped = array_map($double, $nums);

print implode(' ', $mapped) . "\n";

call_user_func_array($c, ['PHP']);
