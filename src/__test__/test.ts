import Book from "../book";
import Movie from "../movie";
import Cart from "../cart";

test('for add', () => {
  const cart = new Cart();
  cart.add(new Book(123, "Задача трёх тел", "Лю Цысинь", 1152, 464));
  cart.add(
    new Movie(
      44,
      "Матрица",
      250,
      1999,
      ['США', 'Австралия'],
      "Все, что имеет начало, имеет и конец",
      ["научная фантастика", "киберпанк", "боевик"],
      "136 мин"
    )
  );
  expect(cart.items.length).toBe(2)
});

test('for totalSum', () => {
  const cart = new Cart();
  cart.add(new Book(123, "Задача трёх тел", "Лю Цысинь", 1150, 464));
  cart.add(
    new Movie(
      44,
      "Матрица",
      250,
      1999,
      ['США', 'Австралия'],
      "Все, что имеет начало, имеет и конец",
      ["научная фантастика", "киберпанк", "боевик"],
      "136 мин"
    )
  );
  expect(cart.totalSum()).toBeCloseTo(1400)
});

test('for discount sum', () => {
  const cart = new Cart();
  cart.add(new Book(123, "Задача трёх тел", "Лю Цысинь", 1150, 464));
  cart.add(
    new Movie(
      44,
      "Матрица",
      250,
      1999,
      ['США', 'Австралия'],
      "Все, что имеет начало, имеет и конец",
      ["научная фантастика", "киберпанк", "боевик"],
      "136 мин"
    )
  );
  expect(cart.sumWithDiscount(15)).toBeCloseTo(1190)
});

test('for delete item', () => {
  const cart = new Cart();
  cart.add(new Book(123, "Задача трёх тел", "Лю Цысинь", 1150, 464));
  cart.add(
    new Movie(
      44,
      "Матрица",
      250,
      1999,
      ['США', 'Австралия'],
      "Все, что имеет начало, имеет и конец",
      ["научная фантастика", "киберпанк", "боевик"],
      "136 мин"
    )
  );
  cart.removeItem(44)
  expect(cart.items.length).toBe(1)
});