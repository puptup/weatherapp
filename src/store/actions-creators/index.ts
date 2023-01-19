import {
  CITY_CHANGED,
  FETCH_GEOPOSITION,
  INITIAL_APP,
  LOAD_EVENTS_FROM_CALENDAR,
  SET_DAY,
} from "@store/actions";
import { MatchedCitiesType } from "@types";

import { MATCH_CITY } from "../actions/index";

export const fetchGeoposition = () => ({ type: FETCH_GEOPOSITION });

export const initialApp = () => ({ type: INITIAL_APP });

export const setDayAction = (day: Date) => ({ type: SET_DAY, payload: day });

export const loadEvents = () => ({ type: LOAD_EVENTS_FROM_CALENDAR });

export const matchCity = (preffix: string) => ({ type: MATCH_CITY, payload: preffix });

export const changeCity = (matched: MatchedCitiesType) => ({
  type: CITY_CHANGED,
  payload: matched,
});
