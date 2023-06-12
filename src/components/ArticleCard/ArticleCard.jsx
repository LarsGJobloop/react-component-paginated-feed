import style from './style.module.css'

export function ArticleCard(props) {
  const {
    title
  } = props

  const formatedTitle = title.slice(0, 100) + "...";

  return (
    <article className={style["article"]}>
      <h1>{formatedTitle}</h1>
    </article>
  )
}