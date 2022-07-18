import Link from 'next/link'

export default function Piltovalley() {
  return (
    <div>
      <div className="logo">
        <Link href='/'>
          <img src="/img/cultured-logo.svg" />
        </Link>
      </div>
      <div className="about">
        <h3 className="culturedColor">ABOUT ME</h3>
      </div>
      <section className="crayolaBg padding-tb">
        <h1 className="culturedColor center">Gouzou</h1>
      </section>
      <section>
        <h2 className='center'>PREVIEW</h2>
        <div className='center'>
          <p>***METTRE UNE VIDEO***</p>
        </div>
      </section>
      <section className='margin-lr padding-tb'>
      <h2 className='center'>CONTEXT</h2>
      <div className='content-col center'>
        <div className="column-3">
          <h3 className="sunrayColor">YEAR</h3>
          <p>2022</p>
          </div>
          <div className="column-3">
          <h3 className="sunrayColor">TYPE</h3>
          <p>Modelization</p>
          </div>
          <div className="column-3">
          <h3 className="sunrayColor">TECH</h3>
          <p>Magical Voxel</p>
        </div>
        </div>
      </section>
      <section>
        <h2 className='center'>MOODBOARD</h2>
      </section>
      <section className="margin-lr padding-tb">
      <h2 className='center'>RESULTS</h2>
        <div className="content-col br">
          <div className="column-4">
            <img src="../img/piltovalley/1.png" />
          </div>
          <div className="column-4">
            <img src="../img/piltovalley/2.png" />
          </div>
          <div className="column-4">
            <img src="../img/piltovalley/3.png" />
          </div>
          <div className="column-4">
            <img src="../img/piltovalley/4.png" />
          </div>
        </div>
      </section>
    </div>
  )
}