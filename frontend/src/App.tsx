function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-blue-600">E-commerce Starter</h1>
        <p className="text-gray-700">Frontend is running successfully!</p>
        <div className="mt-4 space-y-2">
          <p className="text-sm text-gray-500">Products API: {import.meta.env.VITE_PRODUCTS_API_URL}</p>
          <p className="text-sm text-gray-500">Users API: {import.meta.env.VITE_USERS_API_URL}</p>
          <p className="text-sm text-gray-500">Orders API: {import.meta.env.VITE_ORDERS_API_URL}</p>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <div className="flex flex-col space-y-2">
              <a href={import.meta.env.VITE_PRODUCTS_API_URL + '/products'} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Products JSON</a>
              <a href={import.meta.env.VITE_USERS_API_URL + '/users'} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Users JSON</a>
              <a href={import.meta.env.VITE_ORDERS_API_URL + '/orders'} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Orders JSON</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
