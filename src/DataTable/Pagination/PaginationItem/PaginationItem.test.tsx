import React from 'react';
import { mount, shallow } from 'enzyme';
import { PaginationItem, IPaginationItemProps } from './PaginationItem';

describe('PaginationItem', () => {
  let props: IPaginationItemProps;

  beforeEach(() => {
    props = {
      isSelected: false,
      onChange: jest.fn(),
      pageNumber: 0
    };
  });

  it('renders without crashing', () => {
    const component = shallow(<PaginationItem {...props} />);

    expect(component).toMatchSnapshot();
  });

  it('calls a function when button clicked', () => {
    const component = mount(<PaginationItem {...props} />);

    component.find('button').simulate('click');

    expect(props.onChange).toHaveBeenCalled();
  });

  it('add a class to button when is current page', () => {
    const component = mount(<PaginationItem {...props} />);

    component.setProps({
      isSelected: true
    });

    expect(component.find('button').hasClass('button-outline')).toBe(true);
  });
});
