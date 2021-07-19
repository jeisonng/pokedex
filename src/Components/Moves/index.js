import React, { useEffect, useState } from 'react';
import { View, FlatList,RefreshControl, ScrollView } from 'react-native';
import { getMoves } from '../../Utils/Api';
import Loading from '../Loading';
import MovesFlatList from '../MovesFlatList';
import Error from '../Error';



const Moves = ({ moves, color }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const {movesList,error} = await getMoves(moves);
                if(error) throw Error('error')
                setData(movesList)
                setLoading(false)
                setError(false)
            } catch (error) {
                setError(true)
            }
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