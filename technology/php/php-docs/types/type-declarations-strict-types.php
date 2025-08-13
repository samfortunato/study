<?php

declare(strict_types = 1);

function sum(int $a, int $b)
{
  return $a + $b;
}

var_dump(sum(1, 2));
// won't work. TypeError - args must be int
// var_dump(sum(1.5, 2.5));

function add($a, $b): int
{
  return $a + $b;
}

var_dump(add(1, 2));
// won't work. add is expecting to return int, but returns a float here
// var_dump(add(1.5, 2.5));

try
{
  var_dump(sum(1, 2));
  var_dump(sum(1.5, 2.5));
}
catch (TypeError $err)
{
  echo 'Error: ' . $err->getMessage() . "\n";
}
