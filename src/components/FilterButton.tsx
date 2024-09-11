import { FC } from 'react';

type FilterButtonProps = {
    newsTheme: string[];
    setNewsTheme: (value: string[]) => void;
};

const FilterButton: FC<FilterButtonProps> = ({ newsTheme, setNewsTheme }) => {
    const filtersName = ['apple', 'google', 'crypto', 'nasa'];

    const toggleTheme = (item: string) => {
        if (newsTheme.includes(item)) {
            setNewsTheme(['ukraine']);
        } else {
            setNewsTheme([item]);
        }
    };

    return (
        <div>
            <h3 className='text-center mt-4 text-3xl'>Change News theme</h3>
            <button
                type='button'
                disabled
                className={`disabled:opacity-20
                 w-[200px] border-2 py-2 px-6 rounded-md my-4 mx-2
                `}
            >
                Default (ukraine)
            </button>
            {filtersName.map((item, index) => (
                <button
                    onClick={() => toggleTheme(item)}
                    key={index}
                    className={`${
                        newsTheme.includes('ukraine') && 'disabled:opacity-12'
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
