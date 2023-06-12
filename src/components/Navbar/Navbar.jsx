import style from "./style.module.css";

export function Navbar(props) {
  const { className } = props;

  return (
    <header className={style["navbar"] + " " + className}>
      <a href="/" className={style["logo"]}>
        <img width={40} height={40} src="/favicon.svg" alt="site logo" />
      </a>

      <nav className={style["navigation-main"]}>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Feed</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
