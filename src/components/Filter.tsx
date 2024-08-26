'use client'
import { useState } from "react"

// Components
import Select from "@/material/Select"

import styles from "@/styles/components/Filter.module.css"

export default function Filter(): JSX.Element {

    const [options, setOptions] = useState([
        { value: 1, label: '2024' }
    ])

    const [defaultValue, setDefaultValue] = useState(options[0])

    return (
       <div className={styles.container}>
        <div className={styles.title}>
            <h1>Dashboard Empresa S</h1>
            <p>Verifique os dados do resultado da empresa.</p>
        </div>
        <div className={styles.selects}>
            <Select options={options} value={defaultValue} onChange={(e) => console.log(e)} />
        </div>
       </div> 
    )
}
