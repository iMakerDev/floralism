import styles from '@/styles/goodsItem.module.css'

export default function GoodsItem(props) {
    return (<div className={`${styles.GoodsItem} ${props.type==="category"&&styles.Iscategory}`} onClick={() => {
        ////console.log("123");
        if (props.type !== "category") {
            ////console.log("不是分類");
            location.href = `/production/${props.item.id}`
        } else {
            location.href = `/category/${props.item.id}`
        }
    }} style={{ padding: '2%', ...props.top_style }}>
        <div className={props.animation ? styles.goods_img_cover : ""} style={{ position: 'relative',...props.imgTopStyle }}>
            <img src={props?.item?.photoimage} style={{ width: '100%',display:'block', ...props.imgStyle }} className={props.animation==="toLarge"?`${styles.goods_img} ${styles.an_fangda}`:`${styles.goods_img}`} />
            {
                props.type !== "category" ? <button className={styles.buy_btn}>點擊購買</button>:null
            }
        </div>
        {/* <div>{props.item.id}</div> */}
        {props.type === "category" ?
            <div style={{ width: '100%', marginTop: 16, display: 'flex' }}>
                <div style={{...props.style}} className={styles.goods_title}>{props.item.categoryname}</div>
            </div> :
            props.type === "carsouel" ? <div style={{ display: 'flex', flexDirection: 'column', marginTop: 16, paddingLeft: '10%', paddingRight: '10%', alignItems: 'center' }}>
                <div style={{ width: '100%', textOverflow: 'ellipsis', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap' }}>{props?.item?.flowername??""}</div>
                <div className={styles.goods_carsouel_price}>{'HK$ ' + props?.item?.price??""}</div>
            </div> :
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: 16, paddingLeft: '10%', paddingRight: '10%', alignItems: 'center' }}>
                    <div style={{ width: '100%', textOverflow: 'ellipsis', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden' }}>{props?.item?.flowername??""}</div>
                    <div className={styles.goods_price}>{'HK$ ' + props?.item?.price??""}</div>
                </div>}
    </div>)

}



