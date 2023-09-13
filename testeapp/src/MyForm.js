import React from 'react';
import './css/MyForm.css'
import axios from 'axios';


class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nom: '', courriel: '',isSub:false,data:[]};
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async(e) => {
    e.preventDefault();
    this.setState({isSub:true})
    console.log('Données soumises :', this.state);
    sessionStorage.setItem('nom',this.state.nom);
    try {
        await axios.post('http://localhost:5000/api/insert', { nom:this.state.nom, courriel:this.state.courriel });
        console.log('Données soumises avec succès');
        // Réinitialisez les champs du formulaire ou effectuez d'autres actions
      } catch (error) {
        console.error('Erreur lors de la soumission des données :', error);
      }
  };

  reset(){
    this.setState({isSub:false})
  }
  async componentDidMount() {
    try {
      const response = await axios.get('http://localhost:5000/api/getData'); // Faites une requête pour récupérer les données
      const data = response.data; // Les données récupérées depuis le serveur
  
      // Mettez à jour l'état du composant avec les données récupérées
      this.setState({ data });
     console.log(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données depuis le serveur :', error);
    }
  }

  async delete(id){
    try {
        await axios.delete(`http://localhost:5000/api/delete/${id}`);
        console.log('Données supprimées avec succès');
        // Mettez à jour l'état du composant pour refléter la suppression
        const newData = this.state.data.filter(item => item.id !== id);
        this.setState({ data: newData });
      } catch (error) {
        console.error('Erreur lors de la suppression des données :', error);
      }
  }


  render() {
    return (
        <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Nom :
          <input type="text" name="nom" value={this.state.nom} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Courriel :
          <input type="email" name="courriel" value={this.state.courriel} onChange={this.handleChange} />
        </label>
        <br />
        <button type="submit">S'inscrire</button>
      </form>
     
        <div>
            <h2>Données depuis la base de données :</h2>
            <table border={1}>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                {this.state.data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.nom}</td>
                        <td>{item.courriel}</td>
                        <td> <button onClick={() => this.delete(item.id)}>Supprimer</button><button onClick={() => this.modif}>Modifier</button></td>
                    </tr>
             
                ))}
            </table>
        </div>

      {this.state.isSub==true && (
        <div>
            <h1>{this.state.nom}</h1>
            <h1>{this.state.courriel}</h1>
            <button onClick={()=>this.reset()}>Reset</button>
        </div>
      )}
      </div>
    );
  }
}

export default MyForm;
