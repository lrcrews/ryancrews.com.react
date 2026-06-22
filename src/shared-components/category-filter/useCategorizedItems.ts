export function useCategorizedItems<
  TCategory extends string,
  TItem extends { category: TCategory; path: string },
>(items: TItem[], selectedCategory: TCategory | null) {
  const filteredItems = selectedCategory
    ? items.filter((item) => item.category === selectedCategory)
    : items;
  const latestItem = filteredItems[0];
  const remainingItems = latestItem
    ? filteredItems.filter((item) => item.path !== latestItem.path)
    : filteredItems;

  return { filteredItems, latestItem, remainingItems };
}
