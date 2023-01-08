import React from 'react';
import { useParams } from 'react-router-dom';
import { ranobeMoreApi } from '../app/services/services';

const Ranobe = () => {
    const params = useParams()

    const {data: ranobe} = ranobeMoreApi.useFetchAllRanobeQuery(Number(params.id))

    return (
        <div>

        </div>
    );
};

export default Ranobe;