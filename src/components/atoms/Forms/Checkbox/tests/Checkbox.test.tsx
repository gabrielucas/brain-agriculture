import { render } from '@testing-library/react';

import { Checkbox } from '..';
import { DataTestId } from '../../../../../../test/enums';

jest.mock('@unform/core', () => ({
  ...jest.requireActual('@unform/core'),
  useField: () => ({
    fieldName: '',
    registerField: jest.fn(),
  }),
}));

describe('Given the <Checkbox /> component', () => {
  describe('When the componente is rendered', () => {
    test('Then check if it is displayed on screen', () => {
      const { getByTestId } = render(<Checkbox name="checkboxName" />);

      const CheckboxComponent = getByTestId(DataTestId.CHECKBOX_INPUT);

      expect(CheckboxComponent).toBeInTheDocument();
    });
  });
});
