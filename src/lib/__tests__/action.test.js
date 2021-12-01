import action from '../action';

test('action', () => {
  expect(action('name', { a: 1, b: 2 })).toEqual({ type: 'name', a: 1, b: 2 });
});
