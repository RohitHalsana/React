import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-pink-200 px-6 py-12 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-600">
          🧠 About Code-Connect
        </h1>

        <p className="text-lg mb-8">
          <strong>Code-Connect</strong> is a collaborative platform designed to
          bridge the gap between developers, learners, and tech enthusiasts from all over the world.
          Whether you're a beginner eager to learn, a developer looking to collaborate,
          or a mentor willing to share knowledge — Code-Connect is your space to grow and build together.
        </p>
        
        <div className="my-16 w-full h-54">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">🌐 Our Mission</h2>
            <div className="h-160 flex flex-col sm:flex-row items-center sm:items-start gap-8">
              <ul className="list-disc list-inside space-y-2 text-lg sm:w-1/2">
                <li>Collaborate on real-world projects</li>
                <li>Share and grow knowledge through mentorship</li>
                <li>Learn and improve with coding challenges and discussions</li>
                <li>Connect with like-minded individuals and teams</li>
              </ul>
              <img
                className="sm:w-1/2 w-64 hover:scale-101 transition-transform duration-300 rounded-xl"
                src="/src/assets/code5.png"
                alt="Developers Collaborating"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">💡 What We Offer</h2>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
              <ul className="list-disc list-inside space-y-2 text-lg sm:w-1/2">
                <li>👨‍💻 Live Collaboration on code in real-time</li>
                <li>🧑‍🏫 Mentorship Network in various tech stacks</li>
                <li>📚 Structured Learning Tracks & Resources</li>
                <li>💬 Developer Forums and Q&A</li>
                <li>🛠️ Project Showcases with feedback loops</li>
              </ul>
          </div>
          </div>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">🤝 Who Is It For?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Students & Beginners:</strong> Learn faster with peer support.</li>
            <li><strong>Experienced Developers:</strong> Share knowledge and expand your network.</li>
            <li><strong>Open-Source Enthusiasts:</strong> Contribute and lead with ease.</li>
            <li><strong>Tech Teams:</strong> Collaborate, brainstorm, and build better.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">🌱 Our Vision</h2>
          <p>
            To become the go-to platform where <strong>learning meets collaboration</strong>,
            and every coder finds the support, guidance, and opportunities to succeed in tech.
          </p>
        </section>
      </div>
    </div>
  )
}

export default About