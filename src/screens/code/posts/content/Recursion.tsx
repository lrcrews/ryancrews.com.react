import { CodeSnippet } from "../../../../shared-components";
import PostWrapper from "../PostWrapper";
import { PostCategory } from "../postCategories";

function RecursionScreen() {
  return (
    <PostWrapper
      category={PostCategory.TheArt}
      subTitle="Solving a problem by solving a smaller version of it"
      title="Recursion"
    >
      <h3>tl;dr</h3>
      <p>
        Recursion is when a function calls itself, but on a smaller piece of
        the same problem. It works well when the task naturally repeats in
        layers, as long as you know when to stop.
      </p>

      <h3>ELI5</h3>
      <p>
        Imagine a stack of nesting dolls. To see the smallest one, you open the
        big doll, then the next one, then the next one, all using the same
        move. Recursion is code doing that same repeated move until it reaches
        the tiniest doll, then working its way back out.
      </p>

      <h3>Why though?</h3>
      <p>
        The big benefit is clarity. Some problems, like walking a tree or
        searching nested folders, are easier to describe as "do the same thing
        again on the smaller part." That can make the code feel direct and
        easier to reason about.
      </p>
      <p>
        The drawback is that recursive code can be harder to trace if the stop
        condition is fuzzy. If you forget the base case, or make it too broad,
        the function keeps calling itself until it blows up.
      </p>
      <CodeSnippet label="pseudo-code">
        {`sum(list):
  if list is empty:
    return 0

  return first(list) + sum(rest(list))`}
      </CodeSnippet>
      <p>
        The base case is the empty list. Every other call gets a smaller list,
        so the function eventually stops instead of falling forever.
      </p>

      <h3>What's cool is...</h3>
      <p>
        Recursion shows up in places that feel very real: rendering nested
        comments, crawling directories, evaluating expression trees, and parsing
        menus with submenus inside submenus.
      </p>
      <CodeSnippet label="pseudo-code">
        {`renderComments(comment):
  show(comment.message)

  for each reply in comment.replies:
    renderComments(reply)`}
      </CodeSnippet>
      <p>
        That example scales without changing the shape of the code. Whether a
        comment has one reply or fifty layers of replies, the function stays
        the same. That is the nice part: recursive code can match the structure
        of the thing you are modeling.
      </p>
    </PostWrapper>
  );
}

export default RecursionScreen;
