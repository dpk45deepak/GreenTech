import React from 'react'

const Community = () => {
  return (
    <section className="py-12 px-6 bg-greentech">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Empower Agriculture</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Become part of a supportive community dedicated to fostering innovation in agriculture.
          Engage in discussions, ask questions, and share your experiences with fellow enthusiasts and experts.
        </p>
        <div className="flex justify-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-white bg-opacity-20"></div>
          <div className="w-10 h-10 rounded-full bg-white bg-opacity-20"></div>
          <div className="w-10 h-10 rounded-full bg-white bg-opacity-20"></div>
        </div>
      </div>
    </section>
  )
}

export default Community