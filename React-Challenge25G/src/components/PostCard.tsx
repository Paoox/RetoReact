export default function PostCard() {
  return (
    <section className="flex flex-row full-card w-1/3 rounded-lg bg-dev-to-card-color">
      <a className="ancor-card" href="#">
        <div className="img-top">
          <a href="#">
            <img
              src="../src/assets/temporal-imgs/unicorn img.webp"
              alt="img del post"
              className="rounded-t-lg"
            ></img>
          </a>
        </div>
        <div className="card-content">
          <div className="flex">
            <div className="w-[3rem] ms-5 mt-2 profile-picture">
              <div>
                <a>
                  <img
                    src="https://randomuser.me/api/portraits/women/60.jpg"
                    alt="imagen de usuario"
                    className="rounded-full w-full"
                  ></img>
                </a>
              </div>
            </div>
            <div className="flex gap-1 items-center user-creator">
              <p className="font-semibold ">Thomas Alger</p>
              <span>for</span>
              <p className="font-semibold ">AWS Community Services</p>
            </div>
          </div>
          <div>
            <small className="ms-[4.5rem]">7 days ago</small>
          </div>
          <div className="reactions-container">
            <h2 className="font-extrabold text-5xl mx-8 pb-3 ">
              Este es el titulo del post 🦄
            </h2>
            <div className="flex gap-5 ms-8 py-2 post-tags">
              <a>#tag1</a>
              <a>#tag2</a>
              <a>#tag3</a>
            </div>
            <div className="flex gap-5 w-1/2 emojis-comments">
              <a href="#" className="emojis-comments__colection">
                <div className="emojis-comments__colection--emojis">
                  <span>❤</span>
                  <span>🙌</span>
                  <span>🔥</span>
                  <span>15 reactions</span>
                </div>
              </a>
              <a className="emojis-comments__comments">
                <div>
                  <span>💭</span>
                  <p>23 comments</p>
                </div>
              </a>
            </div>
            <div>
              <small>11 min read</small>
              <a href="#">📒</a>
            </div>
          </div>
        </div>
      </a>
    </section>
  );
}
