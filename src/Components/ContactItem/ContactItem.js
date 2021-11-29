import { useDispatch } from 'react-redux';
import { contactsOperations } from '../../redux/phonebook';
import PropTypes from 'prop-types';


export default function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();
  const tel = `tel:${number}`;

  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <div>
        <button type="button">
          <a href={tel}>{tel}</a>
        </button>
        <button
          type="button"
          onClick={() => dispatch(contactsOperations.deleteContact(id))}
        ></button>
      </div>
    </div>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};

