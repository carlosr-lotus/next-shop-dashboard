import { useEffect, useRef } from 'react'

const DonutChart: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', 'orange']

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const DPR = window.devicePixelRatio || 1

        const width = 200
        const height = 200
        canvas.width = width * DPR
        canvas.height = height * DPR
        ctx.scale(DPR, DPR)

        canvas.style.width = `${width}px`
        canvas.style.height = `${height}px`

        drawDonutChart(ctx, width, height)
    }, [])

        return <div style={{ display: 'flex' }}>
        <canvas ref={canvasRef} width={200} height={200}></canvas>
        <div style={{ display: 'grid', gap: '1rem'}}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                <div style={{
                    backgroundColor: colors[0],
                    width: '1rem',
                    height: '1rem',
                    borderRadius: '2rem'
                }}></div>
                <span>norte</span>
            </div>     
            <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                <div style={{
                    backgroundColor: colors[1],
                    width: '1rem',
                    height: '1rem',
                    borderRadius: '2rem'
                }}></div>
                <span>nordeste</span>
            </div>     
            <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                <div style={{
                    backgroundColor: colors[2],
                    width: '1rem',
                    height: '1rem',
                    borderRadius: '2rem'
                }}></div>
                <span>centro-oeste</span>
            </div>     
            <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                <div style={{
                    backgroundColor: colors[3],
                    width: '1rem',
                    height: '1rem',
                    borderRadius: '2rem'
                }}></div>
                <span>sudeste</span>
            </div>     
            <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                <div style={{
                    backgroundColor: colors[4],
                    width: '1rem',
                    height: '1rem',
                    borderRadius: '2rem'
                }}></div>
                <span>sul</span>
            </div>
        </div> 
  </div>
 }

function drawDonutChart(ctx: CanvasRenderingContext2D, width: number, height: number) { 
    const data = [5, 10, 20, 40, 25]
    const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', 'orange']
    const labels = ['5%', '10%', '20%', '40%', '25%']
    const total = data.reduce((acc, curr) => acc + curr, 0)

    let startAngle = -0.5 * Math.PI

    const centerX = width / 2
    const centerY = height / 2
    const outerRadius = 75
    const innerRadius = 40

    data.forEach((value, index) => {
        const sliceAngle = (value / total) * 2 * Math.PI
        const endAngle = startAngle + sliceAngle

        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.arc(centerX, centerY, outerRadius, startAngle, endAngle)
        ctx.closePath()
        ctx.fillStyle = colors[index]
        ctx.fill()

        const midAngle = startAngle + sliceAngle / 2
        const textX = centerX + (outerRadius + innerRadius) / 2 * Math.cos(midAngle)
        const textY = centerY + (outerRadius + innerRadius) / 2 * Math.sin(midAngle)

        ctx.fillStyle = '#000'
        ctx.font = '14px Arial'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(labels[index], textX, textY)

        startAngle = endAngle
    })

    ctx.beginPath()
    ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI)
    ctx.fillStyle = '#FFF'
    ctx.fill()
}

export default DonutChart