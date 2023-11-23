import HeaderAfterLogin from "../HeaderMainPage";
import FriendsStack from "../FriendsSection";
import CreateNewPost from "../CreatePosts";



export const MainPage = ({setLoggedInUser, loggedInUser}) => {
  return (
    <>
      <HeaderAfterLogin />
      <FriendsStack />
      <CreateNewPost setLoggedInUser={setLoggedInUser} loggedInUser={loggedInUser} />
      
    </>
  );
};
