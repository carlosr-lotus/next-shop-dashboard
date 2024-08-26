'use client'
import { useState } from "react"

// Components
import Header from "@/components/Header"
import Filter from "@/components/Filter"
import Panel from "@/components/Panel"
import ChartPanel from "@/components/BarChart/ChartPanel"
import TotalPercentage from "@/components/TotalPercentage"
import DonutChart from "@/components/Donut"

import styles from "./page.module.css";

export default function Home() {

  const [barChartData, setBarChartData] = useState([
    { id: 1, valueLeft: 323, valueRight: 45, label: 'Jan/2024' },
    { id: 2, valueLeft: 450, valueRight: 32, label: 'Fev/2024' },
    { id: 3, valueLeft: 300, valueRight: 120, label: 'Mar/2024' },
    { id: 4, valueLeft: 43, valueRight: 352, label: 'Abr/2024' },
    { id: 5, valueLeft: 26, valueRight: 44, label: 'Mai/2024' },
    { id: 6, valueLeft: 21, valueRight: 42, label: 'Jun/2024' },
    { id: 7, valueLeft: 146, valueRight: 31, label: 'Jul/2024' },
    { id: 8, valueLeft: 471, valueRight: 150, label: 'Ago/2024' }
  ])

  return (
    <>
        <header className={styles.header}>
            <Header />
        </header>

        <main className={styles.main}>
            <Filter />

            <Panel>
                <div className={styles.results}>
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
                    className={styles.charts}
                >
                    <ChartPanel values={barChartData} />
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: '1px solid var(--line)',
                        borderRadius: '.4rem'
                    }}>
                        <DonutChart /> 
                    </div>   
                    <TotalPercentage value={50}/>
                </div>
                
            </Panel>
        </main>
    </>
  );
}
