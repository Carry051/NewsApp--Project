import axios from 'axios';
import { useState, useEffect } from 'react';

type NewsArticle = {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string;
};

export default function useGetNews() {
    const [news, setNews] = useState<Array<NewsArticle>>([]);
    const [rotationKey, setRotationKey] = useState<number>(0);
    const [newsTheme, setNewsTheme] = useState<Array<string>>(['ukraine']);
    const [error, setError] = useState<string | null>(null);

    const getNews = async () => {
        try {
            setError(null);
            const res = await axios.get(
                `https://newsapi.org/v2/everything?language=en&q=${newsTheme}&apiKey=fd700ef8c0864fe8bb2661330505574e&pageSize=15`
            );
            setNews(res.data.articles);
            setRotationKey((prevKey) => prevKey + 1);
        } catch (error) {
            console.error('Error fetching news:', error);
            setError('Failed to load news. Please try again later.');
        }
    };

    useEffect(() => {
        if (news.length === 0) {
            getNews();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [news]);

    return { news, rotationKey, newsTheme, setNewsTheme, error, getNews };
}
