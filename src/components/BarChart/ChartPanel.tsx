import { useEffect, useState } from "react"

import Bar from "@/components/BarChart/Bar"

import styles from "@/styles/components/barChart/ChartPanel.module.css"

type BarGroup = {
    id: number,
    valueLeft: number,
    valueRight: number,
    label: string
}

type Props = {
   values: BarGroup[]
}

function returnMaxNumber(data: BarGroup[]): number {
    const max = Math.max(...data.flatMap(d => [d.valueLeft, d.valueRight]))
    const yAxisMax = Math.ceil(max / 50) * 50

    return yAxisMax 
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
    const max = returnMaxNumber(data)
    const calcNums = returnPercentage(data, max) 

    return calcNums
}

function returnYAxisValues(data: BarGroup[]): number[] {
    const max = returnMaxNumber(data) 

    const formattedValues: number[] = []

    for (let c = max; c >= 0; c -= 50) {
        formattedValues.push(c)
    }

    return formattedValues.sort((a, b) => a - b)
}

function returnXAxisValues(data: BarGroup[]) {
    return formatValues(data)
}

export default function ChartPanel(props: Props): JSX.Element {

    const [verticalValues, setVerticalValues] = useState<number[]>(
        returnYAxisValues(props.values)
    )
    const [barValues, setBarValues] = useState<BarGroup[]>(
        returnXAxisValues(props.values)
    )

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
