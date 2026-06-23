import { useState } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [favorites, setFavorites] = useState([]);
  const toggleFavorite = (song) => {

  if (favorites.includes(song)) {

    setFavorites(
      favorites.filter(item => item !== song)
    );

  } else {

    setFavorites([...favorites, song]);

  }
};
  return (
    <div className="app">
      <header className="topbar">
        <div className="topbar-left">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_White.png"
            alt="spotify"
            className="logo"
          />

          <div className="Home-icon">
            <i className="fa-solid fa-house"></i>
          </div>

          <div className="search-box">
            <span className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>

            <input
              type="text"
              placeholder="What do you want to play?"
            />

            <span className="divider">|</span>

            <div className="device-icon">
              <i className="fa-regular fa-window-maximize"></i>
            </div>
          </div>
        </div>

        <div className="topbar-center"></div>

        <div className="topbar-right">
          <a href="#">Premium</a>
          <a href="#">Home</a>
          <a href="#">Download</a>

          <span className="divider">|</span>

          <a href="#" className="install-app">
            <i className="fa-regular fa-circle-down"></i>
            install-app
          </a>

          <a href="#">Sign Up</a>

          <button className="login-btn">log in</button>
        </div>
      </header>

      <div className="main-layout">
        <aside className="sidebar">
          <div className="library-header">
            <span className="library-title">Your Library</span>
            <button className="add-btn">+</button>
          </div>

          <div className="library-scroll">
            <div className="library-card">
              <h4>Create your first playlist</h4>
              <p>It's easy,we'll help you</p>
              <button className="playlist-btn">
                Create Playlist
              </button>
            </div>

            <div className="library-card">
              <h4>Let's find some podcasts to follow</h4>
              <p>We'll keep you updated on new episodes</p>
              <button className="podcasts-btn">
                Browse podcasts
              </button>
            </div>
          </div>

          <div className="sidebar-links">
            <a href="#">Legal</a>
            <a href="#">Safety & Privacy Centers</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies</a>
            <a href="#">About Ads</a>
            <a href="#">Accessibility</a>

            <button className="language-btn">
              <i className="fa-solid fa-globe"></i> English
            </button>
          </div>
        </aside>

        <main className="main-content">
          <div className="content-wrapper">
          <h2 className="section-title">Favourite Songs</h2>

<div className="card-row">

  {favorites.length === 0 ? (
    <p>No favourites yet</p>
  ) : (
    favorites.map((song,index) => (
      <div className="music-card" key={index}>
        <h4>{song}</h4>
      </div>
    ))
  )}

</div>  

            <h2 className="section-title">
              Trending Songs
            </h2>
            <div className="card-row">
              <div className="music-card">
                <img src="/images/sptify-8.jpg" alt="" />
                <button className="play-btn">
                  <i className="fa-solid fa-play"></i>
                </button>
                <h4>Sajini</h4>
                <button className="fav-btn" onClick={() => toggleFavorite("Sajini")}>
  {favorites.includes("Sajini") ? "-" : "+"}
</button>
<p>Arijit Singh</p>

              </div>

              <div className="music-card">
                <img src="/images/spotify-1.png" alt="" />
                <button className="play-btn">
                  <i className="fa-solid fa-play"></i>
                </button>
                <h4>No One Noticed</h4>
                <button className="fav-btn" onClick={() => toggleFavorite("No one noticed")}>
  {favorites.includes("No one noticed") ? "-" : "+"}
</button>
             <p>The Marias</p>
              </div>

              <div className="music-card">
                <img src="/images/spotify-3.jpg" alt="" />
                <button className="play-btn">
                  <i className="fa-solid fa-play"></i>
                </button>
                <h4>Sitaare</h4>
                <button className="fav-btn" onClick={() => toggleFavorite("Sitaare")}>
  {favorites.includes("Sitaare") ? "-" : "+"}
</button>
                <p>Arijit Singh</p>
              </div>

              <div className="music-card">
                <img src="/images/spotify-2.jpg" alt="" />
                <button className="play-btn">
                  <i className="fa-solid fa-play"></i>
                </button>
                <h4>Photograph</h4>
                <button className="fav-btn" onClick={() => toggleFavorite("Photograph")}>
  {favorites.includes("Photograph") ? "-" : "+"}
</button>
                <p>Ed Sheeran</p>
              </div>

              <div className="music-card">
                <img src="/images/spotify-4.jpg" alt="" />
                <button className="play-btn">
                  <i className="fa-solid fa-play"></i>
                </button>
                <h4>Lag Jaa Gale</h4>
                <button className="fav-btn" onClick={() => toggleFavorite("Lag Jaa Gale")}>
{favorites.includes("Lag Jaa Gale") ? "-" : "+"}
</button>
                <p>Lata Mangeshkar</p>
              </div>

              <div className="music-card">
                <img src="/images/real-5.jpg" alt="" />
                <button className="play-btn">
                  <i className="fa-solid fa-play"></i>
                </button>
                <h4>I Think They Call This Love</h4>
                <button className="fav-btn" onClick={() => toggleFavorite("I Think They Call This Love")}>
  {favorites.includes("I Think They Call This Love") ? "-" : "+"}
</button>
                <p>Matthew Ifield</p>
              </div>

            </div>

            {/* Popular Artists */}

            <h2 className="section-title">
              Popular Artists
            </h2>

            <div className="card-row">

              <div className="music-card artist-card">
                <img src="/images/Arijit singh.jpg" alt="" />
                <button className="play-btn">
                  <i className="fa-solid fa-play"></i>
                </button>
                <h4>Arijit Singh</h4>
                <p>Artist</p>
              </div>

              <div className="music-card artist-card">
                <img src="/images/pritam.jpg" alt="" />
                <button className="play-btn">
                  <i className="fa-solid fa-play"></i>
                </button>
                <h4>Pritam</h4>
                <p>Artist</p>
              </div>

              <div className="music-card artist-card">
                <img src="/images/shreya goshal.jpg" alt="" />
                <button className="play-btn">
                  <i className="fa-solid fa-play"></i>
                </button>
                <h4>Shreya Ghoshal</h4>
                <p>Artist</p>
              </div>

              <div className="music-card artist-card">
                <img src="/images/lana del ray.jpg" alt="" />
                <button className="play-btn">
                  <i className="fa-solid fa-play"></i>
                </button>
                <h4>Lana Del Ray</h4>
                <p>Artist</p>
              </div>

              <div className="music-card artist-card">
                <img src="/images/sunidhi chauhan.jpg" alt="" />
                <button className="play-btn">
                  <i className="fa-solid fa-play"></i>
                </button>
                <h4>Sunidhi chauhan</h4>
                <p>Artist</p>
              </div>
              <div className="music-card artist-card">
                <img src="/images/sonu nigam.jpg" alt="" />
                <button className="play-btn">
                  <i className="fa-solid fa-play"></i>
                </button>
                <h4>Sonu Nigam</h4>
                <p>Artist</p>
              </div>

            </div>

            {/* Albums */}

            <h2 className="section-title">
              Popular albums and singles
            </h2>

            <div className="card-row">

              <div className="album-card">
                <img src="/images/Kabir_Singh.jpg" alt="" />
                <button className="play-btn">
                  <i className="fa-solid fa-play"></i>
                </button>
                <h4>Kabir Singh</h4>
                <p>Sachet Parampara</p>
              </div>

              <div className="album-card">
                <img src="/images/divide.jpg" alt="" />
                <button className="play-btn">
                  <i className="fa-solid fa-play"></i>
                </button>
                <h4>Divide</h4>
                <p>Ed Sheeran</p>
              </div>

              <div className="album-card">
                <img src="/images/arijit album.jpg" alt="" />
                <button className="play-btn">
                  <i className="fa-solid fa-play"></i>
                </button>
                <h4>Best of Arijit Singh</h4>
                <p>Arijit Singh</p>
              </div>

              <div className="album-card">
                <img src="/images/proof.jpg" alt="" />
                <button className="play-btn">
                  <i className="fa-solid fa-play"></i>
                </button>
                <h4>Proof</h4>
                <p>BTS</p>
              </div>

              <div className="album-card">
                <img src="/images/kishor da.jpg" alt="" />
                <button className="play-btn">
                  <i className="fa-solid fa-play"></i>
                </button>
                <h4>Kishor Da Remix</h4>
                <p>Kishor kumar</p>
              </div>

              <div className="album-card">
                <img src="/images/you never walk alone.jpg" alt="" />
                <button className="play-btn">
                  <i className="fa-solid fa-play"></i>
                </button>
                <h4>You Never Walk Alone</h4>
                <p>BTS</p>
              </div>


            </div>

            {/* Radio */}

            <h2 className="section-title">
              Popular Radio
            </h2>

            <div className="card-row">

              <div className="radio-card">
                <img src="/images/it.jpg" alt="" />
                <button className="play-btn">
                  <i className="fa-solid fa-play"></i>
                </button>
                <p>With Sachin-Jigar and more</p>
              </div>

              <div className="radio-card">
                <img src="/images/en.jpg" alt="" />
                <button className="play-btn">
                  <i className="fa-solid fa-play"></i>
                </button>
                <p>With A.R Rahman and more</p>
              </div>

              
              <div className="radio-card">
                <img src="/images/kishor.jpg" alt="" />
                <button className="play-btn">
                  <i className="fa-solid fa-play"></i>
                </button>
                <p>Kishor Kumar </p>
              </div>

              <div className="radio-card">
                <img src="/images/KK.jpg" alt="" />
                <button className="play-btn">
                  <i className="fa-solid fa-play"></i>
                </button>
                <p>K.K </p>
              </div>

              <div className="radio-card">
                <img src="/images/alka.jpg" alt="" />
                <button className="play-btn">
                  <i className="fa-solid fa-play"></i>
                </button>
                <p> Alka Yagnik</p>
              </div>
              
              <div className="radio-card">
                <img src="/images/en (1).jpg" alt="" />
                <button className="play-btn">
                  <i className="fa-solid fa-play"></i>
                </button>
                <p> Billi Elise</p>
              </div>


            </div>

            {/* Charts */}

            <h2 className="section-title">
              Featured Charts
            </h2>

            <div className="card-row">

              <div className="chart-card">
                <img src="/images/global.jpg" alt="" />
                <button className="play-btn">
                  <i className="fa-solid fa-play"></i>
                </button>
                <p>Top Songs Global</p>
              </div>

              <div className="chart-card">
                <img src="/images/india.jpg" alt="" />
                <button className="play-btn">
                  <i className="fa-solid fa-play"></i>
                </button>
                <p>Top Songs India</p>
              </div>

              <div className="chart-card">
                <img src="/images/top 50 global.jpg" alt="" />
                <button className="play-btn">
                  <i className="fa-solid fa-play"></i>
                </button>
                <p>Top 50 global</p>
              </div>
                 
                 <div className="chart-card">
                <img src="/images/top 50 india.jpg" alt="" />
                <button className="play-btn">
                  <i className="fa-solid fa-play"></i>
                </button>
                <p>Top 50 India</p>
              </div>
              

              <div className="chart-card">
                <img src="/images/viral 50 global.jpg" alt="" />
                <button className="play-btn">
                  <i className="fa-solid fa-play"></i>
                </button>
                <p>Viral 50 global</p>
              </div>

            </div>

            {/* Footer */}

            <footer className="spotify-footer">
              <div className="footer-container">

                <div className="footer-links">

                  <div className="footer-column">
                    <h4>Company</h4>
                    <a href="#">About</a>
                    <a href="#">Jobs</a>
                    <a href="#">For the Record</a>
                  </div>

                  <div className="footer-column">
                    <h4>Communities</h4>
                    <a href="#">For Artists</a>
                    <a href="#">Developers</a>
                    <a href="#">Advertising</a>
                  </div>

                  <div className="footer-column">
                    <h4>Useful Links</h4>
                    <a href="#">Support</a>
                    <a href="#">Free Mobile App</a>
                    <a href="#">Popular by Country</a>
                  </div>

                </div>

                <div className="footer-social">
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>

                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>

                  <a href="#">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </div>

              </div>

              <hr />

              <p className="footer-bottom">
                © 2026 Spotify Clone by Aaradhya Singh
              </p>

            </footer>

          </div>
        </main>
      </div>

      <footer className="preview-bar">
        <div className="preview-left">
          <span className="preview-title">
            Preview of Spotify
          </span>

          <p className="preview-text">
            Sign up to get unlimited songs and podcasts.
          </p>
        </div>

        <button className="preview-btn">
          Sign up free
        </button>
      </footer>
    </div>
  );
}

export default App;