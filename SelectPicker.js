import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Picker, Dimensions } from 'react-native';

var SCREEN_WIDTH = Dimensions.get('window').width;

export default class SelectPicker extends Component {

	constructor(props) {
		super(props);

		this.state = {
			options: this.props.options,
			labels: this.props.labels || this.props.options,
			color: this.props.color || '#007AFF',
			modalVisible: this.props.modalVisible || false,
			selectedOption: this.props.selectedOption || this.props.options[0]
		};
	}

	show() {
		this.setState({ modalVisible: true });
	}

	render() {

		return (
			<Modal
				animationType="slide"
				transparent={true}
				visible={this.state.modalVisible}>
				<View style={styles.basicContainer}>
					<View style={styles.modalContainer}>
						<View style={styles.buttonView}>
							<TouchableOpacity onPress={() => {
								this.setState({ modalVisible: false });
							}}>
								<Text style={{ color: this.state.color }}>Cancel</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => {
								if ( this.props.onSubmit ) {
									this.props.onSubmit(this.state.selectedOption);
								}
								this.setState({ modalVisible: false });
							}}>
								<Text style={{ color: this.state.color }}>Confirm</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.mainBox}>
							{/*Model body*/}
							<Picker
								ref={'picker'}
								style={styles.bottomPicker}
								selectedValue={this.state.selectedOption}
								onValueChange={(option) => this.setState({ selectedOption: option })}
							>
								{
									this.state.options.map((option, i) => {
										var label = this.state.labels[i] || option;
										return <Picker.Item
											key={i}
											value={option}
											label={label}
										/>
									})
								}
							</Picker>
						</View>

					</View>
				</View>
			</Modal>
		);
	}
}

const styles = StyleSheet.create({
	basicContainer: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	modalContainer: {
		width: SCREEN_WIDTH,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 0,
		backgroundColor: '#F5FCFF',
	},
	buttonView: {
		width: SCREEN_WIDTH,
		padding: 8,
		paddingLeft: 15,
		paddingRight: 15,
		borderTopWidth: 0.5,
		borderTopColor: 'lightgrey',
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	bottomPicker: {
		width: SCREEN_WIDTH,
	},
	mainBox: {}
});
