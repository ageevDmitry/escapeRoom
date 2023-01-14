import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {logoutAction} from '../../store/api-action';
import {useAppDispatch} from '../../hooks';

function SingOut (): JSX.Element {

  const dispatch = useAppDispatch();

  return (
    <Link to={AppRoute.Main}
      className="btn btn--accent header__side-item"
      onClick={(evt) => {
        evt.preventDefault();
        dispatch(logoutAction());
      }}
    >Выйти
    </Link>
  );
}

export default SingOut;
