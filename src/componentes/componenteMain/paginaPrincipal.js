import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link, hashHistory}        from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import TituloCabecera from './componenteTonto';
import HeaderClass from'../headers/header.js';
import {Button,ButtonToolbar}    from 'react-bootstrap';
import DraggableButton from'../draggables/draggableElement.js';
//const realPath = require('');

class PaginaPrincipal extends Component{
  constructor(props){
    super(props);
    this.state ={
      propiedades:{},
      selectedElement:"",
      counter:1,
      cardView:{
        type:'',
        orientation:'',
        contenido:[]
      },
      interactiveObjects:[],
      interactive:{},
      htmlElement:'Button'
    };

    this.adentro = this.adentro.bind(this);
    this.changeNameWithClick = this.changeNameWithClick.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.drag = this.drag.bind(this);
    this.stopDrag = this.stopDrag.bind(this);
    this.selectedElement = this.selectedElement.bind(this);
    this.rotate = this.rotate.bind(this);

    this.aumentarTop = this.aumentarTop.bind(this);
    this.aumentarBottom = this.aumentarBottom.bind(this);
    this.aumentarRight = this.aumentarRight.bind(this);
    this.aumentarLeft = this.aumentarLeft.bind(this);

    this.moveDown = this.moveDown.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.moveUp = this.moveUp.bind(this);
    this.moveLeft = this.moveLeft.bind(this);

    this.showJsonInfo = this.showJsonInfo.bind(this);
    this.addElementsIntoCardView = this.addElementsIntoCardView.bind(this);
    this.addChildrens = this.addChildrens.bind(this);
  }

  changeNameWithClick(){
    this.setState({propiedades:{"mensaje":"con clamato"}});
  }

  drag(ev) {
     ev.dataTransfer.setData("text", ev.target.id);
  }

   adentro(e) {
    e.preventDefault;
    let contenedorActual = e.target.id;
    let data = e.dataTransfer.getData("text");
    let elemento = document.getElementById(data);
    e.target.appendChild(elemento);

    let botonBloque = (contenedorActual=='final') ?
     elemento.className = "btn btn-block" :
      elemento.className = "btn btn-info";
  }

   addElementsIntoCardView(){
     let element = document.getElementById(this.state.selectedElement);
     let json = {};
     json.elementId = element.id;
     json.className=element.className;
     json.positionTop = element.style.top;
     json.positionBot = element.style.bottom;
     json.positionLeft = element.style.left;
     json.positionRight = element.style.right;
     json.color = element.style.backgroundColor;
     this.setState({interactive:json});
     //this.state.interactiveObjects.push(json);
     console.log(this.state.interactive);
   }

   componentDidMount(){
     const jsonInfo = [
       {
         "type": "layout",
         "id": "layout1",
         "width": "match",
         "height": "wrap",
         "orientation": "vertical",
         "childs": [
           {
             "type": "label",
             "id": "labelName",
             "text": "Name:",
             "text_size": "22sp"
           },
           {
             "type": "textinput",
             "id": "textInputName",
             "width": "match",
             "height": "wrap",
             "text": "Name"
           }
         ]
       },
       {
         "type": "layout",
         "id": "layout2",
         "width": "match",
         "height": "wrap",
         "orientation": "horizontal",
         "gravity": "center",
         "childs": [
           {
             "type": "button",
             "id": "btnCancel",
             "width": "wrap",
             "height": "wrap",
             "text": "Cancel"
           },
           {
             "type": "button",
             "id": "btnSend",
             "width": "wrap",
             "height": "wrap",
             "text": "Send"
           }
         ]
       }
     ];
     this.setState({interactiveObjects:jsonInfo});
     console.log(this.state.interactiveObjects);
   }

  stopDrag(e){
    e.preventDefault();
  }

  selectedElement(e){
    let selectedElement = e.target.id;
    const currentyElementSelected = document.getElementById(selectedElement);
    let elementStyle = currentyElementSelected.style;
    elementStyle.position = 'relative';
    this.setState({selectedElement:selectedElement});
  }

  changeColor(){
    const currentyElementSelected = document.getElementById(this.state.selectedElement);
    currentyElementSelected.style.backgroundColor = 'red';
  }

  aumentarTop(top){
    let realPosition = (realPosition != "") ? top.split('%') : 0;
    return Number(realPosition[0]) + 1;
  }

  aumentarBottom(bottom){
    let realBotPosition = (realBotPosition != "") ? bottom.split('%') : 0;
    return Number(realBotPosition[0]) - 1;
  }

