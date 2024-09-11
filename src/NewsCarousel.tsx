import FilterButton from './components/FilterButton';
import ButtonComponent from './components/ButtonComponent';
import Loader from './components/Loader';
import useGetNews from './hooks/useGetNews';

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewsCarousel = () => {
    const { news, rotationKey, newsTheme, setNewsTheme, error, getNews } =
        useGetNews();
    return (
        <div className='text-white flex flex-col items-center justify-center rounded-xl'>
            {error ? (
                <div className='text-red-500 text-4xl mt-4'>{error}</div>
            ) : news.length > 0 ? (
                <Carousel
                    indicators={false}
                    fade
                    className='max-w-[800px] min-w-[800px] min-h-[400px] max-h-[400px] rounded-xl'
                >
                    {news.map((item, index) => {
                        if (
                            item.urlToImage !== null &&
                            !item.urlToImage.endsWith('.webp')
                        ) {
                            return (
                                <Carousel.Item
                                    key={index}
                                    className='flex items-center justify-center '
                                >
                                    <img
                                        className='max-w-[800px] min-w-[800px] min-h-[400px] max-h-[400px]'
                                        src={item.urlToImage}
                                        alt={'No photo available'}
                                    />
                                    <Carousel.Caption className='bg-black bg-opacity-50 p-4 rounded-lg'>
                                        <h3 className='font-bold text-2xl'>
                                            {item.title}
                                        </h3>
                                        <p>{item.description}</p>
                                        <a href={item.url}>
                                            <button className='border-2 mt-4 px-4 py-2 rounded-lg hover:bg-black'>
                                                Read More...
                                            </button>
                                        </a>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            );
                        }
                    })}
                </Carousel>
            ) : (
                <Loader rotationKey={rotationKey} />
            )}

            <FilterButton setNewsTheme={setNewsTheme} newsTheme={newsTheme} />
            <ButtonComponent getNews={getNews} rotationKey={rotationKey} />
        </div>
    );
};

export default NewsCarousel;
