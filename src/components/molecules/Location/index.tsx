import { FC, useCallback, useEffect, useState } from 'react';

import { Select } from '../../atoms/Forms/Select';
import { FormControl, InputLabel, MenuItem, SelectChangeEvent } from '@mui/material';

import { FormFieldsBaseContainer } from '../../FarmForm/styles';

import { IState } from '../../../data/@types/interfaces/IState';
import { ICity } from '../../../data/@types/interfaces/ICity';

import { states as statesData } from '../../../data/location/states';
import { cities as citiesData } from '../../../data/location/cities';

export const Location: FC = () => {
  const [states, setStates] = useState<IState[]>([]);
  const [hasSelectedState, setHasSelectedState] = useState(false);
  const [cities, setCities] = useState<ICity[]>([]);

  const filterCities = useCallback((uf: string) => {
    setCities(citiesData);
    setCities((cities) => cities.filter((city) => city.uf === uf));
  }, []);

  const handleStateSelection = useCallback(
    (event: SelectChangeEvent<unknown>) => {
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
        <Select id="state" labelId="state" label="Selecione o estado" name="state" onChange={handleStateSelection}>
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
        <Select disabled={!hasSelectedState} id="city" labelId="city" label="Selecione a cidade" name="city">
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
