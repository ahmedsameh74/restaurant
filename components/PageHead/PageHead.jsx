import styles from '../../styles/PageHead.module.css'

const PageHead = ({title}) => {
  return (
    <div className={styles.Head}>
        <p>{title}</p>
    </div>
  )
}

export default PageHead