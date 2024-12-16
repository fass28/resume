export const MyResume = () => {
  return (
    <section className='section' id='resume'>
      <div className='container'>
        <h2 className='mb-5'>
          <span className='text-danger'>My</span> Resume
        </h2>
        <div className='row'>
          <div className='col-md-6 col-lg-4'>
            <div className='card'>
              <div className='card-header'>
                <div className='mt-2'>
                  <h4>Expertise</h4>
                  <span className='line'></span>
                </div>
              </div>
              <div className='card-body'>
                <h6 className='title text-danger'>2017 - Present</h6>
                <p>UX Developer</p>
                <p className='subtitle'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nostrum recusandae, cupiditate ullam dolor ratione
                  repellendus.aliquid repudiandae saepe!.
                </p>
                <hr />
                <h6 className='title text-danger'>2016 - 2017</h6>
                <p>Front-end Developer</p>
                <p className='subtitle'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nostrum recusandae, cupiditate ullam dolor ratione
                  repellendus.aliquid repudiandae saepe!.
                </p>
                <hr />
                <h6 className='title text-danger'>2015 - 2016</h6>
                <p>UX Designer</p>
                <p className='subtitle'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nostrum recusandae, cupiditate ullam dolor ratione
                  repellendus.aliquid repudiandae saepe!.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='card'>
              <div className='card-header'>
                <div className='mt-2'>
                  <h4>Education</h4>
                  <span className='line'></span>
                </div>
              </div>
              <div className='card-body'>
                <h6 className='title text-danger'>2024 - Present</h6>
                <p>Website Developer</p>
                <p className='subtitle'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Error corrupti recusandae obcaecati odit repellat ducimus cum,
                  minus tempora aperiam at.
                </p>
                <hr />
                <h6 className='title text-danger'>2013 - 2024</h6>
                <p>Mecatronic Engineer</p>
                <p className='subtitle'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
                  id officiis quas placeat quia voluptas dolorum rem animi
                  nostrum quae.aliquid repudiandae saepe!.
                </p>
                <hr />
                <h6 className='title text-danger'>2009 - 2013</h6>
                <p>Process Controll technician</p>
                <p className='subtitle'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nostrum recusandae, cupiditate ullam dolor ratione
                  repellendus.aliquid repudiandae saepe!.
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='card'>
              <div className='card-header'>
                <div className='pull-left'>
                  <h4 className='mt-2'>Skills</h4>
                  <span className='line'></span>
                </div>
              </div>
              <div className='card-body pb-2'>
                <h6>hTL5 &amp; CSS3</h6>
                <div className='progress mb-3'>
                  <div
                    className='progress-bar bg-danger'
                    role='progressbar'
                    style={{ width: '97%' }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
                <h6>JavaScript</h6>
                <div className='progress mb-3'>
                  <div
                    className='progress-bar bg-danger'
                    role='progressbar'
                    style={{ width: '85%' }}
                  ></div>
                </div>
                <h6>PHP</h6>
                <div className='progress mb-3'>
                  <div
                    className='progress-bar bg-danger'
                    role='progressbar'
                    style={{ width: '80%' }}
                  ></div>
                </div>
                <h6>SQL</h6>
                <div className='progress mb-3'>
                  <div
                    className='progress-bar bg-danger'
                    role='progressbar'
                    style={{ width: '90%' }}
                  ></div>
                </div>
                <h6>Laborum</h6>
                <div className='progress mb-3'>
                  <div
                    className='progress-bar bg-danger'
                    role='progressbar'
                    style={{ width: '90%' }}
                  ></div>
                </div>
                <h6>Tempora</h6>
                <div className='progress mb-3'>
                  <div
                    className='progress-bar bg-danger'
                    role='progressbar'
                    style={{ width: '90%' }}
                  ></div>
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='card-header'>
                <div className='pull-left'>
                  <h4 className='mt-2'>Languages</h4>
                  <span className='line'></span>
                </div>
              </div>
              <div className='card-body pb-2'>
                <h6>English</h6>
                <div className='progress mb-3'>
                  <div
                    className='progress-bar bg-danger'
                    role='progressbar'
                    style={{ width: '80%' }}
                  ></div>
                </div>
                <h6>French</h6>
                <div className='progress mb-3'>
                  <div
                    className='progress-bar bg-danger'
                    role='progressbar'
                    style={{ width: '45%' }}
                  ></div>
                </div>
                <h6>Spanish</h6>
                <div className='progress mb-3'>
                  <div
                    className='progress-bar bg-danger'
                    role='progressbar'
                    style={{ width: '67%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
