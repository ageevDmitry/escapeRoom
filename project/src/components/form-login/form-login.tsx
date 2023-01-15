import {useAppDispatch} from '../../hooks';
import {useForm} from 'react-hook-form';
import {loginAction} from '../../store/api-action';


function FormLogin (): JSX.Element {

type Fields = {
  email: string;
  password: string;
  'user-agreement': string;
}

const {register, handleSubmit, formState: { errors }} = useForm<Fields>();
const dispatch = useAppDispatch();

const onSubmit = (data: Fields) => {

  dispatch(loginAction({
    login: data.email,
    password: data.password,
  }
  ));
};

return (
  <div className="login__form">
    <form onSubmit={(...args) => void handleSubmit(onSubmit)(...args)} className="login-form" action="https://echo.htmlacademy.ru/" method="post">
      <div className="login-form__inner-wrapper">
        <h1 className="title title--size-s login-form__title">Вход</h1>
        <div className="login-form__inputs">
          <div className="custom-input login-form__input">
            <label className="custom-input__label" htmlFor="email">E&nbsp;–&nbsp;mail</label>
            <input type="email" id="email" placeholder="Адрес электронной почты"
              {...register('email', { required: 'Укажите почту' })}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && <><br/><span role="alert">{errors.email?.message}</span></>}
          </div>
          <div className="custom-input login-form__input">
            <label className="custom-input__label" htmlFor="password">Пароль</label>
            <input type="password" id="password" placeholder="Пароль" {...register('password', { required: true })}/>
          </div>
        </div>
        <button className="btn btn--accent btn--general login-form__submit" type="submit">Войти
        </button>
      </div>
      <label className="custom-checkbox login-form__checkbox">
        <input type="checkbox" id="id-order-agreement" {...register('user-agreement', { required: true })}/>
        <span className="custom-checkbox__icon">
          <svg width={20} height={17} aria-hidden="true">
            <use xlinkHref="#icon-tick" />
          </svg>
        </span>
        <span className="custom-checkbox__label">Я&nbsp;согласен с
          <a className="link link--active-silver link--underlined" href="/">правилами обработки персональных данных</a>&nbsp;и пользовательским соглашением
        </span>
      </label>
    </form>
  </div>
);
}

export default FormLogin;
