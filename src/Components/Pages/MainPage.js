import HeaderAfterLogin from "../MainContent/HeaderMainPage";
import FriendsStack from "../MainContent/FriendsSection";
import CreateNewPost from "../MainContent/CreatePosts";

export const MainPage = ({ setLoggedInUser, loggedInUser, isAuthenticated, setIsAuthenticated }) => {
  return (
    <>
      <HeaderAfterLogin isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}/>
      <FriendsStack />
      <CreateNewPost
        setLoggedInUser={setLoggedInUser}
        loggedInUser={loggedInUser}
      />
    </>
  );
};
