function Card({ titulo, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
      {titulo && (
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 capitalize">
          {titulo}
        </h2>
      )}
      {children}
    </div>
  );
}

export default Card;