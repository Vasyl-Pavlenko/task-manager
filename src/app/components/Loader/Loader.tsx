import styles from './Loader.module.scss';

const { Loader: loader } = styles;

export const Loader = ({ className = '' }) => {
  return (
    <div className={[loader, className].join(' ')} />
  );
};

Loader.defaultProps = {
  className: '',
};