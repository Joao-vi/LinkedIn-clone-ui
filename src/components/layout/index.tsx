import { StyledLayout } from "./styles";

import { Header } from "../header";
import { NewPost } from "../NewPost";
import { Profile } from "../profile";
import { Feed } from "../feed";
import { RigthSide } from "../rigthSide";

export function Layout() {
  return (
    <>
      <Header />
      <StyledLayout>
        <Profile />
        <NewPost />
        <Feed />
        <RigthSide />
      </StyledLayout>
    </>
  );
}
