import React, {Component} from 'react';
import { TouchableOpacity, Image, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { Container, Content,
	Button, Text,
	Card, CardItem, Icon, View,
	Grid, Col, Row
} from 'native-base';

// var { FBLogin, FBLoginManager } = require('react-native-facebook-login');
// import FacebookLogin from './components/FacebookLogin';

import { flexColumn, flexRow,
	COLOR_PRIMARY, LOGO_STYLE,
}
from './style/common';

const deviceSize = Dimensions.get('window');

import Logo from './public/icon/Logo';

type Props = {};

const Login = () => {
	const goToHome = () => {
		Actions.home();
	}

	const goToDiscover = () => {
		Actions.discover();
	}

	// <Image style={LOGO_STYLE} source={require('./public/image/logo.png')} />
	return (
		<Container style={{backgroundColor: COLOR_PRIMARY}}>
			<Content contentContainerStyle={styles.content} padder>
				<Grid style={{paddingLeft: 36, paddingRight: 36}}>
					<Row />
					<Row>
						<View style={[flexRow, {justifyContent: 'center', alignItems: 'center'}]}>
							<Logo width={deviceSize.width /2 }/>
						</View>
					</Row>

					<Row style={flexColumn}>
						<Text style={[styles.welcomeText, {fontSize: 22.5, color:'#ffffff'}]}>
							Login to fully enjoy EIGHT’s features !
						</Text>
						<Button style={{marginTop: 25, marginBottom: 18, backgroundColor: '#3c5a99'}} primary block onPress={goToDiscover}>
							<Grid>
								<Col size={2} style={{marginLeft:10}}>
									<Icon style={{alignSelf: 'center'}} name="logo-facebook" />
								</Col>
								<Col size={9} style={{justifyContent: 'center'}}>
									<Text style={styles.loginText}>
										Log in with Facebook account
									</Text>
								</Col>
							</Grid>

						</Button>
						<Button primary block style={{backgroundColor: '#d34836'}}>
							<Grid>
								<Col size={2} style={{marginLeft:10}}>
									<Icon style={{alignSelf: 'center'}} name="logo-googleplus" />
								</Col>
								<Col size={9} style={{justifyContent: 'center'}}>
									<Text style={styles.loginText}>
										Log in with Google Plus account
									</Text>
								</Col>
							</Grid>
						</Button>
					</Row>
					<Row />
					<Row />
				</Grid>
			</Content>
		</Container>
	);
}

const styles = {
	content: {
		flexGrow: 1,
		justifyContent: 'center'
	},

	welcomeText: {
		fontSize: 17.5,
		textAlign: 'center'
	},

	loginText : {
		fontSize: 18,
		textAlign: 'left'
	},
}

export default Login
