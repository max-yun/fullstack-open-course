const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  if (message.includes('SUCCESS')) {
    return (
      <div className='success'>
        {message}
      </div>
    );
  } else if (message.includes('ERROR')) {
    return (
      <div className='error'>
        {message}
      </div>
    );
  }

}

export default Notification;
