import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import SelectPicker from './SelectPicker'

export default class Example extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selected: '5'
		}
	}

	render() {

		var options = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

		//Optional
		var labels = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<TouchableOpacity onPress={ () => this.refs.picker.show() }>
					<Text>Click to show!</Text>
				</TouchableOpacity>
				<SelectPicker
					ref={'picker'}
					options={options}
					labels={labels}
					selectedOption={this.state.selected}
					onSubmit={(selectedValue) => {
						this.setState({ selected: selectedValue })
					}}
				/>
			</View>
		);
	}
}