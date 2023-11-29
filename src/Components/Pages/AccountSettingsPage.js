import AccountSettings from "../AccountSettings/AccountSettings";
import HeaderAfterLogin from "../MainContent/HeaderMainPage";

const AccountSettingsPage = ({
  setLoggedInUser,
  loggedInUser,
  isAuthenticated,
  setIsAuthenticated,
}) => {
  return (
    <>
      <HeaderAfterLogin
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <AccountSettings
        setLoggedInUser={setLoggedInUser}
        loggedInUser={loggedInUser}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <p className="version">Senast uppdaterad: 29/11/2023</p>
    </>
  );
};

export default AccountSettingsPage;
