import { ReactComponent as arrowBack } from './svgs/back.svg';

const icons = {
    arrowBack
};

export const Icon = ({name, ...props}) => {
    /* const Element = icons[name];
    return <Element {...props} />; */
    return arrowBack
}