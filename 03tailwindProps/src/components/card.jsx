function Card({username,btnText="click Me"}) {
    
  return (
    <div className="max-w-sm mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Random"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{username}</h2>
        <p className="text-gray-600 mt-2 text-sm">
          This is a simple card component built with Tailwind CSS and React.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Card;
