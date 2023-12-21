import { render } from '@testing-library/react';

import { FarmForm } from '..';
import { DataTestId } from '../../../../test/enums';
import { INITIAL_FARM_FORM_DATA } from '../constants';
import { defaultProviderWrapper } from '../../../../test/helpers/defaultProviderWrapper';

jest.mock('@unform/core', () => ({
  ...jest.requireActual('@unform/core'),
  useField: () => ({
    fieldName: '',
    registerField: jest.fn(),
  }),
}));

describe('Given the <FarmForm /> component', () => {
  describe('When the component is rendered', () => {
    test('Then check if it is displayed on screen', () => {
      const { getByTestId } = render(<FarmForm />, { wrapper: defaultProviderWrapper });

      const FarmFormComponent = getByTestId(DataTestId.FARM_FORM_CONTAINER);
      const StateComponent = getByTestId(DataTestId.STATE_FIELD);
      const CityComponent = getByTestId(DataTestId.CITY_FIELD);

      expect(FarmFormComponent).toBeInTheDocument();
      expect(CityComponent).toBeInTheDocument();
      expect(StateComponent).toBeInTheDocument();
    });

    test('Then the form fields must not be filled in', () => {
      const { getByTestId } = render(<FarmForm />, { wrapper: defaultProviderWrapper });

      const FarmFormComponent = getByTestId(DataTestId.FARM_FORM_CONTAINER) as HTMLFormElement;

      expect(FarmFormComponent).toHaveFormValues({
        ...INITIAL_FARM_FORM_DATA,
        arableArea: null,
        totalArea: null,
        vegetationArea: null,
      });
    });
  });
});
