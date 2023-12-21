import { act, fireEvent, render } from '@testing-library/react';
import { faker } from '@faker-js/faker';

import { InputText } from '..';

jest.mock('@unform/core', () => ({
  ...jest.requireActual('@unform/core'),
  useField: () => ({
    fieldName: '',
    registerField: jest.fn(),
  }),
}));

describe('Given the <InputText /> component', () => {
  describe('When the component is rendered', () => {
    test('Then check if it is displayed on screen', () => {
      const { getByRole } = render(<InputText name="inputName" />);

      const InputComponent = getByRole('textbox');

      expect(InputComponent).toBeInTheDocument();
    });
  });

  describe('When the user enters a new value', () => {
    test('Then check if the value has changed', () => {
      const { getByRole } = render(<InputText name="inputName" />);

      const InputComponent = getByRole('textbox');

      const fakeValue = faker.string;

      act(() => {
        fireEvent.change(InputComponent, { target: { value: fakeValue } });
      });

      expect(InputComponent).toHaveValue(`${fakeValue}`);
    });
  });
});
