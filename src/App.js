import React, { Component } from 'react';
import './App.css';

let house1 = {
  numberOfPhotos:34,
  imageSource1:"https://media.rightmove.co.uk/dir/58k/57943/68757967/57943_9060918_IMG_01_0000_max_656x437.jpg",
  imageSource2:"https://media.rightmove.co.uk/dir/58k/57943/68757967/57943_9060918_IMG_02_0000_max_656x437.jpg",
  title:"3 bedroom character property for sale",
  address:"Townfield Lane, Mollington, Chester",
  description: `AN EXCITING ADDITION TO THE PROPERTY MARKET! "Ardmore" is quite simply a stunning character filled Victorian home, abundant with light filled rooms of impressive proportions. Boasting a contemporary interior the property has`,
  addedOn:"27/11/2018",
  addedBy:"Bradshaw Farnham & Lea",
  price:"£500,000",
  priceDetail:"Offers Over",
  agentLogo:"https://bflhomes.com/images/logo-bflhomes.png",
  phoneNumber:"0151 954 0322",
}

let house2 = {
  numberOfPhotos:15,
  imageSource1:"https://media.rightmove.co.uk/dir/176k/175901/59030625/175901_9187737_IMG_01_0000_max_656x437.jpg",
  imageSource2:"https://media.rightmove.co.uk/dir/176k/175901/59030625/175901_9187737_IMG_02_0000_max_656x437.jpg",
  title:"4 bedroom detached house for sale",
  address:"Curzon Park South, Curzon Park, Chester",
  description: "Situated within a popular and convenient residential location, this 1970's, four bedroom detached house provides well proportioned accommodation that requires modernisation and has scope for further enhancement. The house has well",
  addedOn:"21/12/2018",
  addedBy:"Rickitt Partnership",
  price:"£500,000",
  priceDetail:"",
  agentLogo:"https://media.rightmove.co.uk/176k/175901/branch_photo_175901_0000.png",
  phoneNumber:"01244 955183",
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Containers/>
      </div>
    );
  }
}

const Containers = (props) => {
  return (
    <div className="containers">
        <Container numberOfPhotos="34" imageSource1={house1.imageSource1} imageSource2={house1.imageSource2} title={house1.title} address={house1.address} description={house1.description} addedOn={house1.addedOn} addedBy={house1.addedBy} price={house1.price} priceDetail={house1.priceDetail} agentLogo={house1.agentLogo} phoneNumber={house1.phoneNumber}/>
        <Container numberOfPhotos="15" imageSource1={house2.imageSource1} imageSource2={house2.imageSource2} title={house2.title} address={house2.address} description={house2.description} addedOn={house2.addedOn} addedBy={house2.addedBy} price={house2.price} priceDetail={house2.priceDetail} agentLogo={house2.agentLogo} phoneNumber={house2.phoneNumber}/>
    </div>
  )
}

const Container = (props) => {
  return (
    <div className="container">
      <Gallery imageSource1={props.imageSource1} imageSource2={props.imageSource2} numberOfPhotos={props.numberOfPhotos} />
      <DescriptionBox title={props.title} address={props.address} description={props.description} addedOn={props.addedOn} addedBy={props.addedBy}/>
      <LikeButton />
      <PriceBox price={props.price} priceDetail={props.priceDetail}/>
      <ContactsBox agentLogo={props.agentLogo} addedBy={props.addedBy} phoneNumber={props.phoneNumber} />
    </div>
  )
}

const Gallery = (props) => {
  return (
    <div className="gallery">
      <PhotosIcons numberOfPhotos={props.numberOfPhotos} />
      <Photo imageSource={props.imageSource1} imageAlt="Photo 1" />
      <Photo imageSource={props.imageSource2} imageAlt="Photo 2" />
    </div>
  )
}

const PhotosIcons = (props) => {
  return (
    <div className="photosIcons">
      <i className="fas fa-solar-panel"></i> <i className="fas fa-camera"></i> <span>{props.numberOfPhotos}</span>
    </div>
  )
}

const Photo = (props) => {
  return (
    <div>
      <img className="galleryImg" src={props.imageSource} alt={props.imageAlt}/>
    </div>
  )
}

const DescriptionBox = (props) => {
  return (
    <div className="descriptionBox">
      <h3 className="title">{props.title}</h3>
      <p className="address">{props.address}</p>
      <p className="description">{props.description}</p>
      <p className="added">Added on {props.addedOn} by {props.addedBy}</p>
    </div>
  )
}

const PriceBox = (props) => {
  return (
    <div className="priceBox">
      <p className="price">{props.price}</p>
      <p>{props.priceDetail}</p>
    </div>
  )
}

const ContactsBox = (props) => {
  return (
    <div className="contactsBox">
        <Logo logoSource={props.agentLogo} addedBy={props.addedBy}/>
      <p>
        <span className="phoneNumber">{props.phoneNumber}</span><br />
        <span className="localCallRate">Local call rate</span>
      </p>
      <EmailAgent/>
    </div>
  )
}

const Logo = (props) => {
  return (
    <div>
      <img src={props.logoSource} className="agentLogo" alt={props.addedBy+" logo"}/>
    </div>
  )
}

const EmailAgent = (props) => {
  return (
    <div>
      <p>
        <i className="far fa-envelope"></i> Email agent
      </p>
    </div>
  )
}

const LikeButton = (props) => {
  return (
    <div className="likeButton">
      <i className="far fa-heart"></i>
    </div>
  )
}

export default App;
