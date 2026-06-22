import CategorizedPreviewTile from "./CategorizedPreviewTile";
import { TileProps } from "./BaseTile";

import {
  UsefulToolCategory,
  UsefulToolCategoryDisplayName,
} from "../../screens/code/useful-tools-and-code/usefulToolCategories";

import "../../screens/code/useful-tools-and-code/UsefulToolCategoryLabel.scss";

type _UsefulToolPreviewTileProps = Omit<TileProps, "kind">;

type UsefulToolPreviewTileProps = _UsefulToolPreviewTileProps & {
  category: UsefulToolCategory;
  teaser: string;
  title: string;
};

function UsefulToolPreviewTile(props: UsefulToolPreviewTileProps) {
  const { category, route, teaser, title, ...otherProps } = props;

  return (
    <CategorizedPreviewTile
      category={category}
      categoryClassName="usefulToolCategoryLabel"
      displayName={UsefulToolCategoryDisplayName}
      previewClassName="usefulToolPreview"
      route={route}
      teaser={teaser}
      title={title}
      {...otherProps}
    />
  );
}

export default UsefulToolPreviewTile;
