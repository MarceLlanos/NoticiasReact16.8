import React,{Component,Fragment} from 'react';
import Header from './components/Header';
import ListaNoticas from './components/ListaNoticias';
import Formulario from './components/Formulario';

class App extends Component {
  state={
    noticias: []
  }

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=afead870dceb44bbbe1322da09629fd7`;
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias: noticias.articles
    });
  }
  render(){
    return (
      <Fragment>
        <Header title='Noticias React API'/>
        <div className="container white contenedor-noticias">
          <Formulario
            consultarNoticias = {this.consultarNoticias}
          />
          <ListaNoticas
            noticias={this.state.noticias}
          />
        </div>
      </Fragment>
    )
  }
}

export default App;
