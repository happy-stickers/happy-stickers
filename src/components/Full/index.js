import React from 'react';
import classNames from 'classnames';

import styles from './style.css';

const Full = ({children, className, ...props}) => <div className={classNames(styles.this, className)} {...props}>{children}</div>

export default Full;
