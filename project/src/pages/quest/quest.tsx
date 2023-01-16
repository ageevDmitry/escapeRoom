import {useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Loading from '../../components/loading/loading';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {fetchQuestDetailAction} from '../../store/api-action';
import {getQuestDetail} from '../../store/quests-data/selectors';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {VIEW_QUEST_LEVEL, VIEW_QUEST_TYPE, LENGTH_QUEST_DESCRIPTION, AuthorizationStatus, AppRoute} from '../../const';
import {cleanUpQuestDetail} from '../../store/quests-data/quests-data';

function Quest (): JSX.Element {

  const {id} = useParams();
  const dispatch = useAppDispatch();
  const questDetail = useAppSelector(getQuestDetail);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(fetchQuestDetailAction(id));
    }
  }, [id, dispatch]);

  useEffect(() => () => {
    dispatch(cleanUpQuestDetail());
  }, [dispatch]);

  if (!questDetail) {
    return (
      <Loading/>
    );
  }

  // const {id, title, description, previewImg, previewImgWebp, coverImg, coverImgWebp, type, level, peopleMinMax} = questDetail;
  const {title, description, previewImg, previewImgWebp, coverImg, coverImgWebp, type, level, peopleMinMax} = questDetail;
  let questBookingId: string;

  if (id) {
    questBookingId = `/quest/${id}/booking`;
  }

  return (
    <div className="wrapper">
      <Header/>
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet={`${coverImgWebp}, ${previewImgWebp}`}/>
            <img src={previewImg} srcSet={coverImg} alt="" width={1366} height={768} />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">{title}</h1>
            <p className="subtitle quest-page__subtitle"><span className="visually-hidden">Жанр:</span>{VIEW_QUEST_TYPE[type]}
            </p>
            <ul className="tags tags--size-l quest-page__tags">
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
            <p className="quest-page__description">{(description.length > LENGTH_QUEST_DESCRIPTION) ? `${description.substring(0, LENGTH_QUEST_DESCRIPTION)}...` : `${description}`}</p>
            <button className="btn btn--accent btn--cta quest-page__btn"
              onClick={() => {
                if (authorizationStatus !== AuthorizationStatus.Auth) {
                  return navigate(AppRoute.Login);
                }
                navigate(questBookingId);
              }}
            >Забронировать
            </button>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Quest;
