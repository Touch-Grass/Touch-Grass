import styles from './page.module.css'

export default function Home() {
  return (
    <body>
    <nav className='navbar'> <img src='../../public/logo-no-dots.svg'></img><header>Touch Grass</header><div className='menu'><button>Sign in</button></div></nav>
    <main>
      <input type='text' placeholder='Where is the grass?' id={styles.search}></input>
    </main>
    </body>
  )
}
