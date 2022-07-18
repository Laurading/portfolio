import Link from 'next/link'

export default function GNR() {
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
        <h1 className="culturedColor center">GNR</h1>
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
          <p>Random Generator</p>
          </div>
          <div className="column-3">
          <h3 className="sunrayColor">TECH</h3>
          <p>Processing</p>
        </div>
        </div>
      </section>
      <section className='padding-tb'>
      <h2 className='center'>RESULTS</h2>
        <div className='content-col'>
          <div className='column-4'>
            <img src="/img/gnr/1.png"/>
          </div>
          <div className='column-4'>
            <img src="/img/gnr/2.png"/>
          </div>
          <div className='column-4'>
            <img src="/img/gnr/3.png"/>
          </div>
          <div className='column-4'>
            <img src="/img/gnr/4.png"/>
          </div>
        </div>
      </section>
      <section className='margin-lr padding-tb'>
        <h2 className='center'>ASSETS</h2>
        <div className='content-col'>
        <div className='column-4'>
          <img className='assets' src='/img/gnr/blue.png'/>
        </div>
        <div className='column-4'>
          <img className='assets' src='/img/gnr/bigben.png'/>
        </div>
        <div className='column-4'>
          <img className='assets' src='/img/gnr/green.png'/>
        </div>
        <div className='column-4'>
          <img className='assets' src='/img/gnr/pink.png'/>
        </div>
        </div>
      </section>
    </div>
  )
}

