import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors } from '../../redux/phonebook';
import { contactsOperations } from '../../redux/phonebook';
import { Form, Input, Button } from 'antd';
export default function ContactForm() {
  const [form] = Form.useForm();
  const [name, setName] = useState('');
  const contacts = useSelector(contactsSelectors.getContacts);
  console.log(contacts);
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
  const handleChange = e => {
    console.log(e.currentTarget.value);
    setName(e.currentTarget.value);
    qwe();
  };
  const qwe = () => {
    if (contacts !== undefined) {
      return contacts.map(contact => contact.name).includes(name);
    } else {
      return;
    }
  };
  const handleSubmit = e => {
    dispatch(
      contactsOperations.addContact({
        name: e.content,
        number: e.number,
      }),
    );
    form.resetFields();
    setName('');
  };
  return (
    <Form
      autoComplete="off"
      form={form}
      {...formItemLayout}
      onFinish={handleSubmit}
    >
      <Form.Item
        type="text"
        name="content"
        label=""
        hasFeedback
        validateStatus={name && qwe() === true ? 'warning' : null}
        help={qwe() === true ? 'Это имя уже занято' : 'Введите имя контакта'}
      >
        <Input
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={handleChange}
          placeholder="Name"
        />
      </Form.Item>
      <Form.Item
        type="tel"
        help={'Введите номер телефона'}
        name="number"
        label=""
      >
        <Input
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          placeholder="xxx-xxx-xxx"
        />
      </Form.Item>
      <Form.Item label="">
        <Button type="primary" htmlType="submit">
          Create contact
        </Button>
      </Form.Item>
    </Form>
  );
}
