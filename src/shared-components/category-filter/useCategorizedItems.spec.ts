import { useCategorizedItems } from "./useCategorizedItems";

type TestCategory = "primary" | "secondary" | "missing";

const items: { category: TestCategory; path: string; title: string }[] = [
  {
    category: "primary",
    path: "/first",
    title: "First",
  },
  {
    category: "secondary",
    path: "/second",
    title: "Second",
  },
  {
    category: "primary",
    path: "/third",
    title: "Third",
  },
];

describe("useCategorizedItems", () => {
  test("returns the first item as latest and the rest as remaining without a selected category", () => {
    const result = useCategorizedItems<TestCategory, (typeof items)[number]>(
      items,
      null,
    );

    expect(result.filteredItems).toEqual(items);
    expect(result.latestItem).toEqual(items[0]);
    expect(result.remainingItems).toEqual([items[1], items[2]]);
  });

  test("filters by selected category before choosing latest and remaining items", () => {
    const result = useCategorizedItems<TestCategory, (typeof items)[number]>(
      items,
      "primary",
    );

    expect(result.filteredItems).toEqual([items[0], items[2]]);
    expect(result.latestItem).toEqual(items[0]);
    expect(result.remainingItems).toEqual([items[2]]);
  });

  test("returns no latest item when a selected category has no matches", () => {
    const result = useCategorizedItems<TestCategory, (typeof items)[number]>(
      items,
      "missing",
    );

    expect(result.filteredItems).toEqual([]);
    expect(result.latestItem).toBeUndefined();
    expect(result.remainingItems).toEqual([]);
  });
});
