import { FC, useCallback, useEffect, useRef, useState } from 'react';

import { Select } from '../../atoms/Forms/Select';
import { FormControl, InputLabel, MenuItem, SelectChangeEvent } from '@mui/material';

import { FormFieldsBaseContainer } from '../../FarmForm/styles';

import { IState } from '../../../data/@types/interfaces/IState';
import { ICity } from '../../../data/@types/interfaces/ICity';
import { ISelectHandles } from '../../atoms/Forms/Select/interfaces/ISelectHandles';

import { states as statesData } from '../../../data/location/states';
import { cities as citiesData } from '../../../data/location/cities';

export const Location: FC = () => {
  const [states, setStates] = useState<IState[]>([]);
  const [hasSelectedState, setHasSelectedState] = useState(false);
  const [cities, setCities] = useState<ICity[]>([]);

  const stateRef = useRef<ISelectHandles>(null);
  const cityRef = useRef<ISelectHandles>(null);

  const handleCitySelection = (event: SelectChangeEvent<unknown>) => {
    cityRef.current?.selectChange(event);
  };

  const filterCities = useCallback((uf: string) => {
    setCities(citiesData);
    setCities((cities) => cities.filter((city) => city.uf === uf));
  }, []);

  const handleStateSelection = useCallback(
    (event: SelectChangeEvent<unknown>) => {
      stateRef.current?.selectChange(event);
      filterCities(String(event.target.value));
      setHasSelectedState(true);
    },
    [filterCities],
  );

  useEffect(() => setStates(statesData), []);

  return (
    <FormFieldsBaseContainer>
      <FormControl>
        <InputLabel id="state">Selecione o estado</InputLabel>
        <Select
          id="state"
          labelId="state"
          label="Selecione o estado"
          name="state"
          onChange={handleStateSelection}
          ref={stateRef}
        >
          {states.map((state) => {
            return (
              <MenuItem key={state.uf} value={state.uf}>
                {state.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel id="city">Selecione a cidade</InputLabel>
        <Select
          disabled={!hasSelectedState}
          id="city"
          labelId="city"
          label="Selecione a cidade"
          name="city"
          onChange={handleCitySelection}
          ref={cityRef}
        >
          {cities.map((city) => {
            return (
              <MenuItem key={city.id} value={city.name}>
                {city.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </FormFieldsBaseContainer>
  );
};
