import AccountSettings from "../AccountSettings/AccountSettings";
import HeaderAfterLogin from "../MainContent/HeaderMainPage";

const AccountSettingsPage = ({ setLoggedInUser, loggedInUser, isAuthenticated, setIsAuthenticated }) => {
  return (
    <>
      <HeaderAfterLogin isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}/>
      <AccountSettings
        setLoggedInUser={setLoggedInUser}
        loggedInUser={loggedInUser}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
    </>
  );
};

export default AccountSettingsPage;
