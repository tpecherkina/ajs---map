import { ErrorRepository } from '../ErrorRepository';

test('проверка translate', () => {
  const check = new ErrorRepository();
  expect(check.translate("1")).toBe('Ошибка 1');
});

