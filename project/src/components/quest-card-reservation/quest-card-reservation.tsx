import {QuestReservation} from '../../types/quest';
import {VIEW_QUEST_LEVEL, VIEW_QUEST_DATE} from '../../const';
import {Link} from 'react-router-dom';

type QuestCardProps = {
  quest: QuestReservation;
}

function QuestCardReservation ({quest}:QuestCardProps): JSX.Element {

  const {date, time, location, peopleCount} = quest;
  const {id, title, previewImg, previewImgWebp, level} = quest.quest;
  const questCardId = `/quest/${id}`;

  return (
    <Link to = {questCardId}>
      <div className="quest-card">
        <div className="quest-card__img">
          <picture>
            <source type="image/webp" srcSet={previewImgWebp}/>
            <img src={previewImg} alt="/" width={344} height={232} />
          </picture>
        </div>
        <div className="quest-card__content">
          <div className="quest-card__info-wrapper">{title}
            <span className="quest-card__info">[{VIEW_QUEST_DATE[date]},&nbsp;{time}. {location.address}]</span>
          </div>
          <ul className="tags quest-card__tags">
            <li className="tags__item">
              <svg width={11} height={14} aria-hidden="true">
                <use xlinkHref="#icon-person" />
              </svg>{peopleCount}&nbsp;чел
            </li>
            <li className="tags__item">
              <svg width={14} height={14} aria-hidden="true">
                <use xlinkHref="#icon-level" />
              </svg>{VIEW_QUEST_LEVEL[level]}
            </li>
          </ul>
          <button className="btn btn--accent btn--secondary quest-card__btn" type="button">Отменить</button>
        </div>
      </div>
    </Link>
  );
}

export default QuestCardReservation;
