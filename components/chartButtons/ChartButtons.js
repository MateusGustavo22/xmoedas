import styles from './ChartButtons.module.scss'


export default function ChartButtons(props) {
    return (
        <div className={styles.button_area}>
            <button style={{backgroundColor: props.buttonOn1}} onClick={props.select7days} className={styles.button}>Semana</button>
            <button style={{backgroundColor: props.buttonOn2}} onClick={props.select30days} className={styles.button}>Mes</button>
            <button style={{backgroundColor: props.buttonOn3}} onClick={props.select365days} className={styles.button}>Ano</button>
        </div>
    )
}