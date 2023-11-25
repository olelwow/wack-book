import AccountSettings from "../AccountSettings/AccountSettings";
import HeaderAfterLogin from "../MainContent/HeaderMainPage";

const AccountSettingsPage = ({ setLoggedInUser, loggedInUser }) => {
  return (
    <>
      <HeaderAfterLogin />
      <AccountSettings
        setLoggedInUser={setLoggedInUser}
        loggedInUser={loggedInUser}
      />
    </>
  );
};

export default AccountSettingsPage;
