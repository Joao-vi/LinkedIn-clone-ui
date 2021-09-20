import { StyledFeed } from "./styles";

import { Post } from "../post";

export function Feed() {
  return (
    <StyledFeed>
      <Post />
      <Post />
      <Post />
    </StyledFeed>
  );
}
