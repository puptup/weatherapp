import { CityPicker } from "@components/city-picker";
import { RenderDesiredScreen } from "@components/render-desired-screen";
import { useAppSelector } from "@hooks";
import { geopositionSelector } from "@store/selectors";
import React, { useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { shallowEqual } from "react-redux";

import { City, Country, Wrapper } from "./styled";

export const CountryAndCity = () => {
  const {
    city,
    country,
    geopositionState: state,
  } = useAppSelector(geopositionSelector, shallowEqual);

  const [popupShow, setPopupShow] = useState(false);

  const handleOpenPopup = () => {
    setPopupShow(true);
  };

  const handleClosePopup = useCallback(() => {
    setPopupShow(false);
  }, []);

  return (
    <>
      <Wrapper data-testid="country-and-city" onClick={handleOpenPopup}>
        <RenderDesiredScreen state={state}>
          <City data-testid="country-and-city-normal-state">
            {city}, <Country>{country}</Country>
          </City>
        </RenderDesiredScreen>
      </Wrapper>
      {popupShow && createPortal(<CityPicker handleClose={handleClosePopup} />, document.body)}
    </>
  );
};
