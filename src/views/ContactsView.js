import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Row, Col } from 'antd';
import ContactForm from '../Components/ContactForm';
import Filter from '../Components/Filter';
import { contactsOperations } from '../redux/phonebook';
import ContactTable from '../Components/ContactTable/ContactTable';

export default function ContactsView() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(contactsOperations.fetchContact()), [dispatch]);
  return (
    <Row>
      <Col key={7} span={12}>
        <ContactForm />
      </Col>
      <Col key={8} span={12}>
        <Filter />
        <ContactTable />
      </Col>
    </Row>
  );
}
