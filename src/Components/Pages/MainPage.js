import HeaderAfterLogin from "../MainContent/HeaderMainPage";
import FriendsStack from "../MainContent/FriendsSection";
import CreateNewPost from "../MainContent/CreatePosts";

export const MainPage = ({
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
      <FriendsStack />
      <CreateNewPost
        setLoggedInUser={setLoggedInUser}
        loggedInUser={loggedInUser}
      />
      <p className="version">Senast uppdaterad: 29/11/2023</p>
    </>
  );
};
