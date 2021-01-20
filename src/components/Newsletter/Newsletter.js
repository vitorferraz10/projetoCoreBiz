// import cartIcon from '../../assets/icons/cart.svg';
import './style.css';

function Newsletter() {
  return (
    <div className="newsLetterComponent">
      <div className="container">
        <h2 className="title">Paticipe de nossas news com promoções e novidades!</h2>
        <form>
          <div className="col-auto"> 
            <input type="text" placeholder="Digite seu nome"  required/>
          </div>
          <div className="col-auto">
            <input type="Email" placeholder="Digite seu email" required/>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn">Eu quero!</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
