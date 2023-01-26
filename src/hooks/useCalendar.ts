import { apiCalendar } from "@services/api/calendar";
import { loadEvents } from "@store/actions-creators/index";
import { setLoading, setLoggedIn, setLoggedOut } from "@store/reducers/calendar-slice";
import { useDispatch } from "react-redux";

export const useCalendar = () => {
  const dispatch = useDispatch();

  const handleSignIn = () => {
    apiCalendar.handleAuthClick();
    dispatch(setLoading());
    apiCalendar.tokenClient.callback = ({
      access_token,
      token_type,
    }: {
      access_token: string;
      token_type: string;
    }) => {
      dispatch(setLoggedIn([token_type, access_token].join(" ")));
      dispatch(loadEvents());
    };
  };

  const handleSignOut = () => {
    apiCalendar.handleSignoutClick();
    dispatch(setLoggedOut());
  };

  return {
    handleSignIn,
    handleSignOut,
  };
};
