import { render } from '@testing-library/react';

import { Counter } from '..';
import { DataTestId } from '../../../../test/enums';
import { defaultProviderWrapper } from '../../../../test/helpers/defaultProviderWrapper';

describe('Given the <Counter /> component', () => {
  describe('When the component is rendered', () => {
    test('Then check if it is displayed on screen', () => {
      const { getByTestId } = render(<Counter />, { wrapper: defaultProviderWrapper });

      const CounterComponent = getByTestId(DataTestId.COUNTER_CONTAINER);

      expect(CounterComponent).toBeInTheDocument();
    });

    test('Then check the component default texts', () => {
      const { getByTestId } = render(<Counter />, { wrapper: defaultProviderWrapper });

      const CounterComponent = getByTestId(DataTestId.COUNTER_CONTAINER);

      expect(CounterComponent).toHaveTextContent('Total de fazendas');
      expect(CounterComponent).toHaveTextContent(`${5}`);
      expect(CounterComponent).toHaveTextContent('Área total');
      expect(CounterComponent).toHaveTextContent(`${9164}`);
    });
  });
});
