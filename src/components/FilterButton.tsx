const FilterButton = ({ newsTheme, setNewsTheme }) => {
    const filterName = ['+apple', '+google', '+crypto', '+nasa'];

    const toggleTheme = (item) => {
        if (newsTheme.includes(item)) {
            setNewsTheme(newsTheme.filter((theme) => theme !== item));
        } else {
            setNewsTheme([...newsTheme, item]);
        }
    };

    console.log(newsTheme);

    return (
        <div>
            <h3 className='text-center mt-4 text-3xl'>Select theme for news</h3>
            <button
                type='button'
                disabled
                className={`disabled:opacity-20
                 w-[200px] border-2 py-2 px-6 rounded-md   my-4 mx-2
                `}
            >
                Default (ukraine)
            </button>
            {filterName.map((item, index) => (
                <button
                    onClick={() => toggleTheme(item)}
                    key={index}
                    className={`${
                        newsTheme[0] === '+ukraine' && 'disabled:opacity-12'
                    } w-[200px] border-2 py-2 px-6 rounded-md hover:bg-white hover:text-black my-4 mx-2 ${
                        newsTheme.includes(item)
                            ? 'bg-white text-black'
                            : 'bg-none'
                    }`}
                >
                    {item} {newsTheme.includes(item) ? '-' : '+'}
                </button>
            ))}
        </div>
    );
};

export default FilterButton;
