import { useTranslation } from 'react-i18next'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ConstructionIcon from '@mui/icons-material/Construction';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import '../../App.css'
import '../../index.css'


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
                    <h4>
                      {translate('my_resume:expertise.title')}
                    </h4>
                    <span className='line'></span>
                  </div>
                </div>
                <div className='card-body'>
                  <h6 className='title text-danger'>
                    {translate('my_resume:expertise.experience_1.year')}
                  </h6>
                  <p className='subtitle'>
                    {translate('my_resume:expertise.experience_1.text')}
                  </p>
                  <hr />
                  <h6 className='title text-danger'>
                    {translate('my_resume:expertise.experience_2.year')}
                  </h6>
                  <p className='subtitle'>
                    {translate('my_resume:expertise.experience_2.text')}
                  </p>
                  <hr />
                  <h6 className='title text-danger'>
                    {translate('my_resume:expertise.experience_3.year')}

                  </h6>
                  <p className='subtitle'>
                    {translate('my_resume:expertise.experience_3.text')}
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
                    <h4 className='mt-2'>
                      {translate('my_resume:skills.title')}

                    </h4>
                    <span className='line'></span>
                  </div>
                </div>
                <div className='card-body pb-2'>
                  <h6>
                    {translate('my_resume:skills.skill_1')}
                  </h6>
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
                  <h6>
                    {translate('my_resume:skills.skill_2')}
                  </h6>
                  <div className='progress mb-3'>
                    <div
                      className='progress-bar bg-danger'
                      role='progressbar'
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                  <h6>
                    {translate('my_resume:skills.skill_3')}
                  </h6>
                  <div className='progress mb-3'>
                    <div
                      className='progress-bar bg-danger'
                      role='progressbar'
                      style={{ width: '60%' }}
                    ></div>
                  </div>
                  <h6>
                    {translate('my_resume:skills.skill_4')}
                  </h6>
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
                    <h4 className='mt-2'>
                      {translate('my_resume:languages.title')}
                    </h4>
                    <span className='line'></span>
                  </div>
                </div>
                <div className='card-body pb-2'>
                  <h6>
                    {translate('my_resume:languages.language_1')}
                  </h6>
                  <div className='progress mb-3'>
                    <div
                      className='progress-bar bg-danger'
                      role='progressbar'
                      style={{ width: '80%' }}
                    ></div>
                  </div>
                  <h6>
                    {translate('my_resume:languages.language_2')}
                  </h6>
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
      <section className='bg-dark text-center' style={{ padding: '50px 0', border: '1px  solid white', borderLeft: 'none', borderRight: 'none' }}>

        <div className='container'>
          <div className='row text-center'>
            <div className='col-md-6 col-lg-4'>
              <div className='row '>
                <div className='col-5 text-right text-light border-right py-3'>
                  <div className='m-auto'>
                    <QueryBuilderIcon sx={{ fontSize: 60 }} />
                  </div>
                </div>
                <div className='col-7 text-left py-3'>
                  <h1 className='text-danger font-weight-bold font40'>
                    {translate('my_resume:stats.coding.quantity')}
                  </h1>
                  <p className='text-light mb-1'>
                    {translate('my_resume:stats.coding.text')}
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='row'>
                <div className='col-5 text-right text-light border-right py-3'>
                  <div className='m-auto'>
                    <ConstructionIcon sx={{ fontSize: 60 }} />
                  </div>
                </div>
                <div className='col-7 text-left py-3'>
                  <h1 className='text-danger font-weight-bold font40'>
                    {translate('my_resume:stats.projects.quantity')}
                  </h1>
                  <p className='text-light mb-1'>
                    {translate('my_resume:stats.projects.text')}
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='row'>
                <div className='col-5 text-right text-light border-right py-3'>
                  <div className='m-auto'>
                    <PersonAddAlt1Icon sx={{ fontSize: 60 }} />
                  </div>
                </div>
                <div className='col-7 text-left py-3'>
                  <h1 className='text-danger font-weight-bold font40'>
                    {translate('my_resume:stats.clients.quantity')}
                  </h1>
                  <p className='text-light mb-1'>
                    {translate('my_resume:stats.clients.text')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  )
}
