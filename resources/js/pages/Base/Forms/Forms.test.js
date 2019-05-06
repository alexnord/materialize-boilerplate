import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme/build';
import Forms from './Forms';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Forms />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('toggle clicks', () => {
  it('dropdowns without crashing', () => {
    const wrapper = mount(<Forms />);
    for (let i = 0; i < 4; i += 1) {
      let count = '';
      switch (i) {
      case i === 0:
        count = 'first';
        break;
      case i === 1:
        count = 'second';
        break;
      case i === 2:
        count = 'third';
        break;
      default:
        count = 'fourth';
        break;
      }
      const Dropdown = wrapper.find('button.dropdown-toggle')
        .at(i);
      Dropdown.simulate('click');
      expect(wrapper.state()[count])
        .toEqual(true);
    }
    wrapper.unmount();
  });
  it('collapse without crashing', () => {
    const wrapper = mount(<Forms />);
    const collapse = wrapper.find('button.btn-minimize')
      .at(0);
    collapse.simulate('click');
    expect(wrapper.state().collapse)
      .toEqual(false);
    collapse.simulate('click');
    expect(wrapper.state().collapse)
      .toEqual(true);
    wrapper.unmount();
  });
  it('fade without crashing', () => {
    const wrapper = mount(<Forms />);
    const fade = wrapper.find('button.btn-close')
      .at(0);
    fade.simulate('click');
    expect(wrapper.state().fadeIn)
      .toEqual(false);
    wrapper.unmount();
  });
});
