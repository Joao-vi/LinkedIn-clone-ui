import { StyledLayout } from "./styles";

import { Header } from "../header";
import { NewPost } from "../NewPost";
import { Profile } from "../profile";
import { Feed } from "../feed";

export function Layout() {
  return (
    <>
      <Header />
      <StyledLayout>
        <Profile />
        <NewPost />
        <Feed />
      </StyledLayout>
    </>
  );
}