  aumentarRight(right){
    let realRightPosition = (realRightPosition != "") ? right.split('%') : 0;
    return Number(realRightPosition[0]) + 1;
  }

  aumentarLeft(left){
    let realLeftPosition = (realLeftPosition != "") ? left.split('%') : 0;
    return Number(realLeftPosition[0]) - 1;
  }

  rotate(){
    let giro = this.state.counter;
    let rota = 90 * giro;
    document.getElementById("final").style.transform = "rotate("+rota+"deg)";
    this.setState({counter : this.state.counter + 1});
  }

  moveLeft(){
    const currentyElementSelected = document.getElementById(this.state.selectedElement);
    let elementStyle = currentyElementSelected.style;
    let elementLeftisHigging = this.aumentarLeft(elementStyle.right);
    elementStyle.right = elementLeftisHigging+'%';
    // console.log(currentyElementSelected.getBoundingClientRect());
  }

  moveRight(){
    const currentyElementSelected = document.getElementById(this.state.selectedElement);
    let elementStyle = currentyElementSelected.style;
    let elementRightisHigging = this.aumentarRight(elementStyle.right);
    elementStyle.right = elementRightisHigging+'%';
  }

  moveUp(){
      const currentyElementSelected = document.getElementById(this.state.selectedElement);
      let elementStyle = currentyElementSelected.style;
      let elementBotpisHigging = this.aumentarBottom(elementStyle.top);
      elementStyle.top = elementBotpisHigging+'%';
  }

  moveDown(){
      const currentyElementSelected = document.getElementById(this.state.selectedElement);
      let elementStyle = currentyElementSelected.style;
      let elementTopisHigging =  this.aumentarTop(elementStyle.top);
      elementStyle.top = elementTopisHigging+'%';
  }

  showJsonInfo(){
   const interactiveObjects = this.state.interactiveObjects;
   interactiveObjects.map((item)=>{
     console.log(item);
   });
  }

  addChildrens(item){

    if(item.hasOwnProperty('childs')){

    const tipos =  item.childs.forEach((x)=>{
      console.log(x);
      return x;
      });
    // console.log(item.childs);
     console.log(tipos);

      //let hijo = <tipos.type> {tipos.text} </tipos.type>
      //return <item.type> {hijo} </item.type>;
    }
  }

render(){
  return(
    <div className="container">

          <div className="col-md-4 text-center" id="final" onDrop={this.adentro} onDragOver={this.stopDrag}
            style={{
            position: 'absolute',
            width:'25%',
            left: '10%',
            height:'60%',
            top:'25%',
            zIndex: 5,
            border: '5px',
            borderStyle: 'solid',
            borderColor: '#FB7461'
          }}>
          {
            this.state.interactiveObjects.map((item)=>{
              let tipoElemento = (item.type ==='layout') ? 'div' : item.type;
            //  console.log(item.hasOwnProperty('childs'));
              let code = this.addChildrens(item);
              return(
                code
              );
            })
          }
          </div>
          <div className="col-md-4"
            style={{
              left:'50%',
              top:'50%',
              position:'absolute'}}>
          <Button onClick={this.moveUp}> move up </Button> <br></br>
          <Button onClick={this.moveLeft}> move left </Button>
          <Button onClick={this.changeColor}> color </Button>
          <Button onClick={this.moveRight}> move right </Button><br></br>
          <Button onClick={this.moveDown}> move down </Button> <br></br>
          <Button onClick={this.rotate}> rotate </Button>
          <Button onClick={this.showJsonInfo}> json </Button>
          <this.state.htmlElement> hola</this.state.htmlElement>
          </div>

        <div className="col-md-4" id="inicial" onDrop={this.adentro} onDragOver={this.stopDrag}
          style={{
          position: 'absolute',
          width:'25%',
          left: '70%',
          height:'60%',
          top:'25%',
          zIndex: 5,
          border: '5px',
          borderStyle: 'solid',
          borderColor: '#FB7461'
          }}>

          <DraggableButton
            dragStart = {this.drag}
            descripcion = {"piedra"}
            selectedElement={this.selectedElement}/>
          <DraggableButton
            dragStart = {this.drag}
            descripcion = {"papel"}
            selectedElement={this.selectedElement}/>
          <DraggableButton
            dragStart = {this.drag}
            descripcion = {"tijera"}
            selectedElement={this.selectedElement}/>
        </div>

    </div>
    );
  }
}


export default PaginaPrincipal;
