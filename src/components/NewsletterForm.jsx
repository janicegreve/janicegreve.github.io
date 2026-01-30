import { useEffect, useRef } from 'react';
import { useParams } from 'react-router';

export const NewsletterForm = () => {
  const formRef = useRef(null);
  const isInjected = useRef(false);
  const { lang } = useParams();
  const dataUid = lang === 'da' ? '5c9e39c8bb' : '632d5f4983';

  useEffect(() => {
    if (formRef.current) {
      formRef.current.innerHTML = '';
      isInjected.current = false;
    }

    const script = document.createElement('script');
    script.src = `https://author-janice-greve.kit.com/${dataUid}/index.js`;
    script.async = true;
    script.setAttribute('data-uid', dataUid);

    if (formRef.current) {
      formRef.current.appendChild(script);
      isInjected.current = true;
    }

    return () => {
      if (formRef.current) {
        formRef.current.innerHTML = '';
        isInjected.current = false;
      }
    };
  }, [lang]);

  return (
    <div ref={formRef} />
  );
}
