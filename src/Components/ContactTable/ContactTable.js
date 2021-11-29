import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../../redux/phonebook';
import { Table, Button } from 'antd';

const ContactTable = () => {
  const contacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  const asd = useSelector(getFilteredContacts);
  const dataSource = asd.map(item => ({ ...item, key: item.id }));
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Number',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: 'Delete',
      key: `name`,
      render: (text, record) => (
        <Button
          key={text.id}
          type="dashed"
          danger
          htmlType="button"
          onClick={() => {
            dispatch(contactsOperations.deleteContact(text.id));
          }}
        >
          Delete
        </Button>
      ),
    },
  ];

  return <Table columns={columns} dataSource={dataSource} />;
};
export default ContactTable;
