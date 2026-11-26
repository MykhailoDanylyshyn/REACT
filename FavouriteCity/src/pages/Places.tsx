
import { useParams } from 'react-router-dom';

export default function Places() {
  const { type } = useParams<{ type: string }>();

  const isFirstSide = type === 'first';

  return (
    <section className="page-card">

      <span className="page-badge">
        {isFirstSide ? 'Головна пам’ятка' : 'Туристичний путівник'}
      </span>

      <h2>
        {isFirstSide ? 'Anfield — серце Ліверпуля' : 'Що ще варто побачити?'}
      </h2>

      {isFirstSide ? (
        <div>
          <img
            className="place-image"
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Anfield_Stadium_-_geograph.org.uk_-_2473962.jpg"
            alt="Стадіон Anfield"
          />

          <h3>Легендарний стадіон Anfield</h3>

          <p className="page-lead">
            Anfield — домашній стадіон футбольного клубу
            Liverpool FC та одна з найвідоміших спортивних
            арен Англії.
          </p>

          <p>
            Стадіон був відкритий у 1884 році. Спочатку
            на ньому грав Everton FC, а з 1892 року він
            став домашньою ареною Liverpool FC.
          </p>

          <h3>Знаменита трибуна The Kop</h3>

          <p>
            Особливу атмосферу стадіону створює трибуна The Kop.
            Саме тут збираються тисячі відданих уболівальників,
            які підтримують свою команду під час матчів.
          </p>

          <img
            className="place-image"
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Anfield_Stadium_-_The_'Kop'_End_-_geograph.org.uk_-_7321093.jpg"
            alt="Трибуна The Kop"
          />

          <h3>You’ll Never Walk Alone</h3>

          <p>
            Перед футбольними матчами вболівальники співають
            знамениту пісню You'll Never Walk Alone.
            Вона стала справжнім символом клубу та його фанатів.
          </p>

          <h3>Що можна побачити на Anfield?</h3>

          <ul>
            <li>Футбольне поле та трибуни стадіону.</li>
            <li>Знамениту трибуну The Kop.</li>
            <li>Музей історії Liverpool FC.</li>
            <li>Статуї легендарних тренерів клубу.</li>
            <li>Магазин офіційної символіки Liverpool FC.</li>
          </ul>
        </div>
      ) : (
        <div>

          <h3>1. Історія «Титаніка»</h3>

          <img
            className="place-image"
            src="https://commons.wikimedia.org/wiki/Special:FilePath/RMS_Titanic_3.jpg"
            alt="Історія Титаніка"
          />

          <p>
            Ліверпуль пов'язаний з історією легендарного
            корабля RMS Titanic. Місто було портом його
            реєстрації, а на корпусі корабля було зазначено
            назву Liverpool.
          </p>

          <p>
            Титанік не будували в Ліверпулі, проте його
            історичний зв'язок із містом є важливою частиною
            морської спадщини.
          </p>

          <h3>2. The Beatles</h3>

          <img
            className="place-image"
            src="https://static.wixstatic.com/media/0973a2_84b7d1141c70488fb6a8c172913892b9~mv2.jpg/v1/fill/w_1920%2Ch_1280%2Cal_c%2Cq_90%2Cusm_0.66_1.00_0.01%2Cenc_auto/0973a2_84b7d1141c70488fb6a8c172913892b9~mv2.jpg"
            alt="Пам'ятник The Beatles у Ліверпулі"
          />

          <p>
            Ліверпуль є батьківщиною гурту The Beatles.
            Четверо музикантів стали справжньою легендою
            світової музики.
          </p>

          <p>
            Туристи можуть відвідати музей The Beatles Story,
            знаменитий Cavern Club та побачити пам'ятник
            музикантам на набережній міста.
          </p>

          <h3>3. Royal Albert Dock</h3>

          <img
            className="place-image"
            src="https://commons.wikimedia.org/wiki/Special:FilePath/20200125_Albert_dock1.jpg"
            alt="Royal Albert Dock"
          />

          <p>
            Royal Albert Dock — одна з найвідоміших
            історичних частин Ліверпуля. Тут розташовані
            музеї, ресторани, магазини та галереї.
            Це чудове місце для прогулянок біля річки Мерсі.
          </p>

          <h3>4. Royal Liver Building</h3>

          <img
            className="place-image"
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Liver_Building,_Liverpool.jpg"
            alt="Royal Liver Building"
          />

          <p>
            Royal Liver Building — одна з головних
            архітектурних пам'яток міста. Вона відома
            своїми годинниковими вежами та фігурами
            міфічних птахів Liver Birds, які стали
            символом Ліверпуля.
          </p>

          <h3>5. Cavern Club</h3>

          <p>
            Cavern Club — легендарний музичний клуб,
            у якому The Beatles часто виступали на початку
            своєї кар'єри. Сьогодні це популярне місце
            серед шанувальників музики.
          </p>

          <h3>6. Liverpool Cathedral</h3>

          <p>
            Ліверпульський кафедральний собор вражає
            своїми масштабами та готичною архітектурою.
            Це одна з найпомітніших споруд міста.
          </p>

        </div>
      )}
    </section>
  );
}
