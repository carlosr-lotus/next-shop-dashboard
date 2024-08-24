import styles from "@/styles/components/TotalPercentage.module.css"

type Props = {
    value: number
}

export default function TotalPercentage(props: Props): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <strong>{`${props.value}%`}</strong>
                <p>Seu negócio está mais próspero que 50% das empresas do ramo.</p>
            </div> 
            <div className={styles.area}>
                <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className={styles.parallax}>
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="var(--primary-color)" />
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="lightgreen" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="var(--secondary-color)" />
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="var(--primary-color)" />
                    </g>
                </svg>
            </div>
        </div>
    )
}