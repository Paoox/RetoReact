import PostCard from "./components/PostCard";

function App() {
  return (
    <>
      <nav>Aqui va la navbar creo</nav>
      <main className="flex columns-3 ">
        <aside className="flex w-1/3">#</aside>
        <PostCard />
        <aside className="flex w-1/3">#</aside>
      </main>
    </>
  );
}

export default App;
