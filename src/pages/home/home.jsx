import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import * as actions from '@actions/home'
import Recommend from './recommend'


import { connect } from '@tarojs/redux'
import searchIcon from './assets/search.png'

import './home.scss'
const RECOMMEND_SIZE = 20

@connect(state => state.home, {...actions} )

class Home extends Component {
    config = {
        navigationBarTitleText: '加村小白'
      } 
    state = {
        loaded: false,
        loading: false,
        lastItemId: 0,
        hasMore: true
    }
    componentDidMount() {
        // NOTE 暂时去掉不适配的内容
        Taro.showToast({
          title: '注意，由于严选小程序首页界面、接口大幅变动，暂时去掉不相符的部分，后续再跟进改动!',
          icon: 'none',
          duration: 60
        })
        console.log(this.props);
        this.props.dispatchSearchCount()
      }
    


    render(){
        const { searchCount } = this.props

        return (
        <View className='home'>
            <View className='home__search'>
                <View className='home__search'>
                    <View className='home__search-wrap' onClick={this.handlePrevent}>
                        <Image className='home__search-img' src={searchIcon} />
                        <Text className='home__search-txt'>
                            {`搜索商品，共${searchCount}款好物`}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
        )
    }
}
export default Home
