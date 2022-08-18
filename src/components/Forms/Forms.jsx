import React from 'react'
import Style from './Forms.module.css'

const Forms = () => {
  return (
    <div className={Style.forms}>
        <div className={Style.formSection}>
            <h3>Ajude o algorítimo a ser mais certeiro</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend. Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus.</p>
        </div>
        <div className={Style.formSection}>
            <form>
                <label>Seu nome:</label><br></br>
                <input type="text"></input><br></br>
                <label>E-mail:</label><br></br>
                <input type="email"></input><br></br>
                <label>CPF:</label><br></br>
                <input type="number"></input><br></br>
                <input type="radio" value="masculino"></input>
                <label>Masculino</label>
                <input type="radio" value="feminino"></input>
                <label>Feminino</label><br></br>
                <button>Enviar</button>
            </form>
        </div>
    </div>
  )
}

export default Forms