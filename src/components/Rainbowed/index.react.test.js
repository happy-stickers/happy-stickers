import React from 'react';
import Rainbow from './index';
import renderer from 'react-test-renderer';

test('Displays all the shadows', () => {
  const component = renderer.create(
    <Rainbow>Hello World</Rainbow>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Displays one shadow', () => {
  const component = renderer.create(
    <Rainbow height={1}>Hello World</Rainbow>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
