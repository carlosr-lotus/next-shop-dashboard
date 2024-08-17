import styles from "@/styles/components/barChart/Bar.module.css"

type Props = {
    value: number,
    color: string
}

export default function Bar(props: Props): JSX.Element {
    return (
       <>
            <div 
                className={styles.bar}
                style={{
                    backgroundColor: props.color,
                    height: `${props.value}%`
                }}
            ></div>
       </> 
    )
}
