import "./Hero.scss";

export default function HeroHeader() {
  return (
    <header className="hero-header">
      <div className="opacity">
        <div className="hero-header-text">
          <h1>Search for your dream home</h1>
          <p>Find the perfect place to live</p>
          <form>
            <input className="search-input" type="text" placeholder="Search" />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </header>
  );
}
