import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!!!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <iframe
        src="https://gateway.ipfscdn.io/ipfs/QmUfp6thZQTmNKS6tzijJpxdoBe9X7spHwzRjUh3RPTAwF/nft-drop.html?contract=0xF5C7C49d7736923Fc2aA54141c43b0ad7Ee16F28&chainId=137"
        width="600px"
        height="600px"
        style="max-width:100%;"
        frameborder="0"
        ></iframe>
      </main>

      <Footer />
    </div>
  )
}
