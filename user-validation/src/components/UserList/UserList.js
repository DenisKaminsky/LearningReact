import styles from './UserList.module.css';

import Card from '../UI/Card';

function UserList(props) {
    return (
        <Card>
            <div className={styles.users}>
                {
                    props.data && props.data.length > 0 
                    ? (
                        <ul>
                            {props.data.map(item => 
                                <li key={item.id}>
                                    {`${item.userName} (${item.age} years old)`}
                                </li>
                            )}
                        </ul>
                    )
                    : (
                        <h3>There are no users to display!</h3>
                    )
                }
            </div>
        </Card>
    )
}

export default UserList;