<?php

function foo(iterable $iterable)
{
  foreach ($iterable as $value) {
    var_dump($value);
  }
}

function bar(iterable $iterable = [])
{
  // ...
}

function baz(): iterable
{
  return [1, 2, 3];
}

function qux(): iterable
{
  yield 1;
  yield 2;
  yield 3;
}

var_dump(qux());
var_dump(qux());
var_dump(qux());
var_dump(qux());
