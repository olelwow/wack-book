import AccountSettings from "../AccountSettings";
import HeaderAfterLogin from "../HeaderMainPage";

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
