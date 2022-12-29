import BaseTile, { TileKind, TileProps } from "./BaseTile";

import { PostCategory, PostCategoryDisplayName } from "../../screens";

type _PostPreviewTileProps = Omit<TileProps, "kind">;

type PostPreviewTileProps = _PostPreviewTileProps & {
  category: PostCategory;
  teaser: string;
  title: string;
};

function PostPreviewTile(props: PostPreviewTileProps) {
  const { category, route, teaser, title, children, ...otherProps } = props;

  return (
    <BaseTile kind={TileKind.PostPreview} route={route} {...otherProps}>
      <div className={`postPreview ${category}`}>
        <div className="headline">{title}</div>
        <div className="teaser">
          <div className={`label ${category}`}>
            {PostCategoryDisplayName(category)}
          </div>
          <div className="text">{teaser}</div>
        </div>
      </div>
    </BaseTile>
  );
}

export default PostPreviewTile;
