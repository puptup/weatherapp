import { CityPicker } from "@components/city-picker";
import { useAppSelector } from "@hooks";
import { geopositionSelector } from "@store/selectors";
import React, { useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { shallowEqual } from "react-redux";

import { City, Country, Wrapper } from "./styled";

export const CountryAndCity = () => {
  const { isLoading, hasError, city, country } = useAppSelector(geopositionSelector, shallowEqual);
  const [popupShow, setPopupShow] = useState(false);
  const handleOpenPopup = () => {
    setPopupShow(true);
  };

  const handleClosePopup = useCallback(() => {
    setPopupShow(false);
  }, []);

  if (hasError) {
    return <div>Something went wrong...</div>;
  }

  return (
    <>
      <Wrapper onClick={handleOpenPopup}>
        {isLoading ? (
          <div>Spinner...</div>
        ) : (
          <City>
            {city}, <Country>{country}</Country>
          </City>
        )}
      </Wrapper>
      {popupShow && createPortal(<CityPicker handleClose={handleClosePopup} />, document.body)}
    </>
  );
};
