function calculateTotalOutstandingAndSendBill() {
  const outstanding = customer.invoices.reduce((total, invoice) => invoice.amount + total, 0);

  sendBill();

  return outstanding;
}

// |
// v

function calculateTotalOutstanding() {
  return customer.invoices.reduce((total, invoice) => invoice.amount + total, 0);
}

function sendBill() {
  emailGateway.send(formatBill(customer));
}
