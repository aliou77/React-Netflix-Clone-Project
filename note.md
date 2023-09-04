## Structure des dossiers du Projet
- index.js -> est le fichier d'entrer de l'application 

# NB: React utilise Webpack pour l'importation et la compilation des fichiers du projet comme Symfony.
--------------------------------------------------------------------

## Commands
- yarn build -> build tous les fichiers de l'app qui seront utiliser pour le deployement de l'app apres avoir fini sa consception.

--------------------------------------------------------------------

## JSX INTRODUCTION
le jsx nous permet d'ecrire du html directement dans un fichier js et babbel se chargera de convertir le html en js valide en creant des elements React:
# NB: React utilise Babbel pour convertir le JSX en JavaScript valide
ex: 
// JSX
class HelloMessage extends React.Component {
  render() {
    return <div>Salut {this.props.name}</div>; // => jsx
  }
}
root.render(<HelloMessage name="Thierry" />);

// JS
class HelloMessage extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      "Salut ",
      this.props.name
    );
  }
}
root.render(React.createElement(HelloMessage, { name: "Thierry" }));

------------------------------------------------------------------

## Utilisation de React dans index.js
NB: <props> permet de recuperer les proprieter utiliser dans un element
const Hello = (props)=>{
  retrun <div>
    <p>{props.name}</p> // => affiche la propertie creer dans l'element <Helllo />
    </div>;
}
<Hello name="adramane" /> => 'Hello' represente le nom de la fonction | la class exporter


------------------------------------------------------------------
## configuration de tailwind
NB: si l'installation par defaut de tailwind ne fonctionne pas, reinstaller tailwind ou passer par l'ancien methode avec la creation de fichier input et ouput.

------------------------------------------------------------------
## configuration de firebase



------------------------------------------------------------------
## les evenements
pour utiliser les events sur React on passe par les proprieter par defaut ex:
<button onClick={sendAjaxForm()}>valider</button>
// ou dans un objet
<button onClick={this.sendAjaxForm.bind(this)}>valider</button>

------------------------------------------------------------------
## les HOOKS
les hooks est une serie de functions qui commence par <use>, utilisant une API. ils permettent d'ajouter des fonctionnalites qui sont ratacher a l'etat et au cycle de vie de notre composant.
- useState(): est un hook qui permet de manipuler l'etat d'un element le <props.state> pr exemple modifier la veuleur du compteur.
# NB: UN useState() ne peut pas etre utiliser dans une condition ou une boucle si non cela va changer l'ordre des appelles des functions et alterer le functionnement des hooks. <rappel sur la PILLE d'execution des function par JS>

------------------------------------------------------------------
## TASKS:
- add feat if creadentials doesn't match when login













