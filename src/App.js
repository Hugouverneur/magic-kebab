import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import KebabType from './components/KebabType/KebabType'
import Meat from './components/Meat/Meat'
import Vegetables from './components/Vegetables/Vegetables';
import Sauce from './components/Sauce/Sauce';
import KebabConfirmation from './components/KebabConfirmation/KebabConfirmation';
import Checkout from './components/Checkout/Checkout';
import DefaultKebab from './components/DefaultKebab/DefaultKebab';
import Loader from './components/Loader/Loader';
import FatKebab from './components/FatKebab/FatKebab'

class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        kebab: {},
        checkout: [],
        page: 0,
        error: "",
        combination: "",      
      }

      this.onKeyPress = this.onKeyPress.bind(this);
    }

    selectKebab = (kebabType) => {
      this.setState({
        kebab: {type: kebabType},
        page: 1
      })
    }

    selectMeat = (kebabMeat) => {
      let kebab = this.state.kebab;
      this.setState({
        kebab: {...kebab, meat: kebabMeat},
        page: 2
      })
    }

    selectVegetables = (kebabVegetables) => {
      let kebab = this.state.kebab;
      this.setState({
        kebab: {...kebab, vegetables: kebabVegetables},
        page: 3
      })
    }

    selectSauces = (kebabSauces) => {
      let compteur = 0;
      kebabSauces.forEach(sauce => {
          if(sauce.isSelected) {
              compteur += 1;
          }
      })
  
      if(compteur < 3) {
        let kebab = this.state.kebab;
        this.setState({
          kebab: {...kebab, sauces: kebabSauces},
          page: 4
        })
      } else {
        this.setState({
          error: "Trop de sauces sélectionnées"
        })
        console.log("Trop de sauces sélectionnées")
      }  
    }

    kebabConfirmation = (kebab) => {
      const checkout = this.state.checkout
      document.body.style = 'background: #fff6d6;'
      document.getElementsByClassName("header")[0].children[1].hidden = true
      document.getElementsByClassName("header")[0].children[0].hidden = false

      this.setState({
        checkout: [...checkout, {kebab: kebab, quantity: 1, id: checkout.length}],
        combination: "",
        page: 0 
      })
    }

    kebabAnnulation = () => {
      this.setState({
        kebab: {},
        page: 0 
      })
    }

    deleteKebab = (id) => {
      const checkout = this.state.checkout
      
      checkout.splice(checkout.findIndex(element => element.id === id), 1)

      this.setState({
        checkout: checkout,
      })
    }
    
    setQuantity = (id, quantity) => {
      const checkout = this.state.checkout
      
      if(checkout.find(element => element.id === id)){
        checkout[checkout.findIndex(element => element.id === id)].quantity += quantity
      }

      this.setState({
        checkout: checkout,
      })
    }

    orderCheckout = () => {
      document.body.style = 'background: #fff6d6;'
      document.getElementsByClassName("header")[0].children[1].hidden = true
      document.getElementsByClassName("header")[0].children[0].hidden = false

      this.setState({
        checkout: [],
        page: 5
      })

      setTimeout(() => { 
        this.setState({
          page: 0
        })
      }, 4000);
    }

    onKeyPress(event){
      const combination = this.state.combination
      let key = event.keyCode
      this.setState({
        combination: combination+key
      })

      let code = this.state.combination

      if(code.includes("706584")) {
        this.setState({
          page: 6
        })
      }
    }

    componentDidMount(){
      document.addEventListener("keydown", this.onKeyPress, false);
    }
    componentWillUnmount(){
      document.removeEventListener("keydown", this.onKeyPress, false);
    }

    render() {
      let component
      let checkout = this.state.checkout
      let showCheckout = ""
      let page = this.state.page
      
      switch (page) {
        case 0:
          component = <div><KebabType selectKebab={this.selectKebab}/><DefaultKebab addToCheckout={this.kebabConfirmation}/></div>;
          break;
        case 1:
          component = <Meat selectMeat={this.selectMeat}/>;
          break;
        case 2:
          component = <Vegetables selectVegetables={this.selectVegetables} />
          break;
        case 3:
          component = <Sauce selectSauces={this.selectSauces} tooManySauce={this.state.error}/>
          break;
        case 4:
          component = <KebabConfirmation kebabConfirmation={this.kebabConfirmation} kebab={this.state.kebab} kebabAnnulation={this.kebabAnnulation} />
          break;
        case 5:
          component = <Loader Order={this.orderCheckout} />
          break;
        case 6:
          component = <FatKebab addToCheckout={this.kebabConfirmation}/>
          break
        default:
          component = <div>Erreur de chargement</div>
          console.log("Erreur")
      }

      if(checkout.length !== 0) {
        showCheckout = <Checkout checkout={this.state.checkout} deleteKebab={this.deleteKebab} setQuantity={this.setQuantity} Order={this.orderCheckout} />
      }

      return (
        <div className="app_container">
          <Header />
          {component}
          {showCheckout}
        </div>
      );
    }
}

export default App;
