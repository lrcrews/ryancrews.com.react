import "./ArtPost.scss";

import PostWrapper from "../PostWrapper";
import { PostCategory } from "../PostsHome";

function ArtPostScreen() {
  return (
    <PostWrapper
      category={PostCategory.TheArt}
      subTitle="A CSS study of Hokusai's famous wave"
      title="Art post"
    >
      <p>
        This post recreates the issue reference with plain HTML and SCSS instead
        of shipping a static image.
      </p>
      <p>
        The structure stays intentionally simple: a warm paper background, a
        few layered wave bodies, cream foam caps, two boats, a tiny Mount Fuji,
        and a floating cloud to pull the composition back to the right.
      </p>
      <div
        aria-label="A stylized CSS illustration inspired by The Great Wave with cresting blue water, boats, a cloud, and Mount Fuji."
        className="art-post-wave"
        role="img"
      >
        <div className="art-post-wave__label">
          <span>富嶽三十六景</span>
          <span>神奈川沖浪裏</span>
          <span>葛飾北斎為一</span>
        </div>
        <div className="art-post-wave__cloud" />
        <div className="art-post-wave__wave art-post-wave__wave--left" />
        <div className="art-post-wave__wave art-post-wave__wave--main" />
        <div className="art-post-wave__wave art-post-wave__wave--front" />
        <div className="art-post-wave__foam art-post-wave__foam--left" />
        <div className="art-post-wave__foam art-post-wave__foam--main" />
        <div className="art-post-wave__foam art-post-wave__foam--front" />
        <div className="art-post-wave__spray art-post-wave__spray--main" />
        <div className="art-post-wave__spray art-post-wave__spray--right" />
        <div className="art-post-wave__boat art-post-wave__boat--left" />
        <div className="art-post-wave__boat art-post-wave__boat--right" />
        <div className="art-post-wave__fuji" />
      </div>
      <p>
        It is not a pixel-for-pixel copy of the reference, but it keeps the
        same overall rhythm and palette while staying readable as CSS.
      </p>
    </PostWrapper>
  );
}

export default ArtPostScreen;
