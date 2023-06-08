import {createContext, useContext, useState} from "react";

const StateContext = createContext({
  user: null,
  token: null,
  notification: null,
  notificationError: null,
  setUser: () => {},
  setToken: () => {},
  setNotification: () => {},
  setNotificationError: () => {},
})

export const ContextProvider = ({children}) => {
  const [user, setUser] = useState({});
  const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
  const [notification, _setNotification] = useState('');
  const [notificationError, _setNotificationError] = useState('');

  const setToken = (token) => {
    _setToken(token)
    if (token) {
      localStorage.setItem('ACCESS_TOKEN', token);
    } else {
      localStorage.removeItem('ACCESS_TOKEN');
    }
  }

  const setNotification = (message) => {
    _setNotification(message);

    setTimeout(() => {
      _setNotification('')
    }, 5000)
  }

  const setNotificationError = (message) => {
    _setNotificationError(message);

    setTimeout(() => {
      _setNotificationError('')
    }, 5000)
  }

  return (
    <StateContext.Provider value={{
      user,
      setUser,
      token,
      setToken,
      notification,
      setNotification,
      notificationError,
      setNotificationError
    }}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateContext = () => useContext(StateContext);