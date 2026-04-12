const FoodCard = ({ item }) => {
    return (
        <div
            className="
            bg-white rounded-xl shadow-md
            overflow-hidden
            transition-all duration-300
            hover:-translate-y-2 hover:shadow-xl
            cursor-pointer
            w-full
            "
        >
            <div className="w-full h-60 bg-gray-100 flex items-center justify-center">
                <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain"
                />
            </div>

            <div className="p-4 text-center">
                <h3 className="font-semibold text-lg text-black">
                    {item.name}
                </h3>

                <p className="text-black font-medium mt-1">
                    {item.price}
                </p>

                {item.description && (
                    <p className="text-gray-600 text-sm mt-2">
                        {item.description}
                    </p>
                )}
            </div>
        </div>
    );
};

export default FoodCard;