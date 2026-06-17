import "./CategoryFilter.scss";

type CategoryFilterProps<TCategory extends string> = {
  categories: TCategory[];
  categoryClassName: string;
  displayName: (category: TCategory) => string;
  selectedCategory: TCategory | null;
  setSelectedCategory: (category: TCategory | null) => void;
};

function CategoryFilter<TCategory extends string>(
  props: CategoryFilterProps<TCategory>
) {
  const {
    categories,
    categoryClassName,
    displayName,
    selectedCategory,
    setSelectedCategory,
  } = props;

  return (
    <div className="categoryFilter">
      {categories.map((category) => {
        const isActive = selectedCategory === category;

        return (
          <button
            aria-pressed={isActive}
            className={`label categoryFilterBadge ${categoryClassName} ${category} ${
              isActive ? "is-active" : ""
            }`}
            key={category}
            onClick={() => setSelectedCategory(isActive ? null : category)}
            type="button"
          >
            {displayName(category)}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
