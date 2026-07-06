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
      <p>Recursion is a function calling itself.</p>

      <h3>ELI5</h3>
      <p>
        Imagine a stack of nesting dolls. To see the smallest one, you open the
        biggest doll, then the next one, then the next one, using the same
        "move" to open each one. Recursion is code doing that same repeated
        "move" until it reaches the tiniest doll.
      </p>
      <p>
        <img
          src="https://media1.tenor.com/m/a4yDwGZk4k4AAAAd/dj-khaled-another-one.gif"
          alt="Dj Khaled Another One GIF"
        />
      </p>

      <h3>Why though?</h3>
      <p>
        Readability of code. Certain tasks, like searching nested folders, are
        easier to describe as "do the same thing again on the smaller part."
        Using recursion for those tasks can make the code more concise and
        easier to understand.
      </p>
      <p>
        The drawback is that recursive code can be harder to trace through if
        the stop condition is at all unclear. If you forget the base case, or
        make it too broad, the function keeps calling itself until it blows up
        🤯
      </p>
      <p>
        Here's a pseudo-code example where the base case is the empty list.
        Every other call gets a smaller list, so the function eventually stops
        instead of falling forever, and in the end it returns the sum of the
        list's values.
      </p>
      <CodeSnippet label="pseudo-code">
        {`sum(list):
  if list is empty:
    return 0

  return first(list) + sum(rest(list))`}
      </CodeSnippet>
      <p>
        For comparison, here's a non-recursive version of the same function. It
        uses a loop to keep track of the sum, instead of calling itself.
      </p>
      <CodeSnippet label="pseudo-code">
        {`sum(list):
  total = 0

  for each value in list:
    total += value

  return total`}
      </CodeSnippet>
      <p>
        Both functions do the same thing, and with such a trivial example they
        don't look that different from eachother. But even at this scale we can
        notice that the recursive version is using less code / variables to
        handle the same task.
      </p>
      <p>
        The recursive version also states what it is doing more directly, "add
        the first value in the list to the sum of the rest of the values in the
        list." The non-recursive version is more focused on how to do it, and
        would require more mental effort to read / trace through on a more
        complex task.
      </p>

      <h3>What's cool is...</h3>
      <p>
        Recursion is great for things like rendering nested comments, crawling
        directories, evaluating trees, parsing menus with submenus inside
        submenus (inside submenus).
      </p>
      <p>
        Some programmers also find it great for naming things, like "PHP", which
        stands for "PHP: Hypertext Preprocessor", which then recursively is
        "PHP: Hypertext Preprocessor: Hypertext Preprocessor", and so on 🤣
      </p>
      <p>
        Here's a more concrete / useful (pseudo-code) example of recursion,
        where a comment can have replies, and those replies can have replies,
        and so on:
      </p>
      <CodeSnippet label="pseudo-code">
        {`renderComments(comment):
  show(comment.message)

  for each reply in comment.replies:
    renderComments(reply)`}
      </CodeSnippet>
      <p>
        That example scales without changing the shape of the code. A comment
        could have one reply or fifty nested replies (Reddit gets crazy
        sometimes), in any case the function stays the same.{" "}
        <b>That's the cool part:</b> that tiny bit of code handles a lot while
        staying simple and readable.
      </p>
    </PostWrapper>
  );
}

export default RecursionScreen;
