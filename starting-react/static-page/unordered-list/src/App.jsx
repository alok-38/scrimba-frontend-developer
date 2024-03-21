function UnOrderedList() {
    // Sample array of items
    const items = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];

    return (
        <div className="bg-gray-200 min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-md rounded-md p-6">
            <h1 className="text-3xl font-bold mb-4 text-red-700">Tailwind Unordered List</h1>
                <ul className="ml-6">
                    {items.map((item, index) => (
                        <li key={index} className="mb-2 text-orange-600">{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default UnOrderedList;