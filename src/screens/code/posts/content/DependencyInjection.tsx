import { CodeSnippet } from "../../../../shared-components";
import PostWrapper from "../PostWrapper";
import { PostCategory } from "../postCategories";

function DependencyInjectionScreen() {
  return (
    <PostWrapper
      category={PostCategory.TheArt}
      subTitle="Passing dependencies in instead of hard-coding them"
      title="Dependency Injection"
    >
      <h3>tl;dr</h3>
      <p>
        Dependency Injection means a piece of code gets the helpers it needs
        from the outside instead of creating them by itself.
      </p>

      <h3>ELI5</h3>
      <p>
        Imagine you have a toy flashlight, but it never lets you change the
        batteries because the batteries are glued inside forever. That would be
        annoying. A better flashlight lets you swap batteries when you need to.
      </p>
      <p>
        Dependency Injection is the code version of that. Instead of gluing a
        tool inside a class or function, you pass the tool in so it can be
        swapped later.
      </p>

      <h3>Why though?</h3>
      <p>
        The main benefit is lower coupling. If a service receives a logger,
        repository, or payment client from the outside, that service can focus
        on its own job instead of knowing how to build every collaborator too.
      </p>
      <p>
        That usually makes testing easier, because you can pass in a fake
        dependency. It also makes production code easier to change later,
        because swapping one dependency does not require rewriting the class
        that uses it.
      </p>
      <p>
        The drawback is that Dependency Injection can become noisy if you apply
        it blindly. Too many layers of interfaces, factories, and containers
        can make simple code harder to follow than it needs to be.
      </p>
      <p>
        Here is the core idea in pseudo-code. The first version hard-codes its
        dependency. The second version receives it from the outside:
      </p>
      <CodeSnippet label="pseudo-code">
        {`class OrderService:
  setup():
    notifier = new EmailNotifier()

  placeOrder(order):
    save(order)
    notifier.send("Order placed")

class OrderService:
  setup(notifier):
    this.notifier = notifier

  placeOrder(order):
    save(order)
    notifier.send("Order placed")`}
      </CodeSnippet>
      <p>
        The second version is easier to test, because you can pass in a fake
        notifier and verify that it was called without sending a real email.
      </p>

      <h3>What&apos;s cool is...</h3>
      <p>
        The useful part is not the pattern name. It is the flexibility you get
        in real systems. The same business logic can run with different
        dependencies in different environments.
      </p>
      <p>
        For example, local development might use an in-memory repository, while
        production uses a database repository. The code that handles the user
        workflow does not need to change:
      </p>
      <CodeSnippet label="pseudo-code">
        {`repo = MemoryUserRepository()
service = UserService(repo)

repo = DatabaseUserRepository()
service = UserService(repo)`}
      </CodeSnippet>
      <p>
        That same idea shows up everywhere: swapping APIs, payment providers,
        caches, feature-flag clients, loggers, and analytics tools.{" "}
        <b>That&apos;s the cool part:</b> one small design choice can make code
        much easier to reuse, test, and evolve without tangling everything
        together.
      </p>
    </PostWrapper>
  );
}

export default DependencyInjectionScreen;
