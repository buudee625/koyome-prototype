import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import './EventEdit.css';
import * as eventAPI from '../../utils/eventAPI';
import FormEvEdit from '../../components/Form_EvEdit/Form_EvEdit';
import { Header } from 'semantic-ui-react';

export default function EventEdit() {
  const [eventToEdit, setEventToEdit] = useState({});
  const { id } = useParams();

  const getOneEventEdit = useCallback(async () => {
    try {
      const res = await eventAPI.getOne(id);
      setEventToEdit(res.data);
    } catch (err) {
      console.log(err, '<<< err from getOneEventEdit(): ');
    }
  }, [id]);

  useEffect(() => {
    console.log('useEfx: EventEdit()');
    getOneEventEdit();
  }, [getOneEventEdit]);

  return (
    <div className="container-event-edit">
      <div className="event-edit-form">
        <Header as="h1">Edit Event Info</Header>
        <FormEvEdit eventToEdit={eventToEdit}></FormEvEdit>
      </div>
    </div>
  );
}
