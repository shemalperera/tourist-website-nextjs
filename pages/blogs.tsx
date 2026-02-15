import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

const Blogs = () => {
  return (
    <div>
      <Head>
        <title>Blogs - Zeelan Tours</title>
        <meta name="description" content="Travel blogs and guides for India tours" />
      </Head>

      <Header />
      
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-800">
            Travel Blogs
          </h1>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Discover travel stories, guides, and tips for exploring the wonders of India
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder blog cards */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Coming Soon</h3>
                <p className="text-gray-600">Exciting travel content is on its way!</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Blogs
