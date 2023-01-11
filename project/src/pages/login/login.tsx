import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FormLogin from '../../components/form-login/form-login';

function Login (): JSX.Element {

  return (
    <div className="wrapper">
      <Header/>
      <main className="decorated-page login">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x" /><img src="img/content/maniac/maniac-size-m.jpg" srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x" alt="" width={1366} height={768} />
          </picture>
        </div>
        <div className="container container--size-l">
          <FormLogin/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Login;
