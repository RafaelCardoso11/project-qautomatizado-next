import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';


type useScrollType = [element: any, controls: any];
export const useScroll = (thresh = 0.4): useScrollType => {
    const controls = useAnimation();
    const [element, view] = useInView({ threshold: thresh });
    if (view) {
        controls.start('show');
    } else {
        controls.start('hidden');
    }
    return [element, controls];
};