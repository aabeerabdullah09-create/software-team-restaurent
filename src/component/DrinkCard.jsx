const DrinkCard = ({ item }) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-5 mt-4 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl cursor-pointer w-full">
            <div className="w-full h-56 bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
                <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain"
                />
            </div>

            <h3 className="font-semibold text-xl text-black text-center mt-4">
                {item.name}
            </h3>

            <p className="text-black text-center text-lg mt-2">
                {item.price}
            </p>

            {item.description && (
                <p className="text-gray-600 text-sm text-center mt-2">
                    {item.description}
                </p>
            )}
        </div>
    );
};

export default DrinkCard;