import { useEffect, useRef, useState } from 'react';
import { client } from '../constant';
export function usePixefyFetcher(query, filter) {
    const timerId = useRef(undefined);
    const elemRef = useRef(null);
    const [imagejson, setimagejson] = useState(null);
    const [error, setError] = useState(null);
    const [isloading, setLoading] = useState(true);

    useEffect(() => {
        if (!query) return;

        setimagejson(null);
        timerId.current = setTimeout(() => {

            client.photos.search({ query, per_page: 20, ...filter })
                .then((photos) => { setimagejson(photos)   })
                .catch((err) => {
                    setError("Something went wrong please reload!!")
                });

        }, 300);

        return () => { clearTimeout(timerId.current); }
    }, [query, filter]);

    useEffect(() => {
        if(!imagejson) return; 
        let element;
        const observer = new IntersectionObserver((e) => {
            if (e[0].isIntersecting) {
                setLoading(true);
                observer.unobserve(element);

                client.photos.search({ query, per_page: 20, page: imagejson.page + 1, ...filter })
                    .then(photos => { setLoading(false); setimagejson((prev) => { return { ...photos, photos: [...prev.photos, ...photos.photos] } }); })
                    .catch((err) => {
                        setError("something went wrong!!")
                    });

            }

        }, { threshold: 1 });
        if (elemRef.current) {
            element = elemRef.current.lastElementChild;
            observer.observe(element);
        }
        return (() => { observer.disconnect(); })
    }, [imagejson])

    return { imagejson, error, isloading, elemRef };
}
