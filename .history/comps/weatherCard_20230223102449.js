import styles from '../styles/Home.module.css'

export default function WeatherCont() {

    return (<div className={styles.card}>
            <Image
              src={icon}
              alt="logo"     
              width={120}
              height={120}
              priority
                  />
                   <p>
                  {day} <br/> {month} {weather.dt_txt.substr(8,2)}, {weather.dt_txt.substr(0,4)}
                </p>
                <div>{weather.main.temp.toFixed(1)} &#8451;</div>
                <div>{weather.weather[0].main}</div>

    </div>

    )
}