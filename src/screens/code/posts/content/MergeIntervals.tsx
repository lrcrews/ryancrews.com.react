import { CodeSnippet } from "../../../../shared-components";
import PostWrapper from "../PostWrapper";
import { PostCategory } from "../postCategories";

function MergeIntervalsScreen() {
  return (
    <PostWrapper
      category={PostCategory.TheJob}
      subTitle="Sorting ranges so overlapping work collapses into one clean pass"
      title="Merge Intervals"
    >
      <p className="italic">
        This post is an AI generated post. It felt like a fun use of AI to
        generate a post about a common coding interview question once a week,
        just to (re)learn some things 🤓
      </p>

      <h3>The Question</h3>
      <p>
        This question usually gives you a list of intervals and asks you to
        combine every range that overlaps. The input may be unsorted, and each
        interval is usually represented as a pair like{" "}
        <code>[start, end]</code>.
      </p>
      <p>
        Common versions are: given <code>[[1,3],[2,6],[8,10],[15,18]]</code>,
        return <code>[[1,6],[8,10],[15,18]]</code>; given{" "}
        <code>[[1,4],[4,5]]</code>, return <code>[[1,5]]</code>. Some
        interviewers frame it as merging calendar meetings, booking windows, or
        log ranges.
      </p>

      <h3>Sort and Scan</h3>
      <p>
        The expected solution is to sort by each interval's start, then keep a
        result list of merged ranges. For every interval, compare it with the
        last range in the result. If it overlaps, extend the end. If it starts
        after the last range ends, append it as a new range.
      </p>
      <CodeSnippet label="TypeScript">
        {`function mergeIntervals(intervals: number[][]): number[][] {
  if (intervals.length <= 1) {
    return intervals.map(([start, end]) => [start, end]);
  }

  const sortedIntervals = intervals
    .map(([start, end]) => [start, end])
    .sort((a, b) => a[0] - b[0]);
  const merged: number[][] = [sortedIntervals[0]];

  for (let index = 1; index < sortedIntervals.length; index += 1) {
    const current = sortedIntervals[index];
    const previous = merged[merged.length - 1];

    if (current[0] <= previous[1]) {
      previous[1] = Math.max(previous[1], current[1]);
    } else {
      merged.push(current);
    }
  }

  return merged;
}`}
      </CodeSnippet>
      <p>
        The runtime is O(n log n) because of the sort. The scan is O(n). The
        extra space is O(n) for the returned list, plus whatever the language's
        sort needs internally. The key invariant is that once intervals are
        sorted by start, the only range that can overlap the current interval is
        the most recent merged range.
      </p>

      <h3>Connected Components</h3>
      <p>
        Another accepted approach treats intervals as nodes in a graph. Add an
        edge between two intervals when they overlap, then merge each connected
        component by taking the minimum start and maximum end inside that
        component.
      </p>
      <p>
        This is useful for explaining why overlapping chains collapse together:
        <code>[1,3]</code> overlaps <code>[2,4]</code>, and <code>[2,4]</code>{" "}
        overlaps <code>[4,8]</code>, so all three become one component. It is
        usually not the interviewer's desired implementation, though, because a
        direct pairwise graph build is O(n^2) before traversal.
      </p>

      <h3>Sweep Line</h3>
      <p>
        A sweep-line variant converts every interval into start and end events,
        sorts the events, and walks them while tracking how many ranges are
        currently open. A merged interval starts when the open count moves from
        zero to one. It ends when the count drops back to zero.
      </p>
      <p>
        This is also O(n log n), but it is more bookkeeping than the sort and
        scan solution for closed intervals. It becomes more attractive when the
        problem changes to counting overlaps, finding maximum concurrency, or
        handling many event types. Other variants exist, but the sorted scan is
        the clean default unless the prompt asks for one of those extensions.
      </p>

      <h3>References</h3>
      <ul>
        <li>
          <a href="https://leetcode.com/problems/merge-intervals/">
            LeetCode: Merge Intervals
          </a>
        </li>
        <li>
          <a href="https://www.geeksforgeeks.org/dsa/merging-intervals/">
            GeeksforGeeks: Merge Overlapping Intervals
          </a>
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/Component_(graph_theory)">
            Connected component in graph theory
          </a>
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/Sweep_line_algorithm">
            Sweep line algorithm
          </a>
        </li>
      </ul>
    </PostWrapper>
  );
}

export default MergeIntervalsScreen;
