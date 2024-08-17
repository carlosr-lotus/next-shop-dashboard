import { useEffect, useState } from "react"

import Bar from "@/components/BarChart/Bar"

import styles from "@/styles/components/barChart/ChartPanel.module.css"

type VerticalLine = {
    data: number[]
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

export default function ChartPanel(props: Props): JSX.Element {

    const [verticalValues, setVerticalValues] = useState<number[]>(getBarValues(props.values))
    const [barValues, setBarValues] = useState<BarGroup[]>(formatValues(props.values))

    function getBarValues(data: BarGroup[]): number[] {
        const dataNumbers: number[] = []

        data.map(({valueLeft, valueRight}) => {
            dataNumbers.push(valueLeft) 
            dataNumbers.push(valueRight)
        })

        console.log(dataNumbers, 'dataNumbers')

        return dataNumbers.sort((a, b) => a - b) 
    }

    function returnMaxNumber(values: number[]): number {
        return Math.max(...values) 
    }

    function returnPercentage(data: BarGroup[], max: number) {
        const values = data

        values.map(v => {
            v.valueLeft = Math.floor((v.valueLeft / max) * 100)
            v.valueRight = Math.floor((v.valueRight / max) * 100)
        })

        return values 
    }

    function formatValues(data: BarGroup[]) {
        const nums = getBarValues(data)
        const max = returnMaxNumber(nums)
        const calcNums = returnPercentage(data, max) 

        return calcNums
    }

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
                            barValues.map((value) => (
                                <div className={styles.barGroup} key={value.id}> 
                                        <Bar 
                                            value={value.valueLeft}
                                            color='#269149'
                                        />
                                        <Bar 
                                            value={value.valueRight}
                                            color='grey'
                                        />
                                </div>
                            ))
                        } 
                         
                    </div> 
                </> 
            :
            <p>Loading</p>} 
        </div>
    )
}
