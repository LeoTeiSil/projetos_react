import './App.css';
import Header from './components/Header';
import Cartao from './components/Cartao';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Header/>
      <Cartao
        nome="Leonardo Teixeira"
        profissao ="Estudande"
        descricao ="Sou um estudante da Etec Profº Maria Cristina Mdeiros, curso Informática para internet e atualmente estou no Segundo ano do ensino médio."
        foto ="https://i.pinimg.com/564x/82/92/48/829248dd886fc1bc71af90814f9acf0d.jpg"
      />
      <Footer/>
    </div>
  );
}

export default App;
