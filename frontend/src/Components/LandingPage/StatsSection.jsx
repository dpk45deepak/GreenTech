import React from 'react'

const Stats = () => {
  return (
    <section className="py-12 px-6 bg-greentech-light">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Knock Knock! You've Stepped Into Our Zone!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-greentech-dark mb-2">50%</div>
            <p className="text-gray-700">Increase in Crop Yield with Sirgo Sustainable Solutions.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-greentech-dark mb-2">45%</div>
            <p className="text-gray-700">Reduction in Water Usage with Sirgo Smart Irrigation.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h3 className="font-semibold mb-4">So You Must:</h3>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <div className="mr-2">✓</div>
              <span>Follow Our Social Media</span>
            </div>
            <div className="flex items-center">
              <div className="mr-2">✓</div>
              <span>Contribute And Feel It</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats;