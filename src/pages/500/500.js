import React from 'react';
import { Button, Result } from 'antd';

const Page500 = () => {

    return (
        <Result
            status="500"
            title="Oops!"
            subTitle="Sorry, something went wrong."
            extra={
                <Button
                    type="primary"
                    onClick={() => window.location.reload()}
                >
                    Retry
                </Button>
            }
        />
    );
}

export default Page500;