import styles from "./page.module.css";

export default async function Nasa() {

  const nasaData = await getData(8);
  const nasaItems = nasaData.map((item) => (
    <NasaItem 
      key={item.url} 
      title={item.title} 
      image={item.hdurl} 
      date={item.date} 
      desc={item.explanation}
    />
  ));
  

  return (
    <main>
      <h1 className={styles.hey}>NASA astronomy pictures </h1>
      <div>
        {nasaItems}
      </div>
    </main>
  );

}


async function getData(count) {

  const nasaAPI = process.env.NASA_API_KEY;

  const response = await fetch(
    'https://api.nasa.gov/planetary/apod?api_key=' + nasaAPI + '&count=' + count
    );

  const data = response.json();
  return data;
}


function NasaItem(item){

  return (
    <div className={styles.nasaitem}>
      <h2 className={styles.title}>{item.title} | {item.date}</h2>
      <img src={item.image} alt={item.title} className={styles.image} />
      <p> {item.desc} </p>
    </div>
  );
}



