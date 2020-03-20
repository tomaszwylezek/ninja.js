import React from 'react';
import { mount, shallow } from 'enzyme';
import { App, IAppProps } from './App';

import { getRows } from './mocks';

describe('App', () => {
  let props: IAppProps;

  beforeEach(() => {
    props = {
      rows: getRows()
    };
  });

  it('renders without crashing', () => {
    props.rows = [];
    shallow(<App {...props} />);
  });

  it('renders 5 rows', () => {
    const wrapper = mount(<App {...props} />);

    expect(wrapper.find('tr').length).toBe(5);
  });

  it('filters rows based on input', () => {
    const wrapper = mount(<App {...props} />);

    const attribute = document.createAttribute('value');
    attribute.value = 'k';

    const input = wrapper.find('input');
    input.getDOMNode().setAttributeNode(attribute);

    input.simulate('change');

    expect(wrapper.find('tr').length).toBe(2);
  });

  it('display second page', () => {
    const wrapper = mount(<App {...props} />);

    wrapper
      .find('button')
      .at(1)
      .simulate('click');

    expect(wrapper.find('tr').length).toBe(1);
  });
});
