import { useState, useEffect } from 'react';

const useShowMessage = (isShowMessageProp: any) => {
  const [isShowMessage, setIsShowMessage] = useState(false);

  useEffect(() => {
    if (isShowMessage) {
      const timer = setTimeout(() => {
        setIsShowMessage(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isShowMessage]);

  useEffect(() => {
    if (isShowMessageProp) {
      setIsShowMessage(true);
    }
  }, [isShowMessageProp]);

  return {
    isShowMessage,
  };
};

export default useShowMessage;
