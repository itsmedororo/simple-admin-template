import React, { useState } from 'react';
import { Result } from 'antd';
import { Navigate } from 'react-router-dom';
import { Button } from 'antd';

const Page404 = () => {
  const [redirectReferer, setRedirectReferer] = useState(false);

  const back = () => {
    setRedirectReferer(true);
  }

  if (redirectReferer) {
    return <Navigate to='/' replace />
  }

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button
          type="primary"
          onClick={back}
        >
          Back Home
        </Button>
      }
    />
  );
}

export default Page404;