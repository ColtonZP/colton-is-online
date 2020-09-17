import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Colton is Online</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div className="container">
          <h1 className="title">coltonis.online</h1>
          <h2 className="description">Under Construction</h2>
          <div className="social">
            <a href="https://www.youtube.com/channel/UCTWHfXdpy_KyxhHtPoJJ4Vw?view_as=subscriber">
              <img src="./youtube.svg" alt="youtube icon" />
            </a>
            <a href="https://twitter.com/coltonisonline">
              <img src="./twitter.svg" alt="twitter icon" />
            </a>
            <a href="https://www.instagram.com/coltonzp/">
              <img src="./insta.svg" alt="instagram icon" />
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
