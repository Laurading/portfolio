import Link from 'next/link'

export default function About() {
  return (
    <div>
      <div className="logo">
        <Link href='/'>
          <img src="/img/logo.svg" />
        </Link>
      </div>
      <section className='margin-lr'>
        <div className='padding-tb'>
        <h2 className='padding-tb'>2022 WORK-STUDY</h2>
        <div className='content-col center'>
          <div className="column-4">
            <h3 className="sunrayColor">DATE</h3>
            <p>02/2022</p>
          </div>
          <div className="column-4">
            <h3 className="sunrayColor">COMPANY</h3>
            <p>WizziLab</p>
          </div>
          <div className="column-4">
            <h3 className="sunrayColor">PLACE</h3>
            <p>Montrouge, France</p>
          </div>
          <div className="column-4">
            <h3 className="sunrayColor">ASSIGNMENT</h3>
            <p>Redesign</p>
          </div>
        </div>
        </div>
        <div className='br'>
          <h3>1. DISCOVERY</h3>
          <p>Wizzilab is a company specialized in the field of IoT. Created in 2011, the team evolves as a design office and is now transformed into a sales office. Arriving in the company in February 2022, I was recruited with a view to helping them to communicate their new positioning.</p>
          <p>First of all, my job was to understand the universe of the company and what we did there.</p>
          <p>I had explanations on the different systems and solutions on which the team was working then I did research by myself to deepen the subject.</p>
        </div>
        <div className='br'>
          <h3>2. UNDERSTANDING</h3>
          <p>After learning more about the business environment, my first creative mission was to create brochures explaining the different solutions created by Wizzilab, with descriptions and visuals consistent with them.</p>
          <div className='content-col center padding-tb'>
            <div className='column-3'>
              <img src='/img/wizzilab/wolt.png' />
            </div>
            <div className='column-3'>
              <img src='/img/wizzilab/wizzipark.png' />
            </div>
            <div className='column-3'>
              <img src='/img/wizzilab/uguard.png' />
            </div>
          </div>
          <div className='br'>
            <h3>3. CREATION</h3>
            <p>The brochures were the basis of the redesign because the understanding allowed me to subsequently create the universe of the future website.</p>
          </div>
          <div className='content-col br'>
            <div className='column-2'>
              <img src='/img/wizzilab/solutionbubble/tl.png' />
              <img src='/img/wizzilab/solutionbubble/bl.png' />
            </div>
            <div className='column-2'>
              <img src='/img/wizzilab/solutionbubble/tr.png' />
              <img src='/img/wizzilab/solutionbubble/br.png' />
            </div>
          </div>
          <div className='content-col br'>
          <div className='column-2 br'>
            <img src='/img/wizzilab/secteurs.png'/>
          </div>
          <div className='column-2 br'>
            <img src='/img/wizzilab/secteursselected.png'/>
          </div>
          </div>
        </div>
      </section>

    </div>
  )
}