import style from "./style.module.css";

export function Banner(props) {
  const { className } = props;

  return (
    <section className={style["banner"] + " " + className}>
      <h1>conduit</h1>
      <h2>A place to share knowledge</h2>
    </section>
  );
}
