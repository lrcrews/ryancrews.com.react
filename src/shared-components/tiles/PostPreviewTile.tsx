import CategorizedPreviewTile from "./CategorizedPreviewTile";
import { TileProps } from "./BaseTile";

import {
  PostCategory,
  PostCategoryDisplayName,
} from "../../screens/code/posts/postCategories";

type _PostPreviewTileProps = Omit<TileProps, "kind">;

type PostPreviewTileProps = _PostPreviewTileProps & {
  category: PostCategory;
  teaser: string;
  title: string;
};

function PostPreviewTile(props: PostPreviewTileProps) {
  const { category, route, teaser, title, ...otherProps } = props;

  return (
    <CategorizedPreviewTile
      category={category}
      displayName={PostCategoryDisplayName}
      previewClassName="postPreview"
      route={route}
      teaser={teaser}
      title={title}
      {...otherProps}
    />
  );
}

export default PostPreviewTile;
