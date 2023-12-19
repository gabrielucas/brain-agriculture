import { FC, useCallback, useEffect, useState } from 'react';

import { Select } from '../../atoms/Forms/Select';
import { FormControl, InputLabel, MenuItem, SelectChangeEvent } from '@mui/material';

import { ICity } from '../../../data/@types/interfaces/ICity';
import { IState } from '../../../data/@types/interfaces/IState';
import { IFarmFormBaseProps } from '../../organisms/FarmForm/interfaces/IFarmFormBaseProps';

import { states as statesData } from '../../../data/location/states';
import { cities as citiesData } from '../../../data/location/cities';

import { FormFieldsBaseContainer } from '../../organisms/FarmForm/styles';

export const Location: FC<IFarmFormBaseProps> = ({ farm }) => {
  const [cities, setCities] = useState<ICity[]>([]);
  const [states] = useState<IState[]>(statesData);
  const [hasSelectedState, setHasSelectedState] = useState(false);

  const [selectedCity, setSelectedCity] = useState(farm?.city || '');
  const [selectedState, setSelectedState] = useState(farm?.state || '');

  const filterCities = useCallback((uf: string) => {
    const filteredCities = citiesData.filter((city) => city.uf === uf);
    setCities(filteredCities);
  }, []);

  const handleStateSelection = useCallback(
    (event: SelectChangeEvent<unknown>) => {
      const selectedOption = String(event.target.value);

      setHasSelectedState(true);
      setSelectedState(selectedOption);
      filterCities(selectedOption);
    },
    [filterCities],
  );

  useEffect(() => {
    if (farm?.state) {
      setHasSelectedState(true);
      filterCities(farm?.state);
    }
  }, [farm, filterCities]);

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
          value={selectedState}
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
          onChange={(event) => setSelectedCity(String(event.target.value))}
          value={selectedCity}
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
