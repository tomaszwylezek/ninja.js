import React from 'react';
import { shallow } from 'enzyme';
import { Row, IRowProps } from './Row';
import { getRows } from '../../mocks';

describe('Row', () => {
  let props: IRowProps;

  beforeEach(() => {
    props = {
      row: getRows()[0]
    };
  });

  it('renders without crashing', () => {
    const component = shallow(<Row {...props} />);

    expect(component).toMatchSnapshot();
  });
});
