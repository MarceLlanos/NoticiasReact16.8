import React, { Component } from 'react';

class Formulario extends Component {
  state = {
    categoria:'general'
  }

  cambiarCategoria = e => {
    this.setState({
      categoria: e.target.value
    }, ()=>{
      //Pasar a la pagina principal
      this.props.consultarNoticias(this.state.categoria);
    })
  }
  render() { 
    return ( 
      <div className="buscador row">
        <div className="col s12 m8 offset-2">
          <form action="">
            <h2>Encuentra noticias por categoria</h2>
            <div className="input-field col s12 m8 ">
              <select onChange = {this.cambiarCategoria}>
                <option value="general">General</option>
                <option value="business">Negocios</option>
                <option value="technology">Tecnologia</option>
                <option value="science">Ciencia</option>
                <option value="health">Salud</option>
                <option value="entertaiment">Entretenimiento</option>
                <option value="sports">Deporte</option>
              </select>
            </div>
          </form>
        </div>
      </div>
     );
  }
}
 
export default Formulario;