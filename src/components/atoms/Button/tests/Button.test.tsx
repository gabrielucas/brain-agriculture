import { act, fireEvent, render } from '@testing-library/react';

import { Button } from '..';
import { DataTestId } from '../../../../test/enums';

describe('Given the <Button /> component', () => {
  describe('When the button is clicked', () => {
    test('Then check if the onClick function was called', () => {
      const onClick = jest.fn();

      const { getByTestId } = render(<Button onClick={onClick} />);

      const ButtonComponent = getByTestId(DataTestId.DEFAULT_BUTTON);

      act(() => {
        fireEvent.click(ButtonComponent);
      });

      expect(onClick).toHaveBeenCalled();
    });
  });
});
