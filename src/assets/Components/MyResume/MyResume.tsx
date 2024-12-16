export const MyResume = () => {
  return (
    <>
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
                    I have completed courses on Udemy and Platzi focused on web
                    development with React, working on projects using JavaScript
                    and TypeScript. I have experience with styling frameworks
                    such as Tailwind, Bootstrap, and Emotion Styled, as well as
                    making API calls with Axios, GraphQL, and Fetch
                  </p>
                  <hr />
                  <h6 className='title text-danger'>2013 - 2019</h6>
                  <p>Mecatronic Engineer</p>
                  <p className='subtitle'>
                    Project leader in industrial plant automation,
                    microcontroller programming, and development of control
                    screens, processes, and data distribution systems.
                  </p>
                  <hr />
                  <h6 className='title text-danger'>2009 - 2013</h6>
                  <p>Process Controll technician</p>
                  <p className='subtitle'>
                    Industrial plant maintenance technician, performing machine
                    maintenance tasks and resolving issues with immediate
                    'hotfix' solutions.
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
                      style={{ width: '90%' }}
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
                  <h6>TypeScript</h6>
                  <div className='progress mb-3'>
                    <div
                      className='progress-bar bg-danger'
                      role='progressbar'
                      style={{ width: '60%' }}
                    ></div>
                  </div>
                  <h6>API</h6>
                  <div className='progress mb-3'>
                    <div
                      className='progress-bar bg-danger'
                      role='progressbar'
                      style={{ width: '80%' }}
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
                  <h6>Spanish</h6>
                  <div className='progress mb-3'>
                    <div
                      className='progress-bar bg-danger'
                      role='progressbar'
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section bg-dark text-center'>
        <div className='container'>
          <div className='row text-center'>
            <div className='col-md-6 col-lg-4'>
              <div className='row '>
                <div className='col-5 text-right text-light border-right py-3'>
                  <div className='m-auto'>
                    <i className='ti-alarm-clock icon-xl'></i>
                  </div>
                </div>
                <div className='col-7 text-left py-3'>
                  <h1 className='text-danger font-weight-bold font40'>+300</h1>
                  <p className='text-light mb-1'>Hours Worked</p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='row'>
                <div className='col-5 text-right text-light border-right py-3'>
                  <div className='m-auto'>
                    <i className='ti-layers-alt icon-xl'></i>
                  </div>
                </div>
                <div className='col-7 text-left py-3'>
                  <h1 className='text-danger font-weight-bold font40'>+10</h1>
                  <p className='text-light mb-1'>Project Finished</p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='row'>
                <div className='col-5 text-right text-light border-right py-3'>
                  <div className='m-auto'>
                    <i className='ti-face-smile icon-xl'></i>
                  </div>
                </div>
                <div className='col-7 text-left py-3'>
                  <h1 className='text-danger font-weight-bold font40'>1</h1>
                  <p className='text-light mb-1'> Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
