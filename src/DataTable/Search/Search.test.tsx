import React from 'react';
import { mount, shallow } from 'enzyme';
import { Search, ISearchProps } from './Search';

describe('Search', () => {
  let props: ISearchProps;

  beforeEach(() => {
    props = {
      value: '',
      handleChange: jest.fn()
    };
  });

  it('renders without crashing', () => {
    const component = shallow(<Search {...props} />);

    expect(component).toMatchSnapshot();
  });

  it('calls a function when button clicked', () => {
    const component = mount(<Search {...props} />);

    component.find('input').simulate('change');

    expect(props.handleChange).toHaveBeenCalled();
  });
});
