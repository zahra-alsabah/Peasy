import React, {useState} from 'react';
import {View, Text, ImageBackground, FlatList} from 'react-native';
import styles from './style';
import ProductItem from '../../component/productItem';
import Slides from '../../component/productItem/slides';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';
import {Button, BottomNavigation} from 'react-native-paper';

export default function jeanCollectionScreen() {
  const [affiche, setaffiche] = useState(2);
  const HomeRoute = () => <Text>Home</Text>;

  const MenuRoute = () => <Text>Menu</Text>;

  const LocalisationRoute = () => <Text>Localisation</Text>;

  const ProfileRoute = () => <Text>Profile</Text>;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'home', title: 'Home', icon: require('../../assets/icons/home.png')},
    {key: 'menu', title: 'Menu', icon: require('../../assets/icons/menu.png')},
    {
      key: 'localisation',
      title: 'Localisation',
      icon: require('../../assets/icons/localisation.png'),
    },
    {
      key: 'profile',
      title: 'Profile',
      icon: require('../../assets/icons/profile.png'),
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    menu: MenuRoute,
    localisation: LocalisationRoute,
    profile: ProfileRoute,
  });

  return (
    <View style={styles.container}>
      <StickyParallaxHeader headerType="TabbedHeader" />
      <ImageBackground
        source={require('../../assets/images/jeanCol.png')}
        style={{width: '100%', height: '30%', justifyContent: 'flex-end'}}
        imageStyle={{width: '100%', height: '100%', resizeMode: 'stretch'}}>
        <Text
          style={{
            marginLeft: 20,
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold',
          }}>
          Jeans Collection
        </Text>
        <Text
          style={{
            marginTop: 5,
            marginBottom: 10,
            color: 'white',
            marginLeft: 20,
          }}>
          ZARA
        </Text>
      </ImageBackground>

      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 20,
            fontSize: 20,
            color: '#9D9D9D',
            fontWeight: 'bold',
          }}>
          Filter
        </Text>
        <Button
          onPress={() => setaffiche(2)}
          icon={require('../../assets/icons/bl4.png')}></Button>
        <Button
          onPress={() => setaffiche(1)}
          icon={require('../../assets/icons/bl2.png')}></Button>
      </View>
      {console.warn(affiche)}

      <FlatList
        numColumns={affiche}
        data={Slides}
        key={affiche === 2 ? '2' : '1'}
        keyExtractor={item => (affiche === 2 ? `${item.id}2` : `${item.id}1`)}
        renderItem={({item}) => <ProductItem item={item} />}></FlatList>

      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </View>
  );
}
