export default function HomePage() {
  const today = new Date().toLocaleDateString();

  return (
    <div>
      <h1>Hello, world!</h1>
      <p>Welcome to your new project.</p>

      {today}
    </div>
  );
}
