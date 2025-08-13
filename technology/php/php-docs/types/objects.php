<?php

class Foo
{
  function bar()
  {
    echo 'bar';
  }
}

$foo = new Foo();

$foo->bar();

$obj = (object)['1' => 'foo'];

var_dump(isset($obj->{'1'}));
var_dump(key($obj));

$obj_2 = (object)'foo';

echo $obj_2->scalar;
