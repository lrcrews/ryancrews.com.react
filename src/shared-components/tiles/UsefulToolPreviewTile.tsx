import BaseTile, { TileKind, TileProps } from "./BaseTile";

import {
  UsefulToolCategory,
  UsefulToolCategoryDisplayName,
} from "../../screens";

import "../../screens/code/useful-tools-and-code/UsefulToolCategoryLabel.scss";

type _UsefulToolPreviewTileProps = Omit<TileProps, "kind">;

type UsefulToolPreviewTileProps = _UsefulToolPreviewTileProps & {
  category: UsefulToolCategory;
  teaser: string;
  title: string;
};

function UsefulToolPreviewTile(props: UsefulToolPreviewTileProps) {
  const { category, route, teaser, title, children, ...otherProps } = props;

  return (
    <BaseTile kind={TileKind.PostPreview} route={route} {...otherProps}>
      <div className={`usefulToolPreview ${category}`}>
        <div className="headline">{title}</div>
        <div className="teaser">
          <div className={`label usefulToolCategoryLabel ${category}`}>
            {UsefulToolCategoryDisplayName(category)}
          </div>
          <div className="text">{teaser}</div>
        </div>
      </div>
    </BaseTile>
  );
}

export default UsefulToolPreviewTile;
