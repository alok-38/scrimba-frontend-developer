export default function AwesomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-8">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Welcome to Awesome Page</h2>
            <p className="text-gray-600 mt-2">This is a demonstration of an awesome static page built using React.js and Tailwind CSS.</p>
          </div>
          <div className="flex justify-center">
            <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  )
}