export default function styleguide() {
  return (
      <div className='wrapper
            container
            p-4
            lg:p-0
            flex
            flex-col
            min-h-screen
        '>
            <section className='style-guide py-40'>

            <div className='mb-8'>
                  <p className="fs-hero-title">Hero Text</p>
            </div>

            <div className='mb-8'>
                  <p className="fs-h1">H1 Text</p>
            </div>
            
            <div className='mb-8'>
                  <p className="fs-h3">H3 Text</p>
            </div>

            <div className='mb-8'>
                  <p className="fs-h5">H5 Text</p>
            </div>

            <div className='mb-8'>
                  <p className="fs-base">Base Text</p>
            </div>

            <div className='mb-8'>
                  <p className="fs-caption font-light">Caption Text</p>
            </div>

            </section>
      </div>
  )
}
