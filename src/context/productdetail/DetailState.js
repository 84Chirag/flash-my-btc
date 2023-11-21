import React, {useState} from 'react';
import DetailContext from './detailContext';

const DetailState = (props) => {
    const [detail, setDetail] = useState({ title: '', dollar: '' });

    const setDetailValues = async(title, dollar) => {
        setDetail({ title, dollar });
    };
    return (
        <DetailContext.Provider value={{ detail, setDetailValues }}>
            {props.children}
        </DetailContext.Provider>
    )
}

export default DetailState