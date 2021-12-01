import mkAction from '../mkAction';

test('mkAction', () => {
  expect(mkAction('name', { a: 1, b: 2 })).toEqual({
    type: 'name',
    a: 1,
    b: 2,
  });
});
