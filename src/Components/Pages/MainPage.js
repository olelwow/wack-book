import HeaderAfterLogin from "../HeaderMainPage";
import FriendsStack from "../FriendsSection";
import CreateNewPost from "../CreatePosts";



export const MainPage = () => {
  return (
    <>
      <HeaderAfterLogin />
      <FriendsStack />
      <CreateNewPost />
    </>
  );
};
