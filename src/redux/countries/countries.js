import Africa from '../../images/Africa.png';
import Asia from '../../images/asia.png';
import Oceania from '../../images/oceania.png';
import Europe from '../../images/europe.png';
import Northamerica from '../../images/northamerica.png';
import Southamerica from '../../images/southamerica.png';

const continentState = [
  {
    name: 'Africa',
    classname: 'Africa',
    map: Africa,
    number: 55,
  },
  {
    name: 'Asia',
    classname: 'Asia',
    map: Asia,
    number: 54,
  },
  {
    name: 'Oceania',
    classname: 'Australia-Oceania',
    map: Oceania,
    number: 25,
  },
  {
    name: 'Europe',
    classname: 'Europe',
    map: Europe,
    number: 27,
  },
  {
    name: 'North America',
    classname: 'North-America',
    map: Northamerica,
    number: 3,
  },
  {
    name: 'South America',
    classname: 'South-America',
    map: Southamerica,
    number: 12,
  },
];

export const ContinentReducer = (state = continentState) => state;

const GET_STATS = 'covid/GET_STATS';
const initialState = [];

export const GetStates = (payload) => ({
  type: GET_STATS,
  payload,
});

export const StatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
