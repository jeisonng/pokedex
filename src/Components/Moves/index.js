import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { getMoves } from '../../Utils/Api';
import Loading from '../../Components/Loading';
import MovesFlatList from '../../Components/MovesFlatList';

const Moves = ({ moves, color }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (async () => {
            setLoading(true)
            const result = await getMoves(moves);
            setData(result)
            setLoading(false)
        })()
    }, [])
    return <View>
        {
            loading
                ?
                <Loading />
                :
                <FlatList
                    data={data}
                    renderItem={({ item }) => {
                        return <MovesFlatList color={color} item={item} />
                    }}
                    keyExtractor={item => item.id}
                />
        }
    </View>;
}

export default Moves;