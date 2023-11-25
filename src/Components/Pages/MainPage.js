import HeaderAfterLogin from "../MainContent/HeaderMainPage";
import FriendsStack from "../MainContent/FriendsSection";
import CreateNewPost from "../MainContent/CreatePosts";

export const MainPage = ({ setLoggedInUser, loggedInUser }) => {
  return (
    <>
      <HeaderAfterLogin />
      <FriendsStack />
      <CreateNewPost
        setLoggedInUser={setLoggedInUser}
        loggedInUser={loggedInUser}
      />
    </>
  );
};
