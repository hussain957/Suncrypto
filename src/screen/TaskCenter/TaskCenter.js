import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Progress from 'react-native-progress';
import ImagePath from '../../assets/ImagePath';
import Navbar from '../../component/Navbar';
import ColorPath from '../../assets/ColorPath';
import {useSelector} from 'react-redux';
import styles from './styles';

const TaskCenter = ({navigation}) => {
  
  const Theme = useSelector(store => store.ThemeReducer);

  const data = [
    {
      id: 1,
      Image: ImagePath.Ellipse,
      Text: 'Make your first deposit and get a Rs. 200 Cashback!',
      label: 'View Rules',
      progress: 1,
      progresscode: '0/10 USDT',
      Rs: 'Rs. 200',
      cashback: 'Cashback Voucher',
      rewardnumber: '6,954',
      rewardtext: 'Reward Left',
      time: 'Remaining Time : 2 Days',
      button: 'Complete',
      backgroundColor: ColorPath.yellow,
    },

    {
      id: 2,
      Image: ImagePath.Ellipse,
      Text: 'Make your first deposit and get a Rs. 200 Cashback!',
      label: 'View Rules',
      progress: 1,
      progresscode: '0/10 USDT',
      Rs: 'Rs. 200',
      cashback: 'Cashback Voucher',
      rewardnumber: '6,954',
      rewardtext: 'Reward Left',
      time: 'Expired Time : 2022-05-16 13:13:18 (UTC + 5.5)',
      button: 'Expire',
      backgroundColor: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
    },

    {
      id: 3,
      Image: ImagePath.Ellipse,
      Text: 'Make your first deposit and get a Rs. 200 Cashback!',
      label: 'View Rules',
      progress: 1,
      progresscode: '0/10 USDT',
      Rs: 'Rs. 200',
      cashback: 'Cashback Voucher',
      rewardnumber: '6,954',
      rewardtext: 'Reward Left',
      time: 'Remaining Time : 2 Days',
      button: 'Expire',
      backgroundColor: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={{paddingHorizontal: wp(2), marginTop: hp(2)}}>
        <View
          style={[
            styles.boxcontainer,
            {
              backgroundColor:
                Theme == 'Dark' ? ColorPath.bluedark : ColorPath.lightgray,
            },
          ]}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                paddingVertical: hp(2),
                paddingHorizontal: wp(3),
              }}>
              <Image source={item.Image} style={styles.circleicon} />
            </View>
            <View
              style={{
                flex: 5,
                marginLeft: wp(1),
                paddingVertical: hp(2),
                marginTop: hp(1),
              }}>
              <Text
                style={[
                  styles.maketext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                {item.Text}
              </Text>
              <TouchableOpacity>
                <Text
                  style={[
                    styles.viewtext,
                    {
                      color:
                        Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                    },
                  ]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: hp(1.5),
                }}>
                <Progress.Bar
                  progress={item.progress}
                  color={'#C5C5C5'}
                  borderRadius={30}
                  width={200}
                />
                <Text
                  style={[
                    styles.USDTtext,
                    {
                      color:
                        Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                    },
                  ]}>
                  {item.progresscode}
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: hp(2)}}>
                <TouchableOpacity style={styles.buttonrs}>
                  <Text style={styles.Rstext}>{item.Rs}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Cashbackbutton}>
                  <Text style={styles.Rstext}>{item.cashback}</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.Rewardkbutton}>
                <Text style={styles.Rewardtext}>
                  {item.rewardnumber}{' '}
                  <Text style={[styles.Rewardtext, {color: ColorPath.gray2}]}>
                    {item.rewardtext}
                  </Text>
                </Text>
              </TouchableOpacity>
              <Text
                style={[
                  styles.Expiredtext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                  },
                ]}>
                {item.time}
              </Text>
            </View>

            <View style={{flex: 1}}>
              <TouchableOpacity
                style={{
                  backgroundColor: item.backgroundColor,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                  borderTopRightRadius: 13,
                  borderTopLeftRadius: 5,
                  borderBottomRightRadius: 13,
                  borderBottomLeftRadius: 5,
                }}>
                <Text style={styles.Complete}>{item.button}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView
      style={[
        styles.container,
        {backgroundColor: Theme == 'Dark' ? ColorPath.blue : ColorPath.white},
      ]}>
      <View style={{paddingHorizontal: wp(4), paddingVertical: hp(1)}}>
        <Navbar
          onPress={() => {
            navigation.goBack();
          }}
          righticon={Theme == 'Dark' ? ImagePath.angleleft2 : ImagePath.angleleft}
          lefticon2={
            Theme == 'Dark' ? ImagePath.rongicondark : ImagePath.rongicon
          }
          onPress2={() => {
            navigation.navigate('BottomTab');
          }}
        />
      </View>

      <View>
        <Text
          style={[
            styles.tasktext,
            {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
          ]}>
          Task Center
        </Text>
      </View>

      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: ColorPath.gray2,
          paddingBottom: hp(1),
        }}>
        <Text
          style={[
            styles.limitedtext,
            {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
          ]}>
          Limited Tasks
        </Text>
      </View>

      <View style={{marginTop: hp(2), paddingHorizontal: wp(3)}}>
        <View style={{width: wp(84)}}>
          <Text
            style={[
              styles.oncetext,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2},
            ]}>
            Once you receive the task, the deadline countdown starts. Complete
            your task within the deadline to get your reward.{' '}
            <Text style={styles.buttontext}>FAQ</Text>
          </Text>
        </View>
      </View>

      <View>
        <FlatList data={data} renderItem={renderItem} />
      </View>

      <View
        style={{
          paddingHorizontal: wp(3),
          marginTop: hp(2),
          paddingVertical: hp(2),
        }}>
        <Text
          style={[
            styles.oncetext,
            {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,lineHeight:18,},
          ]}>
          The task status and award distribution will be updated withing 4
          hours. If the task is not completed within the time limit, the task
          will automatically wxpire and no reward will be awarded.
        </Text>
      </View>
    </ScrollView>
  );
};

export default TaskCenter;
