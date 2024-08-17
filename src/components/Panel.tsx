import { ReactNode, CSSProperties } from "react"

import styles from "@/styles/components/Panel.module.css"

type Props = {
    children: ReactNode,
    style?: CSSProperties
}

export default function Panel({ children, style }: Props): JSX.Element {
    return (
        <div style={style} className={styles.panel}>{children}</div>
    )
}
