import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {


  var nameProfile = "Marcelo Ribeiro"
  var userProfile = "marceloribeiro2010"

  var countPoint = "1k"
  var countReference = "56"

  return (

    // Wrapper
    <View style={styles.wrapper}>
      {/* Statusbar */}
      <StatusBar backgroundColor="#2A91CB" style="light" />

      {/* ScrollView */}
      <ScrollView>
        {/* Profile */}
        <View style={styles.profile}>

          {/* Center */}
          <View style={styles.centerProfile}>

          <View style={styles.notificationItem}>
            <FontAwesome name="bell-o" size={20} color="#fff" />
          </View>

            {/* Image Profile */}
            <View style={styles.containerImage}>
              <Image
                style={styles.imgProfile}
                source={{
                  uri: 'https://2w6kxc22rrr9mabqt1mglgait6-wpengine.netdna-ssl.com/wp-content/uploads/2019/08/man-shrug-beard-small.jpg',
                }}
              />
            </View>

            {/* Name and User */}
            <View style={styles.infoProfile}>
              <Text style={styles.nameProfile}>{nameProfile}</Text>
              <Text style={styles.userProfile}>{userProfile}</Text>
            </View>

            {/* Count Profile */}
            <View style={styles.countProfile}>
              <Text style={styles.textData}>
                <Text style={{ fontWeight: 'bold' }}>{countPoint} </Text>
                    pontos
                  </Text>
              <Text style={styles.textData}>
                <Text style={{ fontWeight: 'bold' }}>{countReference} </Text>
                  acessos
                  </Text>
            </View>

            {/* Process Follow */}
            <View style={styles.processArea}>

              <View style={styles.lineProcess}>
                <View style={styles.ballProcess}></View>
                <View style={styles.barProcess}></View>
                <View style={styles.ballProcess}></View>
              </View>

              <Text style={styles.textProcess}>
                Próximos pontos em:
                  <Text style={{ fontWeight: 'bold' }}> 30 minutos</Text>
              </Text>
            </View>
          </View>

        </View>

        {/* Content Main */}
        <View style={styles.contentMain}>
          <View style={styles.centerMain}>
            <Text style={styles.textWelcon}>
              Seja bem vindo,
              <Text style={{ fontWeight: 'bold' }}> {nameProfile}</Text>
            </Text>

            <View style={styles.itensMain}>

              <View style={styles.itemMain}>
                <Text style={styles.titleItem}>GANHE PONTOS</Text>
                <Text style={styles.textItem}>Ganhe pontos e troque por Prêmios incríveis!</Text>
              </View>
              <View style={styles.itemMain}>
                <Text style={styles.titleItem}>VEJA LISTA PRÊMIOS</Text>
                <Text style={styles.textItem}>Lista de Prêmios que você pode ganhar!</Text>
              </View>
              <View style={styles.itemMain}>
                <Text style={styles.titleItem}>ENTRE EM CONTATO</Text>
                <Text style={styles.textItem}>Se estiver com alguma dúvida ou problema, entre em contato conosco.</Text>
              </View>

            </View>
          </View>
        </View>

        {/* Last Follow List */}
        <View style={styles.listFollow}>
          <View style={styles.centerListFollow}>
            <Text style={styles.titleFollowList}>USARAM O SEU LINK RECENTEMENTE (3)</Text>

            {/* Item */}
            <View style={styles.itemList}>
              <Image
                style={styles.imgProfileList}
                source={{
                  uri: 'https://pbs.twimg.com/profile_images/1338629572372389889/s0oaOVp__400x400.jpg',
                }}
              />

              <View>
                <Text style={styles.userProfileList}>taina</Text>
                <Text style={styles.msgFollowList}>
                  utilizou seu link! -
                    <Text style={styles.timeFollowList}> Há um dia</Text>
                </Text>
              </View>

            </View>

            {/* Item */}
            <View style={styles.itemList}>
              <Image
                style={styles.imgProfileList}
                source={{
                  uri: 'https://pbs.twimg.com/profile_images/1343327334410178560/ri8w6Zuz_400x400.jpg',
                }}
              />

              <View>
                <Text style={styles.userProfileList}>larasilva</Text>
                <Text style={styles.msgFollowList}>
                  utilizou seu link!  -
                    <Text style={styles.timeFollowList}> Há uma semana</Text>
                </Text>
              </View>

            </View>

            {/* Item */}
            <View style={styles.itemList}>
              <Image
                style={styles.imgProfileList}
                source={{
                  uri: 'https://pbs.twimg.com/profile_images/1057631480459886595/9VPdGJJz_400x400.jpg',
                }}
              />

              <View>
                <Text style={styles.userProfileList}>jairmessiasbolsonaro</Text>
                <Text style={styles.msgFollowList}>
                  utilizou seu link! -
                    <Text style={styles.timeFollowList}> Há um mês</Text>
                </Text>
              </View>

            </View>

            <Text style={styles.textEndList}>Nada mais foi encontrado (3)</Text>

          </View>

        </View>

      </ScrollView>

      {/* H */}
      <View style={styles.fixedHeader}>
        <View style={styles.centerFixedHeader}>

          <View style={styles.itemHeader}>
            <FontAwesome name="home" size={15} color="#fff" />
            <Text style={styles.textItemHeader}>Início</Text>
          </View>
          <View style={styles.itemHeader}>
            <FontAwesome name="gift" size={15} color="#fff" />
            <Text style={styles.textItemHeader}>Prêmios</Text>
          </View>
          <View style={styles.itemHeader}>
            <FontAwesome name="users" size={15} color="#fff" />
            <Text style={styles.textItemHeader}>Convidar</Text>
          </View>

        </View>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({

  // wrapper
  wrapper: {
    flex: 1,
  },

  // fixedHeader
  fixedHeader: {
    width: '100%',
    backgroundColor: '#2A91CB'
  },
  centerFixedHeader: {
    width: '90%',
    height: 60,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  itemHeader: {
    width: 80,
    alignItems: 'center'
  },
  textItemHeader: {
    color: '#fff'
  },

  // Profile
  profile: {
    width: '100%',
    backgroundColor: '#2D9CDB',
    paddingTop: 70,
    paddingBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerProfile: {
    width: '90%',
    textAlign: 'center'
  },
  notificationItem: {
    position: 'absolute',
    top: -10,
    right: 10,
  },
  containerImage: {
    alignItems: 'center',
  },
  imgProfile: {
    width: 130,
    height: 130,
    borderRadius: 100,
  },
  infoProfile: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  nameProfile: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  userProfile: {
    color: '#E5E5E5',
    fontSize: 13,
  },
  countProfile: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textData: {
    color: '#fff',
  },


  // Process Area 
  processArea: {
    width: '100%',
    marginTop: 15,
  },

  lineProcess: {
    width: '100%',
    height: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ballProcess: {
    width: 15,
    height: 15,
    backgroundColor: '#fff',
    borderRadius: 100,
    marginTop: -5,
  },
  barProcess: {
    width: 5,
    height: 15,
    backgroundColor: '#fff',
    marginTop: -5,
  },
  textProcess: {
    color: '#E5E5E5',
    textAlign: 'center',
    marginTop: 5,
  },


  // Main Content
  contentMain: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  centerMain: {
    width: '90%',
  },
  textWelcon: {
    marginBottom: 10,
  },
  itemMain: {
    width: '100%',
    height: 100,
    backgroundColor: '#2D9CDB',
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  titleItem: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  },
  textItem: {
    color: '#E5E5E5',
    fontSize: 13,
  },


  // Last Follow List
  listFollow: {
    width: '100%',
    paddingBottom: 15,
  },
  centerListFollow: {
    width: '90%',
    alignSelf: 'center',
  },
  titleFollowList: {
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemList: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 3,
    paddingBottom: 3,
    marginTop: 5,
    marginBottom: 5,
  },
  imgProfileList: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: 10,
  },
  userProfileList: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  msgFollowList: {
    color: '#444',
    fontSize: 13,
    marginTop: -5,
  },
  textEndList: {
    color: '#444',
    textAlign: 'center'
  }

});
