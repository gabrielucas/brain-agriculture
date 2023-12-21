import { renderHook } from '@testing-library/react-hooks';
import { useReduceFarmList } from '../useReduceFarmList';
import { mockFarmDataToTesting, mockFarmsByPlantedCrop, mockFarmsByState, mockLandUseData } from './mockData.constants';

describe('Given #useReduceFarmList hook', () => {
  describe('When to provide a farm registration list', () => {
    test('Then must provide the calculated value of the total number of farms per state', () => {
      const { result } = renderHook(() => useReduceFarmList({ farms: mockFarmDataToTesting }));

      expect(result.current.totalFarmsNumberByState).toStrictEqual(mockFarmsByState);
    });

    test('Then must calculate the total number of farms per crop planted', () => {
      const { result } = renderHook(() => useReduceFarmList({ farms: mockFarmDataToTesting }));

      expect(result.current.totalFarmsNumberByCrop).toStrictEqual(mockFarmsByPlantedCrop);
    });

    test('Then must correctly provide the total value of arable area and vegetation area', () => {
      const { result } = renderHook(() => useReduceFarmList({ farms: mockFarmDataToTesting }));

      expect(result.current.landUseData).toStrictEqual(mockLandUseData);
    });
  });
});
