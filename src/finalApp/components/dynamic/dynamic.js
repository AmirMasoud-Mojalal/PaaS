import React from 'react';
import { useParams } from 'react-router-dom';


export async function loader({ params }) {
  console.log(params);
  // const contact = await getContact(params.contactId);
  const contact = params.contactId;
  return { contact };
}

  console.log('inside');

function DynamicPage({params}) {
  // const { id } = useParams();
  const {id} = 2;
  console.log('inside');
  return (
    <div>
      <h1>This is a dynamic page for {id} </h1>
    </div>
  );
}

export default DynamicPage;
