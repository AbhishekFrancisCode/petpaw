/**
 *
 * MATH OPERATIONS HELPER FUNCTIONS
 *
 *
 * 1) func percentage -> calculate percentages
 * 2) func toIndianCurrency -> returns indian currency denomination
 */

export function percentage(percent: number, total: number) {
  return (percent / 100) * total;
  // return ((percent/ 100) * total).toFixed(2)
}

export const toIndianCurrency = (num: number) => {
  const curr = num.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR"
  });
  return curr;
};
