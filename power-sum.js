export const powerSum = (x, n, curr_num = 1, curr_sum = 0) => {
  let result = 0;
  let p = Math.pow(curr_num, n);
  while (p + curr_sum < x) {
    result += powerSum(x, n, curr_num + 1, p + curr_sum);
    curr_num++;
    p = Math.pow(curr_num, n);
  }
  if (p + curr_sum === x) {
    result++;
  }
  // This is comment on somsak branch
  return result;
};
