import { useState } from "react";

export default function HomePage() {
  const today = new Date().toLocaleDateString();

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello, world!</h1>
      <p>Welcome to your new project.</p>

      {today}

      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
