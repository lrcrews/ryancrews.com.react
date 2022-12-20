import BaseTile, { TileKind, TileProps } from "./BaseTile";

type FullImageTileProps = Omit<TileProps, "kind">;

function FullImageTile(props: FullImageTileProps) {
  const { route, children, ...otherProps } = props;

  return (
    <BaseTile kind={TileKind.FullImage} route={route} {...otherProps}>
      {children}
    </BaseTile>
  );
}

export default FullImageTile;
