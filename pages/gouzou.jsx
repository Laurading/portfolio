import Link from 'next/link'

export default function Gouzou() {
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
      <section className='margin-lr padding-tb'>
      <h2 className='center'>CONTEXT</h2>
      <div className='content-col center'>
        <div className="column-3">
          <h3 className="sunrayColor">YEAR</h3>
          <p>2022</p>
          </div>
          <div className="column-3">
          <h3 className="sunrayColor">TYPE</h3>
          <p>Motion Design</p>
          </div>
          <div className="column-3">
          <h3 className="sunrayColor">TECH</h3>
          <p>After Effect, Photoshop</p>
        </div>
        </div>
      </section>
      <section className="margin-lr padding-tb">
      <h2 className='center'>RESULTS</h2>
        <h3 className="sunrayColor br">ORIGINAL IMAGE</h3>


        <div className="content-col br">

          <div className="column-3">
            <img src="img/gouzou/robot.png" />
          </div>
          <div className="column-3">
            <img src="img/gouzou/bricoleur.png" />
          </div>
          <div className="column-3">
            <img src="img/gouzou/poupeeRusse.png" />
          </div>



        </div>
        <h3 className="sunrayColor br">MOTION</h3>
        <div className='content-col'>

          <div className="column-3">
            <video loop autoPlay src="img/gouzou/robot.mp4" />
          </div>

          <div className="column-3">
            <video loop autoPlay src="img/gouzou/bricoleur.mp4" />
          </div>
          <div className="column-3">
            <video loop autoPlay src="img/gouzou/poupeeRusse.mp4" />
          </div>
        </div>
      </section>
    </div>
  )
}

