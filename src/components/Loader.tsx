import { FC } from 'react';

import { motion } from 'framer-motion';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';

type LoaderProps = {
    rotationKey: number;
};

const Loader: FC<LoaderProps> = ({ rotationKey }) => {
    return (
        <>
            <div className='flex h-[400px] items-center flex-col justify-center'>
                <p className='text-2xl mb-4'>Loading</p>
                <motion.div
                    key={rotationKey}
                    initial={{ rotate: 0, scale: 1 }}
                    animate={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                >
                    <AiOutlineLoading3Quarters size={50} />
                </motion.div>
            </div>
        </>
    );
};

export default Loader;
