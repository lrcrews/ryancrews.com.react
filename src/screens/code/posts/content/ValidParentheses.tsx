import { CodeSnippet } from "../../../../shared-components";
import PostWrapper from "../PostWrapper";
import { PostCategory } from "../postCategories";

function ValidParenthesesScreen() {
  return (
    <PostWrapper
      category={PostCategory.TheJob}
      subTitle="Using a stack to check whether brackets close in the right order"
      title="Valid Parentheses"
    >
      <p className="italic">
        This post is an AI generated post. It felt like a fun use of AI to
        generate a post about a common coding interview question once a week,
        just to (re)learn some things 🤓
      </p>
      <h3>The Question</h3>
      <p>
        This question usually asks whether a string made of brackets is valid.
        Every opening bracket must be closed by the same kind of bracket, and
        the pairs must close in the opposite order they opened.
      </p>
      <p>
        Common versions are: given <code>s = "()[]{}"</code>, return{" "}
        <code>true</code>; given <code>s = "([)]"</code>, return{" "}
        <code>false</code>. Some interviewers phrase it as checking whether an
        expression has balanced parentheses, brackets, and braces.
      </p>

      <h3>Stack Approach</h3>
      <p>
        The expected solution is a stack. Walk through the string from left to
        right. Push every opener. When you see a closer, the top of the stack
        must be the matching opener. If it is not, the string is invalid. At the
        end, the stack must be empty.
      </p>
      <CodeSnippet label="TypeScript">
        {`function isValid(s: string): boolean {
  const matchingOpeners: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  const stack: string[] = [];

  for (const char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
      continue;
    }

    const expectedOpener = matchingOpeners[char];

    if (!expectedOpener || stack.pop() !== expectedOpener) {
      return false;
    }
  }

  return stack.length === 0;
}`}
      </CodeSnippet>
      <p>
        The time complexity is O(n), because each character is processed once.
        The space complexity is O(n) in the worst case, such as a string of all
        opening brackets.
      </p>

      <h3>In-Place Stack Variant</h3>
      <p>
        In languages with mutable character arrays or mutable strings, another
        accepted variant reuses the input as the stack storage. Keep an index
        named something like <code>top</code>. Store openers at the front of the
        same buffer, then move <code>top</code> backward when a matching closer
        appears.
      </p>
      <p>
        That keeps the same O(n) runtime while reducing extra space to O(1), but
        it is not a natural fit for JavaScript or TypeScript strings because
        strings are immutable. In interviews, the regular stack version is the
        clear default unless the interviewer asks for constant extra space.
      </p>

      <h3>Other Variants</h3>
      <p>
        Some versions include non-bracket characters and ask you to ignore them.
        Others use the same idea inside expression parsing. The core invariant
        stays the same: the next closing bracket must match the most recent
        unmatched opening bracket.
      </p>

      <h3>References</h3>
      <ul>
        <li>
          <a href="https://leetcode.com/problems/valid-parentheses/">
            LeetCode: Valid Parentheses
          </a>
        </li>
        <li>
          <a href="https://www.geeksforgeeks.org/dsa/check-for-balanced-parentheses-in-an-expression/">
            GeeksforGeeks: Valid Parentheses in an Expression
          </a>
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/Stack_(abstract_data_type)">
            Stack abstract data type
          </a>
        </li>
      </ul>
    </PostWrapper>
  );
}

export default ValidParenthesesScreen;
