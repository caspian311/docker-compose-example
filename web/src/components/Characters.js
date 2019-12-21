import React, { Component } from "react";
import { connect } from 'react-redux';
import * as CharacterActions from '../actions/CharacterActions';
import './Characters.css';

class Character extends Component {
  render() {
    return (
      <div className="character">
        <img src={this.props.image} alt={this.props.name} />
        <div className="character-data">
          <span className="label">Name:</span>
          <span className="info">{this.props.name}</span>
          <span className="label">Description:</span>
          <span className="info">{this.props.description}</span>
          <span className="label">Categories:</span>
          <span className="info">{this.props.categories}</span>
        </div>
      </div>
    );
  }
}

class Characters extends Component {
  componentDidMount() {
    this.props.loadCharacters();
  }

  characters = () => {
    return (<div className="characters">
      {this.props.characters.map((character, index) => {
        return (<Character key={index}
                           name={character.name}
                           image={character.image}
                           description={character.description}
                           categories={character.categories}
          />);
      })}
    </div>);
  }

  render() {
    return (
      <div>
        { this.props.isLoading ? 'Loading...' : this.characters() }
      </div>
    );
  }
}


const mapStateToProps = state => ({
  isLoading: state.characters.loading,
  characters: state.characters.characters,
});

const mapDispatchToProps = dispatch => ({
  loadCharacters() {
    CharacterActions.loadCharacters(dispatch);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
