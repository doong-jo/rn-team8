import React, {Component} from 'react';
import { Platform, PermissionsAndroid, StyleSheet, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { View, Container, Content,
	Text, Radio, CheckBox,
	Left, Right,
	Card, CardItem, Icon, Item, Input,
	Grid, Col, Row}
	from 'native-base';
import Dialog, { DialogTitle, DialogButton, DialogContent } from 'react-native-popup-dialog';

import SwitchCard from './components/SwitchCard';

import { flexColumn, flexRow, spaceComponent,
	DIALOG_OK, DIALOG_CLOSE,
	COLOR_PRIMARY, COLOR_SECONDARY, COLOR_PRIMARY_DARK, COLOR_PRIAMRY_LIGHT,
	ACCIDENT_SENSITIVITY_INFO, ACCIDENT_ALERT_TOGGLE, ACCIDENT_ALERT_INFO, ACCIDENT_SENSITIVITY_LABEL,
	ACCIDENT_SENSITIVITY_HIGH, ACCIDENT_SENSITIVITY_MEDIUM, ACCIDENT_SENSITIVITY_LOW,
	ACCIDENT_SENSITIVITY_HIGH_DESC, ACCIDENT_SENSITIVITY_MEDIUM_DESC, ACCIDENT_SENSITIVITY_LOW_DESC,
	EMERGENCY_CONTACT
} from './style/common';

type Props = {};

const HIGH = 0;
const MID = 1;
const LOW = 2;

const levels = [
	{
		level : ACCIDENT_SENSITIVITY_HIGH,
		desc : ACCIDENT_SENSITIVITY_HIGH_DESC,
	},
	{
		level : ACCIDENT_SENSITIVITY_MEDIUM,
		desc : ACCIDENT_SENSITIVITY_MEDIUM_DESC,
	},
	{
		level : ACCIDENT_SENSITIVITY_LOW,
		desc : ACCIDENT_SENSITIVITY_LOW_DESC,
	},
];


class Accident extends Component {
	constructor(props) {
		super(props);

		this.grandtedPermission = false;

		this.state = {
			levelRadioSelected : [ true, false, false ], // be set from device
			curLevel : HIGH,
			contactsPermission: '',
			contacts: [
				{ name : 'Mom', number: '01012345678', checked: false},
				{ name : 'Dad', number: '01012345678', checked: false },
				{ name : 'Crew Leader', number: '01012345678', checked: false },
			],
			contactDialogToggle: false,
			contactDlgName: '',
			contactDlgNumber: '',
		};

		this.addContactsFromDlg.bind(this);
	}

	componentDidMount() {
		const requsetPerm = Platform.select({
			ios: () => {

			},
			android: () => {

			}
		})();

	}

	addContactsFromDlg() {
		let addContacts = this.state.contacts;

		addContacts.push({
			name : this.state.contactDlgName,
			number : this.state.contactDlgNumber,
			checked: false
		});

		this.setState({
			contacts: addContacts
		});
	}

	goToHome() {
		Actions.home();
	}

	render() {
		return (
			<Container>
				<Content padder>
					<SwitchCard
						title={ACCIDENT_ALERT_TOGGLE}
						titleStyle={styles.cardTitle}
						cardBkgColor={COLOR_PRIMARY} />

					<Text style={{marginTop: 10, marginBottom: 25}}>
						{ACCIDENT_ALERT_INFO}
					</Text>

					<Card>
						<CardItem style={[flexColumn, {backgroundColor: COLOR_PRIMARY, justifyContent:'flex-start'}]}>
							<Left style={flexColumn}>
								<Text style={[styles.cardTitle, {marginBottom: 10}]}>
									{ACCIDENT_SENSITIVITY_LABEL}
								</Text>
								<Text style={[styles.info, {marginBottom: 10}]}>
									{ACCIDENT_SENSITIVITY_INFO}
								</Text>
							</Left>
						</CardItem>
						<CardItem style={{backgroundColor: COLOR_PRIAMRY_LIGHT}}>
							<Grid>
								{levels.map((item, idx) => (
									<Row style={styles.levelContainer}>
										<Radio onPress={() => {
											if( this.state.curLevel != idx ) {
												let changeSeleted = this.state.levelRadioSelected;
												changeSeleted[idx] = true;
												changeSeleted[this.state.curLevel] = false;

												this.setState({
													levelRadioSelected : changeSeleted,
													curLevel: idx,
												});
											}
										}}
										selected={this.state.levelRadioSelected[idx]} color='white' selectedColor={COLOR_SECONDARY} />
										<Left style={styles.levelText}>
											<Text style={[styles.levelTitle, {alignSelf: 'flex-start'}]}>{item.level}</Text>
											<Text style={[styles.info, {alignSelf: 'flex-start'}]}>{item.desc}</Text>
										</Left>
									</Row>
								))}
							</Grid>
						</CardItem>
					</Card>

					<Card>
						<CardItem style={[flexColumn, {backgroundColor: COLOR_PRIMARY}]}>
							<View style={[flexRow, {alignSelf: 'stretch', justifyContent:"space-between"}]}>
								<Left>
									<Text style={styles.cardTitle}>{EMERGENCY_CONTACT}</Text>
								</Left>
								<View style={{flexWrap: "wrap"}}>
									<Right>
										<View style={flexRow}>
											<Icon onPress={() => {
												this.setState({
													contactDialogToggle: true
												});
											}} style={[spaceComponent, {color: 'white', marginRight: 15}]}
												name="md-add" />
											<Icon onPress={() => {
												let changeContacts = this.state.contacts;

												for(var i = 0; i<changeContacts.length; i++) {
													if( changeContacts[i].checked == true ) {
														changeContacts.splice(i, 1);
													}
												}

												this.setState({
													contacts: changeContacts
												});
											}} style={[spaceComponent, {color: 'white'}]}
												name="md-trash" />
										</View>
									</Right>
								</View>
							</View>
						</CardItem>
						<CardItem style={[flexColumn, {backgroundColor: COLOR_PRIAMRY_LIGHT}]}>
							{this.state.contacts.map((item, idx) => (
								<View style={styles.contactsItem} >
									<Left style={flexRow}>
										<CheckBox checked={item.checked} style={{marginRight: 25}} color={COLOR_SECONDARY} onPress={() => {
											let changeContacts = this.state.contacts;
											changeContacts[idx].checked = !item.checked;

											this.setState({
												contacts: changeContacts
											});
										}} />
										<Text style={styles.levelTitle}>{item.name}</Text>
									</Left>
									<Right>
										<Text style={[styles.levelTitle, {marginRight: 50}]}>{item.number}</Text>
									</Right>
								</View>
							))}
						</CardItem>
					</Card>
					<Dialog
						width="0.7"
						visible={this.state.contactDialogToggle}
						onTouchOutside={() => {
							this.setState({ contactDialogToggle: false });
						}}
						dialogTitle={<DialogTitle title='Add contact' />}
						actions={[
								<DialogButton
									text={DIALOG_OK}
									onPress={() => {
										this.setState({ contactDialogToggle: false });
										this.addContactsFromDlg();
									}}
								/>,
								<DialogButton
									text={DIALOG_CLOSE}
									onPress={() => {
										this.setState({ contactDialogToggle: false });
									}}
								/>
						]}
					>
						<DialogContent>
							<View style={{marginTop:20, alignSelf: 'center'}} >
								<Item style={{width: '100%', marginBottom:10, backgroundColor: COLOR_SECONDARY, borderColor: COLOR_SECONDARY}}regular>
									<Icon style={[spaceComponent, {color: 'white', backgroundColor: COLOR_SECONDARY}]}
										name="md-person" />
									<Input placeholder='name' style={styles.contactInput} onChangeText={(contactDlgName) => {
										this.setState({contactDlgName});
									}}/>
								</Item>
								<Item style={{width: '100%', backgroundColor: COLOR_SECONDARY, borderColor: COLOR_SECONDARY}}regular>
									<Icon style={[spaceComponent, {color: 'white', backgroundColor: COLOR_SECONDARY}]}
										name="ios-call" />
									<Input placeholder='phone number' style={styles.contactInput} onChangeText={(contactDlgNumber) => {
										this.setState({contactDlgNumber});
									}}/>
								</Item>
							</View>
						</DialogContent>
					</Dialog>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	cardTitle: {
		color: 'white',
		fontSize: 25,
		alignSelf: 'flex-start'
	},

	contactInput: {
		fontSize: 20,
		padding: 10,
		color: 'white',
		fontWeight:'bold',
		backgroundColor: COLOR_PRIAMRY_LIGHT
	},

	info: {
		color: 'white',
		fontSize: 14,
	},

	levelTitle: {
		color: 'white',
		fontSize: 17,
	},

	levelContainer: {
		marginBottom: 25,
		justifyContent:"space-between"
	},

	levelText: {
		flex: 1,
		flexDirection: 'column',
		alignSelf: 'flex-start',
		marginLeft: 10
	},

	contactsItem: {
		width: '100%',
		alignSelf: 'stretch',
		flex: 1,
		flexDirection: 'row',
		justifyContent:"space-between",
		marginBottom: 15,
	},
});

export default Accident
