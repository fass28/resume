import '../../../App.css'
import '../../../index.css'
import avatar from '../../img/avatar.jpg'

export const MyPortfolio = () => {
  return (
    <section className=' section bg-custom-gray' id='portfolio'>
      <div className='container'>
        <h1 className='mb-5 '>
          <span className='text-danger'>My</span> Portfolio
        </h1>
        <div className='portfolio'>
          <div className='portfolio-container row'>
            <div className='col-md-6 col-lg-4 web new'>
              <div className='portfolio-item'>
                <img
                  src={avatar}
                  className='img-fluid'
                  alt='Download free bootstrap 4 admin dashboard, free boootstrap 4 templates'
                />
                <div className='content-holder'>
                  <a className='img-popup' href={avatar} />
                  <div className='text-holder'>
                    <h6 className='title'> AlexPress MarketPlace</h6>
                    <p className='subtitle'>
                      Website for buying and selling products, with a user
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 web new'>
              <div className='portfolio-item'>
                <img
                  src={avatar}
                  className='img-fluid'
                  alt='Download free bootstrap 4 admin dashboard, free boootstrap 4 templates'
                />
                <div className='content-holder'>
                  <a className='img-popup' href={avatar} />
                  <div className='text-holder'>
                    <h6 className='title'> AlexPress MarketPlace</h6>
                    <p className='subtitle'>
                      Website for buying and selling products, with a user
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 advertising new'>
              <div className='portfolio-item'>
                <img
                  src={avatar}
                  className='img-fluid'
                  alt='Download free bootstrap 4 admin dashboard, free boootstrap 4 templates'
                />
                <div className='content-holder'>
                  <a className='img-popup' href={avatar} />
                  <div className='text-holder'>
                    <h6 className='title'> AlexPress MarketPlace</h6>
                    <p className='subtitle'>
                      Website for buying and selling products, with a user
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 advertising new'>
              <div className='portfolio-item'>
                <img
                  src={avatar}
                  className='img-fluid'
                  alt='Download free bootstrap 4 admin dashboard, free boootstrap 4 templates'
                />
                <div className='content-holder'>
                  <a className='img-popup' href={avatar} />
                  <div className='text-holder'>
                    <h6 className='title'> AlexPress MarketPlace</h6>
                    <p className='subtitle'>
                      Website for buying and selling products, with a user
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 advertising new'>
              <div className='portfolio-item'>
                <img
                  src={avatar}
                  className='img-fluid'
                  alt='Download free bootstrap 4 admin dashboard, free boootstrap 4 templates'
                />
                <div className='content-holder'>
                  <a className='img-popup' href={avatar} />
                  <div className='text-holder'>
                    <h6 className='title'> AlexPress MarketPlace</h6>
                    <p className='subtitle'>
                      Website for buying and selling products, with a user
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 advertising new'>
              <div className='portfolio-item'>
                <img
                  src={avatar}
                  className='img-fluid'
                  alt='Download free bootstrap 4 admin dashboard, free boootstrap 4 templates'
                />
                <div className='content-holder'>
                  <a className='img-popup' href={avatar} />
                  <div className='text-holder'>
                    <h6 className='title'> AlexPress MarketPlace</h6>
                    <p className='subtitle'>
                      Website for buying and selling products, with a user
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
