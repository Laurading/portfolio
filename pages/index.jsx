import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <div className="logo">
        <Link href='/'>
          <img src="/img/logo.svg" />
        </Link>
      </div>
      <div className="about">
        <h3 className="sunrayColor">ABOUT ME</h3>
      </div>
      <div className="landing-text">
        <div>
          <h1 className="sunrayColor">Welcome and have fun ! :)</h1>
          <h3>LAURA DING</h3>
        </div>
      </div>
      <div className="project-section">
        <div className="project-card">
          <Link href='/gouzou'>
            <img src="/img/homepage/gouzou.png" />
          </Link>
        </div>
        <div className="project-card">
          <Link href='/gnr'>
            <img src="/img/homepage/bat.png" />
          </Link>
        </div>
        <div className="project-card"><img src="/img/GNR.png" /></div>
        <div className="project-card"><img src="/img/GNR.png" /></div>
        <div className="project-card"><img src="/img/GNR.png" /></div>
        <div className="project-card"><img src="/img/GNR.png" /></div>
        <div className="project-card"><img src="/img/GNR.png" /></div>
        <div className="project-card"><img src="/img/GNR.png" /></div>
        <div className="project-card"><img src="/img/GNR.png" /></div>
        <div className="project-card"><img src="/img/GNR.png" /></div>
        <div className="project-card"><img src="/img/GNR.png" /></div>
        <div className="project-card"><img src="/img/GNR.png" /></div>
      </div>
    </div>
  )
}

