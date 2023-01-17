import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {QuestBooking} from '../../types/quest';
import {useForm} from 'react-hook-form';
import {useAppDispatch, useAppSelector} from '../../hooks';
// import {sendQuestBookedAction} from '../../store/api-action';
import {getQuestDetail} from '../../store/quests-data/selectors';
import {fetchQuestDetailAction, fetchQuestBookingAction} from '../../store/api-action';

type FormBookingProps = {
  questBooking?: QuestBooking;
}

type Fields = {
  name: string;
  tel: string;
  person: number;
  children: boolean;
  agreement: boolean;
}

function FormBooking ({questBooking}: FormBookingProps): JSX.Element {

  const {id} = useParams();
  const {register, handleSubmit, formState: { errors }} = useForm<Fields>();

  const dispatch = useAppDispatch();
  const questDetail = useAppSelector(getQuestDetail);

  useEffect(() => {
    if (id) {
      dispatch(fetchQuestDetailAction(id));
      dispatch(fetchQuestBookingAction(id));
    }
  }, [id, dispatch]);

  const onSubmit = (data: Fields) => {

    console.log({
      contactPerson: data.name,
      phone: data.tel,
      peopleCount: data.person,
      withChildren: data.children,
    });
    // dispatch(sendQuestBookedAction({
    //   id: 1,
    //   date: 'today',
    //   time: '14:00',
    //   contactPerson: 'Oliver',
    //   phone: '899911122233',
    //   withChildren: true,
    //   peopleCount: 3,
    //   locationId: 1,
    //   questId: 1
    // }
    // ));
  };

  const checkPersonValidate = (person: number) => {
    if (questDetail) {
      if (person > questDetail.peopleMinMax[0] && person < questDetail.peopleMinMax[1]) {
        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <form onSubmit={(...args) => void handleSubmit(onSubmit)(...args)} className="booking-form" action="https://echo.htmlacademy.ru/" method="post">
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Сегодня</legend>
          <div className="booking-form__date-inner-wrapper">
            {questBooking?.slots.today.map((item) => (
              <label key = {item.time} className="custom-radio booking-form__date">
                <input type="radio" id={item.time} disabled ={item.isAvailable}/><span className="custom-radio__label">{item.time}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Завтра</legend>
          <div className="booking-form__date-inner-wrapper">
            {questBooking?.slots.tomorrow.map((item) => (
              <label key = {item.time} className="custom-radio booking-form__date">
                <input type="radio" id={item.time} name="date" disabled ={item.isAvailable} required/><span className="custom-radio__label">{item.time}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </fieldset>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Контактная информация</legend>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="name">Ваше имя</label>
          <input type="text" id="name" placeholder="Имя" {...register('name', { required: true, pattern: /^[A-Za-zА-Яа-яЁё]{1,15}$/ })}
            aria-invalid={errors.name ? 'true' : 'false'}
          />
          {errors.name?.type === 'required' && <><br/><span role="alert">Укажите, пожалуйста, Ваше имя</span></>}
          {errors.name?.type === 'pattern' && <><br/><span role="alert">Имя подразумевает текст от 1 до 15 символов</span></>}
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
          <input type="tel" id="tel" placeholder="Телефон" {...register('tel', { required: true, pattern: /^((\+7)+([0-9]){10})$/ })}
            aria-invalid={errors.name ? 'true' : 'false'}
          />
          {errors.tel?.type === 'required' && <><br/><span role="alert">Укажите, пожалуйста, Ваш телефон</span></>}
          {errors.tel?.type === 'pattern' && <><br/><span role="alert">Номер формата +7(000) 000-00-00 (Ру-формат)</span></>}
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="person">Количество участников</label>
          <input type="number" id="person" placeholder="Количество участников" {...register('person', { required: true,
            validate: { checkPersonValidate } })}
          aria-invalid={errors.person ? 'true' : 'false'}
          />
          {errors.person?.type === 'required' && <><br/><span role="alert">Введите количество желающих</span></>}
          {errors.person?.type === 'validate' && <><br/><span role="alert">Количество желающих должно совпадать с описанием квеста</span></>}
        </div>
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input type="checkbox" id="children" {...register('children')} />
          <span className="custom-checkbox__icon">
            <svg width={20} height={17} aria-hidden="true">
              <use xlinkHref="#icon-tick" />
            </svg>
          </span><span className="custom-checkbox__label">Со&nbsp;мной будут дети</span>
        </label>
      </fieldset>
      <button className="btn btn--accent btn--cta booking-form__submit" type="submit">Забронировать</button>
      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
        <input type="checkbox" id="id-order-agreement" {...register('agreement', { required: true })}
          aria-invalid={errors.agreement ? 'true' : 'false'}
        />
        {errors.agreement?.type === 'required' && <><br/><span role="alert">Ознакомтесь, пожалуйста, с правилами</span></>}
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
  );
}

export default FormBooking;
