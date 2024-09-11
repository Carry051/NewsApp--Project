import { FC } from 'react';

import { motion } from 'framer-motion';

import { RxUpdate } from 'react-icons/rx';

type ButtonComponentProps = {
    getNews: () => void;
    rotationKey: number;
};

const ButtonComponent: FC<ButtonComponentProps> = ({
    getNews,
    rotationKey,
}) => {
    return (
        <>
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
        </>
    );
};

export default ButtonComponent;
