import {Quest} from '../../types/quest';
import {VIEW_QUEST_LEVEL} from '../../const';

type QuestCardProps = {
  // typeComponent: string;
  quest: Quest;
  // onMouseEnterPlaceCard?: (id: number) => void;
}

function QuestCard ({quest}:QuestCardProps): JSX.Element {

  const {title, previewImg, previewImgWebp, level, peopleMinMax} = quest;

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={previewImgWebp}/><img src={previewImg} alt="/" width={344} height={232} />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper"><a className="quest-card__link" href="quest.html">{title}</a>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width={11} height={14} aria-hidden="true">
              <use xlinkHref="#icon-person" />
            </svg>{peopleMinMax[0]}–{peopleMinMax[1]}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width={14} height={14} aria-hidden="true">
              <use xlinkHref="#icon-level" />
            </svg>{VIEW_QUEST_LEVEL[level]}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default QuestCard;
