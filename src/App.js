import React, { Component } from 'react';
import './App.css';

let house1 = {
  numberOfPhotos:34,
  imageSource1:"https://media.rightmove.co.uk/dir/58k/57943/68757967/57943_9060918_IMG_01_0000_max_656x437.jpg",
  imageSource2:"https://media.rightmove.co.uk/dir/58k/57943/68757967/57943_9060918_IMG_02_0000_max_656x437.jpg",
  title:"3 bedroom character property for sale",
  address:"Townfield Lane, Mollington, Chester",
  description: `AN EXCITING ADDITION TO THE PROPERTY MARKET! "Ardmore" is quite simply a stunning character filled Victorian home, abundant with light filled rooms of impressive proportions. Boasting a contemporary interior the property has`,
  addedBy:"Bradshaw Farnham & Lea",
  price:"£500,000",
  priceDetails:"Offers Over",
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
  priceDetails:"",
  agentLogo:"https://media.rightmove.co.uk/176k/175901/branch_photo_175901_0000.png",
  phoneNumber:"01244 955183",
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container numberOfPhotos="34" imageSource1={house1.imageSource1} imageSource2={house1.imageSource2} title={house1.title} address={house1.address} description={house1.description} addedOn={house1.addedOn} addedBy={house1.addedBy} price={house1.price} priceDetails={house1.priceDetails} agentLogo={house1.agentLogo} phoneNumber={house1.phoneNumber}/>
        <Container numberOfPhotos="15" imageSource1={house2.imageSource1} imageSource2={house2.imageSource2} title={house2.title} address={house2.address} description={house2.description} addedOn={house2.addedOn} addedBy={house2.addedBy} price={house2.price} priceDetails={house2.priceDetails} agentLogo={house2.agentLogo} phoneNumber={house2.phoneNumber}/>
      </div>
    );
  }
}

const Container = (props) => {
  return (
    <div>
      <Gallery imageSource1={props.imageSource1} imageSource2={props.imageSource2} numberOfPhotos={props.numberOfPhotos} />
      <DescriptionBox title={props.title} address={props.address} description={props.description} addedOn={props.addedOn} addedBy={props.addedBy}/>
      <LikeButton />
      <PriceBox price={props.price} priceDetails={props.priceDetails}/>
      <ContactsBox agentLogo={props.agentLogo} phoneNumber={props.phoneNumber} />
    </div>
  )
}

const Gallery = (props) => {
  return (
    <div className="gallery">
      <PhotosIcons numberOfPhotos={props.numberOfPhotos} />
      <Photo imageSource={props.imageSource1} />
      <Photo imageSource={props.imageSource2} />
    </div>
  )
}

const PhotosIcons = (props) => {
  return (
    <div className="photosIcons">
      <i class="fas fa-solar-panel"></i>
      <i class="fas fa-camera"></i>
      <span>{props.numberOfPhotos}</span>
    </div>
  )
}

const Photo = (props) => {
  return (
    <div>
      <img src={props.imageSource}/>
    </div>
  )
}

const DescriptionBox = (props) => {
  return (
    <div className="descriptionBox">
      <h3>{props.title}</h3>
      <p class="address">{props.address}</p>
      <p>{props.description}</p>
      <p class="addedOn">Added on {props.addedOn} by {props.addedBy}</p>
    </div>
  )
}

const PriceBox = (props) => {
  return (
    <div>
      <p>{props.price}</p>
      <p>{props.priceDetail}</p>
    </div>
  )
}

const ContactsBox = (props) => {
  return (
    <div>
      <p>
        <Logo logoSource={props.agentLogo}/>
        <span class="phoneNumber">{props.phoneNumber}</span><br />
        <span class="localCallRate">Local call rate</span>
      </p>
      <EmailAgent/>
    </div>
  )
}

const Logo = (props) => {
  return (
    <div>
      <img src={props.logoSource}/>
    </div>
  )
}

const EmailAgent = (props) => {
  return (
    <div>
      <p>
        <img class="emailIcon"/>
        Email agent
      </p>
    </div>
  )
}

const LikeButton = (props) => {
  return (
    <div>
      <button><i class="far fa-heart"></i></button>
    </div>
  )
}

export default App;
