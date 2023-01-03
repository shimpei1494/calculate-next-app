import Head from 'next/head'
import { Calculator } from '../components/Calculator'
import style from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>電卓アプリ</title>
        <meta name="description" content="簡易計算用のアプリケーションです" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={style.main}>
        <div>
          <h1 className={style.title}>電卓アプリ</h1>
        </div>
        <Calculator />
      </main>
    </>
  )
}

