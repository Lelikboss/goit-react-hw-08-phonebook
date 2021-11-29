import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';
import { Form, Input } from 'antd';
export default function Filter() {
  const dispatch = useDispatch();

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 14,
      },
    },
  };
  return (
    <>
      <Form.Item {...formItemLayout} type="text" help={'Поиск по имени'}>
        <Input
          onChange={e => dispatch(changeFilter(e.target.value))}
          type="text"
          placeholder="Find contact by name"
        />
      </Form.Item>
    </>
  );
}
