import { useState, useEffect } from "react"

import styles from "@/styles/components/barChart/Bar.module.css"

type Props = {
    value: number,
    color: string
}

export default function Bar(props: Props): JSX.Element {

    const [value, setValue] = useState('0%')

    useEffect(() => { setValue(`${props.value}%`) }, [props.value])

    return (
       <>
            <div 
                className={styles.bar}
                style={{
                    backgroundColor: props.color,
                    height: value,
                    transition: 'height 0.2s ease-in-out'
                }}
            ></div>
       </> 
    )
}
