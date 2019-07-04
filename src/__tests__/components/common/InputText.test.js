import React from 'react';
import { shallow } from 'enzyme';

import { InputText } from '../../../components/common';

describe('InputText component', () => {
  let component;
  let props;

  beforeEach(() => {
    // fake props
    props = {
      name: 'nome',
      value: 'Luiz',
      onChange: jest.fn(),
    }
    // monta o componente
    component = shallow(<InputText {...props} />);
  });

  test('deve ter um input', () => {
    // espera que tenha 1 elemento input
    // o find busca um elemento no component
    expect(component.find('input').length).toBe(1)
  });

  test('deve ter dado proptype text para o input', () => {
    expect(component.find('input').prop('type')).toBe('text');
  });

  test('deve ter dado prop name ao input', () => {
    expect(component.find('input').prop('name')).toBe(props.name);
  });

  test('deve ter dado prop value ao input', () => {
    expect(component.find('input').prop('value')).toBeDefined();
    expect(component.find('input').prop('value')).toBe(props.value);
  });

  test('deve ter dado prop onChange ao input', () => {
    expect(component.find('input').prop('onChange')).toBeDefined();
    expect(component.find('input').prop('onChange')).toBe(props.onChange);
  });

  test('deve ter um label', () => {
    expect(component.find('label').length).toBe(1);
    expect(component.find('div').children().first().html()).toBe('label')
  });
});
