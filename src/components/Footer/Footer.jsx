import style from "./style.module.css";

export function Footer(props) {
  const { className } = props;

  return (
    <footer className={style["footer"] + " " + className}>
      <h1>&copy; Lars Gunnar</h1>
    </footer>
  );
}
