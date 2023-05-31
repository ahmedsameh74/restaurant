import styles from "../../styles/SubHead.module.css";

const SubHead = ({title, subTitle, desc, color, align, width, topWidth}) => {
  return (
    <div className={styles.top} style={{width: topWidth}}>
      <div className={styles.title} style={{ justifyContent: align }}>
        <h4 style={{ color }}>{title}</h4>
      </div>
      <div className={styles.header} style={{alignItems: align}}>
        <h3 style={{color}}>{subTitle}</h3>
        <p style={{textAlign: align, width, color}}>{desc}</p>
      </div>
    </div>
  );
};

export default SubHead;
