import BaseTile, { TileKind, TileProps } from "./BaseTile";

type CategorizedPreviewTileProps<TCategory extends string> = Omit<
  TileProps,
  "kind"
> & {
  category: TCategory;
  categoryClassName?: string;
  displayName: (category: TCategory) => string;
  previewClassName: string;
  teaser: string;
  title: string;
};

function CategorizedPreviewTile<TCategory extends string>(
  props: CategorizedPreviewTileProps<TCategory>,
) {
  const {
    category,
    categoryClassName,
    displayName,
    previewClassName,
    route,
    teaser,
    title,
    ...otherProps
  } = props;
  const labelClassName = ["label", categoryClassName, category]
    .filter(Boolean)
    .join(" ");

  return (
    <BaseTile kind={TileKind.PostPreview} route={route} {...otherProps}>
      <div className={`${previewClassName} ${category}`}>
        <div className="headline">{title}</div>
        <div className="teaser">
          <div className={labelClassName}>{displayName(category)}</div>
          <div className="text">{teaser}</div>
        </div>
      </div>
    </BaseTile>
  );
}

export default CategorizedPreviewTile;
