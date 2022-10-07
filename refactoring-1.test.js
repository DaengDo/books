import INVOICE from "./invoices.json";
import PLAYS from "./plays.json";
import { statement } from "./refactoring-1";

test("statement", () => {
  expect(statement(INVOICE[0], PLAYS)).toMatch(
    `청구 내역(고객명: BigCo)
Hamlet: $650.00 (55석)
As You Like It: $490.00 (35석)
Othello: $500.00 (40석)
총액: $1,640.00
적립 포인트: 47점`,
  );
});
