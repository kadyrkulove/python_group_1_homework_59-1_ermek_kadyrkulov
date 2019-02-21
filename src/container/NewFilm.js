import React, {Component, Fragment} from 'react';
import FormPress from "../components/FormPress/FormPress";
import Main from "../components/Main/Main";

class NewFilm extends Component{
  state={
    films: [],
    id: 0,
    hendler: '',
  };
  getFilmName = props =>{
    const film = props.target.value;
    this.setState({hendler: film})
  };

  addNewFilm = () =>{
    const chageMovie = [...this.state.films];
    const newMovie = {name: this.state.hendler, id: this.state.id + 1};
    chageMovie.push(newMovie);

    this.setState({films: chageMovie, id: this.state.id + 1})
  };
  changeFilm = (event, index) => {
    const films = this.state.films;
    films[index].name = event.target.value;
    this.setState({
      films
    })
  };
  removeFilm = (index) => {
    const rem = [...this.state.films];
    const id = rem.findIndex(film => {
      return(
        film.index === index
      )
    });
    rem.splice(id, 1);
    this.setState({
      films: rem,
      id: this.state.id - 1
    })
  };
  render() {
    return (
      <Fragment>
        <FormPress inputVal={this.getFilmName} added={this.addNewFilm}/>
        {this.state.films.map((film, index)=>{
          return(
            <div  key={film.id}>
              <Main
                index={index}
                film={film.name}
                remove={this.removeFilm}
                change={(event) => this.changeFilm(event, index)}
              />
            </div>

            )

        })}

      </Fragment>
    );
  }
}

export default NewFilm;