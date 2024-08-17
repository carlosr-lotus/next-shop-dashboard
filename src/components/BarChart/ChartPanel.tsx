import { useEffect, useState } from "react"

import Bar from "@/components/BarChart/Bar"

import styles from "@/styles/components/barChart/ChartPanel.module.css"

type VerticalLine = {
    data: number[]
}

type ChartOptions = {
    interval: number
}

type BarGroup = {
    id: number,
    valueLeft: number,
    valueRight: number,
    label: string
}

type Props = {
   values: BarGroup[]
}

function removeDuplicates(arr: number[]) {
   return arr.filter((item,
        index) => arr.indexOf(item) === index)
}

function getBarValues(data: BarGroup[]): number[] {
    const dataNumbers: number[] = []

    data.map(({valueLeft, valueRight}) => {
        dataNumbers.push(valueLeft) 
        dataNumbers.push(valueRight)
    })
    
    return dataNumbers.sort((a, b) => a - b) 
}

function returnMaxNumber(values: number[]): number {
    return Math.max(...values) 
}

function returnPercentage(data: BarGroup[], max: number): BarGroup[] {
    const values = data

    values.map(v => {
        v.valueLeft = Math.floor((v.valueLeft / max) * 100)
        v.valueRight = Math.floor((v.valueRight / max) * 100)
    })

    return values 
}

function formatValues(data: BarGroup[]): BarGroup[] {
    const nums = getBarValues(data)
    const max = returnMaxNumber(nums)
    const calcNums = returnPercentage(data, max) 

    return calcNums
}

export default function ChartPanel(props: Props): JSX.Element {

    const [verticalValues, setVerticalValues] = useState<number[]>(removeDuplicates(getBarValues(props.values)))
    const [barValues, setBarValues] = useState<BarGroup[]>(formatValues(props.values))

    return (
        <div className={styles.chartPanel}>
            {barValues.length >= 0 ?
                <>
                    <div className={styles.verticalLineContainer}>
                        <div className={styles.lineLabels}>
                            {verticalValues && verticalValues.map((v, i) => <span key={i}>{v}</span>)} 
                        </div>
                        <div className={styles.verticalLine}></div>
                    </div> 

                    <div className={styles.barGroupContainer}>
                        {
                            barValues.map((v) => (
                                <div className={styles.barGroup} key={v.id}> 
                                    <Bar 
                                        value={v.valueLeft}
                                        color='#269149'
                                    />
                                    <Bar 
                                        value={v.valueRight}
                                        color='grey'
                                    />
                                </div>
                            ))
                        } 
                         
                    </div> 

                    <div className={styles.containerLabel}>
                        {barValues.map(v => <span key={v.id}>{v.label}</span>)}
                    </div> 

                </> 
            :
            <p>Loading</p>} 
        </div>
    )
}
