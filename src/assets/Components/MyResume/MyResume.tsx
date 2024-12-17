import { useTranslation } from 'react-i18next'

export const MyResume = () => {
  const { t: translate } = useTranslation()
  return (
    <>
      <section className='section' id='resume'>
        <div className='container'>
          <h2 className='mb-5'>{translate('my_resume:title')}</h2>
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
                  <h6 className='title text-danger'>
                    {translate('my_resume:expertise.experience_1.year')}
                  </h6>
                  <p>UX Developer</p>
                  <p className='subtitle'>
                    {translate('my_resume:expertise.experience_1.text')}
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
                    <h4> {translate('my_resume:education.title')}</h4>
                    <span className='line'></span>
                  </div>
                </div>
                <div className='card-body'>
                  <h6 className='title text-danger'>
                    {translate('my_resume:education.degree_1.year')}
                  </h6>
                  <p>{translate('my_resume:education.degree_1.position')}</p>
                  <p className='subtitle'>
                    {translate('my_resume:education.degree_1.text')}
                  </p>
                  <hr />
                  <h6 className='title text-danger'>
                    {translate('my_resume:education.degree_2.year')}
                  </h6>
                  <p> {translate('my_resume:education.degree_2.position')}</p>
                  <p className='subtitle'>
                    {translate('my_resume:education.degree_2.text')}
                  </p>
                  <hr />
                  <h6 className='title text-danger'>
                    {translate('my_resume:education.degree_3.year')}
                  </h6>
                  <p>{translate('my_resume:education.degree_3.position')}</p>
                  <p className='subtitle'>
                    {translate('my_resume:education.degree_3.text')}
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
