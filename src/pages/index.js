import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function Home() {
  const [inputText, setInputText] = useState('')

  const handleInput = event => {
    setInputText(event.target.value)
    if (
      inputText ==
      'Treinem em quanto eles dormem, estude enquanto eles se divertem e viva o que eles sonharam e mostre o dedo médio do topo do Evereste.'
    ) {
      alert('Você acertou, parabéns!')
    }
    if (
      inputText !=
      'Treinem em quanto eles dormem, estude enquanto eles se divertem e viva o que eles sonharam e mostre o dedo médio do topo do Evereste.'
    ) {
      alert('Você errou, inicie novamente!')
    }
  }

  useEffect(() => {
    alert(
      'Bem vindo ao game! Escreva a frase a baixo, caso erre, você retornara para o início. GOOD GAME!'
    )
  }, [])

  return (
    <>
      <Head>
        <title>App - Typer</title>
      </Head>
      <h1>App - Typer</h1>
      <h2>Example</h2>
      <p>
        Treinem em quanto eles dormem, estude enquanto eles se divertem e viva o
        que eles sonharam e mostre o dedo médio do topo do Evereste.
      </p>
      <h2> Write area</h2>
      <textarea onChange={handleInput} />
    </>
  )
}
