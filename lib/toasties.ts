import toast from 'react-hot-toast';

export const errorToast = (message: string) => {
    toast.error(message, {
        style: {
          border: '1px solid #A0420F',
          padding: '16px',
          color: '#A0420F',
        },
        iconTheme: {
          primary: '#A0420F',
          secondary: '#FFFFFF',
        },
    });
}

export const successToast = (message: string, time: number=2000) => {
    toast.success(message, {
        style: {
          border: '1px solid #234640',
          padding: '16px',
          color: '#234640',
        },
        iconTheme: {
          primary: '#234640',
          secondary: '#FFFFFF',
        },
        duration: time
    });
}

export const messageToast = (message: string, time: number=2000) => {
  toast(message, {
      duration: time,
    });
}