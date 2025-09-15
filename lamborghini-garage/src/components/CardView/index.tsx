import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button } from 'react-native';

import { styles } from './styles';
import logo from '../../../assets/logo.png';
import { Divider } from '../Divider';
import { CAR_ASSETS_BASE_URL } from '../../constants/car';
import { BuyButton } from '../BuyButton';
import { CarModel } from './props';
import { handlePreviousCar, handleNextCar, loadCarData } from './action';

export function CardView() {
  const [carData, setCarData] = useState<CarModel | null>(null);

  useEffect(() => {
    (async () => {
      await loadCarData(1, setCarData);
    })();
  }, []);

  const renderLogoBox = () => (
    <View style={styles.logoContainer}>
      <Image source={logo} style={styles.imageLogo} />
    </View>
  );

  const renderCarDetails = () => (
    <View> 
      <Text style={styles.carBrand}>Lamborghini</Text>
      <Text style={styles.carName}>{carData?.carName}</Text>
    </View>
  );

  const renderCarImage = () => (
    <Image
      style={styles.image}
      resizeMode="contain"
      source={{
        uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png`
      }}
    />    
  )

  const renderPriceControls = () => (
    <View style={styles.priceLabelContainer}>
      <Button title="<" color={'#01A6B3'} onPress={() => handlePreviousCar(carData, setCarData)} />
      <Text style={styles.priceLabel}>{carData?.price}</Text>
      <Button title=">"  color={'#01A6B3'} onPress={() => handleNextCar(carData, setCarData)} />
    </View>
  )

  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}

      <Divider />
      {renderCarDetails()}
      {renderCarImage()}

      <Divider />
      <BuyButton />
      {renderPriceControls()}
    </View>
  );
}