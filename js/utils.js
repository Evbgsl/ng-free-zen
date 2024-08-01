const divide = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError("Оба аргумента должны быть числом");
  }
  if (b === 0) {
    throw new Error("На ноль делить низзя!");
  }
  return a / b;
}

try {
  console.log(divide(10, 2)); // 5
  console.log(divide(10, 0)); // Ошибка деления на ноль
} catch (error) {
  console.error(error.message);
}
