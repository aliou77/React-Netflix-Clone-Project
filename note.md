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
<Hello name="adramane" /> => 'Hello' represente le nom de la fonction | la class exporter

------------------------------------------------------------------
## configuration de firebase



















