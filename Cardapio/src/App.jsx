import { useState } from 'react'
import Restaurante from './assets/hashtaurante.webp'
import './App.css'
import {Navegacao} from './Navegacao.jsx'
import { ItemCardapio } from './ItemCardapio.jsx'
import { pratosPrincipais, sobremesas, bebidas } from './cardapio.js'


export function App() {
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);
  
  return <>
    <img src={Restaurante} alt="" className='capa'/>
    <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}/>
    <div className='menu'>
      {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco}  imagem={item.imagem}/>)}
    </div>
    </>
}