import { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { motion } from 'framer-motion';
import { RxUpdate } from 'react-icons/rx';
import FilterButton from './FilterButton';

const NewsCarousel = () => {
    const [news, setNews] = useState([]);
    const [rotationKey, setRotationKey] = useState(0);
    const [newsTheme, setNewsTheme] = useState([]);

    const getNews = async () => {
        try {
            const res = await axios.get(
                `https://newsapi.org/v2/everything?language=en&q=ukraine${newsTheme}&apiKey=fd700ef8c0864fe8bb2661330505574e&pageSize=30`
            );
            setNews(res.data.articles);
            setRotationKey((prevKey) => prevKey + 1);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    useEffect(() => {
        if (news.length === 0) {
            getNews();
        }
        console.log(news);
    }, [news]);

    return (
        <div className='text-white flex flex-col items-center justify-center rounded-xl'>
            {news.length > 0 ? (
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
                <div className='flex h-[400px] items-center'>
                    <motion.div
                        key={rotationKey}
                        initial={{ rotate: 0, scale: 1 }}
                        animate={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                    >
                        <AiOutlineLoading3Quarters size={50} />
                    </motion.div>
                </div>
            )}

            <FilterButton setNewsTheme={setNewsTheme} newsTheme={newsTheme} />
            <button
                type='button'
                className='mt-6 border-2 py-3 px-8 rounded-lg hover:bg-white hover:text-black disabled:opacity-50 disabled:text-gray-400 disabled:hover:bg-black'
                onClick={getNews}
            >
                <div className='flex items-center justify-center gap-4'>
                    <p className='font-bold'>Update</p>
                    <motion.div
                        key={rotationKey}
                        initial={{ rotate: 0, scale: 1 }}
                        animate={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                    >
                        <RxUpdate />
                    </motion.div>
                </div>
            </button>
        </div>
    );
};

export default NewsCarousel;
