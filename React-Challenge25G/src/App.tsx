import PostCard from "./components/PostCard";
import SideListings from "./components/sideListings";
import FooterDev from "./components/footer";

function App() {
  return (
    <>
      <nav>Aqui va la navbar creo</nav>
      <main className="flex columns-3 ">
        <aside className="flex w-1/3">#</aside>
        <PostCard />
        <aside className="flex w-1/3">
          <SideListings />
        </aside>
      </main>
      <footer>
        <FooterDev />
      </footer>
    </>
  );
}

export default App;
