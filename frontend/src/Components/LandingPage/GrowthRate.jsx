import React from 'react'

const GrowthRate = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Growth Rate</h2>
        <div className="flex justify-center items-center">
          <div className="w-64 h-64 rounded-full border-8 border-greentech flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold">0.80%</div>
              <div className="text-gray-600">January, 01</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GrowthRate