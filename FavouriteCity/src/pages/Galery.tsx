
const photos = [
  {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Aerial_view_of_Liverpool_waterfront.jpg',
    title: 'Панорама Ліверпуля',
    alt: 'Панорама міста',
  },
  {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Anfield_Stadium_-_geograph.org.uk_-_2473962.jpg',
    title: 'Стадіон Anfield',
    alt: 'Стадіон Liverpool FC',
  },
  {
    src: 'https://static.wixstatic.com/media/0973a2_84b7d1141c70488fb6a8c172913892b9~mv2.jpg/v1/fill/w_1920%2Ch_1280%2Cal_c%2Cq_90%2Cusm_0.66_1.00_0.01%2Cenc_auto/0973a2_84b7d1141c70488fb6a8c172913892b9~mv2.jpg',
    title: 'The Beatles',
    alt: 'Пам’ятник The Beatles',
  },
  {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/20200125_Albert_dock1.jpg',
    title: 'Royal Albert Dock',
    alt: 'Історична набережна',
  },
  {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Liver_Building,_Liverpool.jpg',
    title: 'Royal Liver Building',
    alt: 'Відома будівля Ліверпуля',
  },
  {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/RMS_Titanic_3.jpg',
    title: 'Морська історія',
    alt: 'Історичний корабель Титанік',
  },
];

export default function Galery() {
  return (
    <section className="page-card">
      <span className="page-badge">Фотогалерея</span>

      <h2>Ліверпуль у фотографіях</h2>

      <p className="page-lead">
        Відкрийте для себе найвідоміші місця міста,
        його архітектуру, футбольну та музичну культуру.
      </p>

      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <div className="gallery-item" key={index}>
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
            />
            <h3>{photo.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
