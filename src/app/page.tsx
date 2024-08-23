'use client'
import { useState } from "react"

// Components
import Header from "@/components/Header"
import Filter from "@/components/Filter"
import Panel from "@/components/Panel"
import ChartPanel from "@/components/BarChart/ChartPanel"

import styles from "./page.module.css";

export default function Home() {

  const [barChartData, setBarChartData] = useState([
    { id: 1, valueLeft: 523, valueRight: 45, label: 'Jan/2024' },
    { id: 2, valueLeft: 250, valueRight: 32, label: 'Fev/2024' },
    { id: 3, valueLeft: 300, valueRight: 120, label: 'Mar/2024' },
    { id: 4, valueLeft: 43, valueRight: 352, label: 'Abr/2024' },
    { id: 5, valueLeft: 6, valueRight: 44, label: 'Mai/2024' },
    { id: 6, valueLeft: 21, valueRight: 42, label: 'Jun/2024' },
    { id: 7, valueLeft: 46, valueRight: 31, label: 'Jul/2024' },
    { id: 8, valueLeft: 471, valueRight: 150, label: 'Ago/2024' },
    { id: 9, valueLeft: 543, valueRight: 15, label: 'Set/2024' },
    { id: 10, valueLeft: 71, valueRight: 15, label: 'Out/2024' },
    { id: 11, valueLeft: 71, valueRight: 15, label: 'Nov/2024' },
    { id: 12, valueLeft: 71, valueRight: 15, label: 'Dez/2024' }
  ])

  return (
    <>
        <header className={styles.header}>
            <Header />
        </header>

        <main className={styles.main}>
            <Filter />

            <Panel
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr 1fr'
                }}
            >
                <div className={styles.panelDataBox}>
                    <p>Compradores únicos por semana</p>
                    <strong>31</strong>
                </div> 

                <div className={styles.panelDataBox}>
                    <p>Total de transações</p>
                    <strong>3292</strong>
                </div> 

                <div className={styles.panelDataBox}>
                    <p>Valor total das transações</p>
                    <strong>R$ 50.846,27</strong>
                </div> 
                
                <div className={styles.panelDataBox}>
                    <p>Valor médio das transações</p>
                    <strong>R$ 143,21</strong>
                </div> 
            </Panel>

            <Panel
                style={{
                    display: 'grid',
                    gridTemplateRows: 'max-content 1fr',
                    gap: '1rem'
                }}
            >
                <div className={styles.chartHeader}>
                    <div>
                        <h2>Gráficos</h2>
                        <span>Online</span>
                        <span>Presencial</span>
                    </div> 
                    <h3>Canais de venda</h3>
                </div> 

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr .5fr',
                        gap: '1rem'
                    }}
                >
                    <ChartPanel values={barChartData} />
                    <div>Vertical chart here</div>    
                </div>
                
            </Panel>
        </main>
    </>
  );
}
