import { useEffect, useRef } from 'react';

export const NewsletterForm = () => {
  const formRef = useRef(null);
  const isInjected = useRef(false);

  useEffect(() => {
    if (isInjected.current) return;

    const script = document.createElement('script');
    script.src = "https://author-janice-greve.kit.com/632d5f4983/index.js";
    script.async = true;
    script.setAttribute('data-uid', '632d5f4983');

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
  }, []);

  return (
    <div ref={formRef} />
  );
}
