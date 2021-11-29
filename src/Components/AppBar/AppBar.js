import { useSelector, useDispatch } from 'react-redux';
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';
import { authSelectors, authOperations } from '../../redux/auth';
import { PageHeader, Button, Space } from 'antd';
export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <PageHeader
      className="site-page-header"
      title="Phonebook"
      subTitle={
        isLoggedIn
          ? `Hello ${name}, this is your personal phonebook`
          : 'Register or login to use the phone book.'
      }
    >
      <Space>
        {isLoggedIn ? (
          <>
            <Navigation key={1} />
            <Button
              type="primary"
              ghost
              onClick={() => dispatch(authOperations.logOut())}
            >
              Sign out
            </Button>
          </>
        ) : (
          <>
            <Button key={3} type="primary">
              <NavLink to="/login" exact="true">
                Sign in
              </NavLink>
            </Button>
            <Button key={4} type="primary">
              <NavLink to="/register" exact="true">
                Sign up
              </NavLink>
            </Button>
          </>
        )}
      </Space>
    </PageHeader>
  );
}
