import styles from '@/styles/goodsItem.module.css'
import { useRouter } from 'next/router';
export default function GoodsItem(props) {
    let router = useRouter();
    if (props.type !== "category" && props.type !== "carsouel") {
        return (<div className={`${styles.GoodsItem}`} onClick={() => {
            router.push(`/production/${props.item.id}`)
        }} style={{ padding: '2%', ...props.top_style }}>
            <div className={props.animation && (props.type === "category" || props.type === "carsouel") ? styles.goods_img_cover : ""} style={{ position: 'relative', ...props.imgTopStyle }}>
                <img src={props?.item?.photoimage} style={{ width: '100%', display: 'block', ...props.imgStyle }} className={props.animation === "toLarge" ? `${styles.goods_img} ${styles.an_fangda}` : `${styles.goods_img}`} />
                {props.item?.photoimages?.length && props.item?.photoimages[0] && <img src={props?.item?.photoimages[0]} style={{ borderRadius: 16 }} className={styles.goods_hover_img} />}
                {
                    <button className={styles.buy_goods_btn}>點擊購買</button>
                }
            </div>
            {/* <div>{props.item.id}</div> */}
            {props.type === "category" ?
                <div style={{ width: '100%', marginTop: 16, display: 'flex' }}>
                    <div style={{ ...props.style }} className={styles.goods_title}>{props.item.categoryname}</div>
                </div> :
                props.type === "carsouel" ? <div style={{ display: 'flex', flexDirection: 'column', marginTop: 16, paddingLeft: '10%', paddingRight: '10%', alignItems: 'center' }}>
                    <div style={{ width: '100%', textOverflow: 'ellipsis', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap' }}>{props?.item?.flowername ?? ""}</div>
                    <div className={styles.goods_carsouel_price} style={{ width: '100%', textAlign: 'center', whiteSpace: 'nowrap' }}>{'HK$ ' + props?.item?.price ?? ""}</div>
                </div> :
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: 16, paddingLeft: '10%', paddingRight: '10%', alignItems: 'center' }}>
                        <div style={{ width: '100%', textOverflow: 'ellipsis', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden' }}>{props?.item?.flowername ?? ""}</div>
                        <div className={styles.goods_price} style={{ width: '100%', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden' }}>{'HK$ ' + props?.item?.price ?? ""}</div>
                    </div>}
        </div>)
    }
    // props.type !== "category"&&//////console.log(props.item,props.type)
    return (<div className={`${styles.GoodsItem} ${props.type === "category" && styles.Iscategory}`} onClick={() => {
        if (props.type !== "category") {
            location.href = `/production/${props.item.id}`
        } else {
            location.href = `/category/${props.item.id}`
        }
    }} style={{ padding: '2%', ...props.top_style }}>
        <div className={props.type === "category" || props.type === "carsouel" ? styles.goods_img_cover : ""} style={{ position: 'relative', ...props.imgTopStyle }}>
            <img src={props?.item?.photoimage} style={{ width: '100%', display: 'block', ...props.imgStyle }} className={props.animation === "toLarge" ? `${styles.goods_img} ${styles.an_fangda}` : `${styles.goods_img}`} />
            {props.type !== "category" && props.type !== "carsouel" && props.item?.photoimages?.length && props.item?.photoimages[0] && <img src={props?.item?.photoimages[0]} style={{ borderRadius: 16 }} className={styles.goods_hover_img} />}
            {
                props.type === "carsouel" && <button className={styles.buy_btn}>點擊購買</button>
            }
        </div>
        {/* <div>{props.item.id}</div> */}
        {props.type === "category" ?
            <div style={{ width: '100%', marginTop: 16, display: 'flex' }}>
                <div style={{ ...props.style }} className={styles.goods_title}>{props.item.categoryname}</div>
            </div> :
            props.type === "carsouel" ? <div style={{ display: 'flex', flexDirection: 'column', marginTop: 16, paddingLeft: '10%', paddingRight: '10%', alignItems: 'center' }}>
                <div style={{ width: '100%', textOverflow: 'ellipsis', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap' }}>{props?.item?.flowername ?? ""}</div>
                <div className={styles.goods_carsouel_price} style={{ width: '100%', textAlign: 'center', whiteSpace: 'nowrap' }}>{'HK$ ' + props?.item?.price ?? ""}</div>
            </div> :
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: 16, paddingLeft: '10%', paddingRight: '10%', alignItems: 'center' }}>
                    <div style={{ width: '100%', textOverflow: 'ellipsis', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden' }}>{props?.item?.flowername ?? ""}</div>
                    <div className={styles.goods_price} style={{ width: '100%', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden' }}>{'HK$ ' + props?.item?.price ?? ""}</div>
                </div>}
    </div>)

}



