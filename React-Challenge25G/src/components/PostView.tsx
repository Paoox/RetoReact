export default function PostView() {
  return (
    <>
      <main className="flex columns-3">
        <aside className="flex w-1/3">
          aside izq donde va la barra de reacciones
        </aside>
        <section className="flex w-1/3">
          <article>
            <header>
              <div>
                <img src="../src/assets/temporal-imgs/unicorn img.webp"></img>
              </div>
              <div>
                <a>
                  <img
                    src="https://randomuser.me/api/portraits/women/60.jpg"
                    alt="imagen de usuario"
                    className="rounded-full w-full"
                  ></img>
                </a>
              </div>
            </header>
            <div></div>
          </article>
        </section>
        <aside className="flex w-1/3">
          aqui va la card del user que creo el post en teoria
        </aside>
      </main>
    </>
  );
}
