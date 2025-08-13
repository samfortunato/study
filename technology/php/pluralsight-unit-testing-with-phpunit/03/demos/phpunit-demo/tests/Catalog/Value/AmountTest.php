<?php

declare(strict_types=1);

namespace App\Tests\Catalog\Value;

use PHPUnit\Framework\TestCase;
use App\Catalog\Value\Amount;

final class AmountTest extends TestCase {
  /**
   * getCents with valid cents returns unchanged cents
   */
  public function test_returns_unchanged_cents() {
    $amount = new Amount(1000);

    $cents = $amount->getCents();

    self::assertEquals(1000, $cents);
  }
}
