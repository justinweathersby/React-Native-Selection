'use strict';

import React, { Component } from 'react';

import {
    TextInput,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Platform,
    Dimensions,
    DeviceEventEmitter,
    AsyncStorage,
    StyleSheet,
    Modal
} from "react-native";

import _ from 'lodash';

import Icon from "react-native-vector-icons/FontAwesome";

class Selection extends Component {
	static propTypes = {
	  onSelection: React.PropTypes.func,
	  options: React.PropTypes.array,
	  title:  React.PropTypes.string,
	  mode:  React.PropTypes.func,
	  style:  React.PropTypes.object,
      iconColor: React.PropTypes.string,
      iconSize: React.PropTypes.string,
	}
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	modalVisible: false,
	  	title: props.title,
	  	value: 0,
	  };
	}
	openOption(){
		this.setState({modalVisible: !this.state.modalVisible})
	}

	onSelected(name, value){
		const data = {
			value: value,
			name: name,
		}
		this.props.onSelection(data);
		this.setState({
			modalVisible: false,
			title: name,
			value,
		})
	}
  render() {
  	let ScreenHeight = Dimensions.get("window").height;
    let ScreenWidth = Dimensions.get("window").width;

    const { style, options, title, mode, iconColor, iconSize } = this.props;
    const styles = {
    	main: {
    		width: ScreenWidth - 80,
    		marginLeft: 40,
    		marginTop: 5,
    		marginBottom: 5,
    		borderColor: '#ccc',
    		borderWidth: 1,
    		padding: 10,
    		backgroundColor: '#ffffff',
    	},
        body: {
            width: ScreenWidth - 80,
            backgroundColor: '#ffffff',
            maxHeight: ScreenHeight - 300,
            borderRadius: 5,
        },
        option: {
            width: ScreenWidth - 80,
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#cccccc',
        }
    }
    return (
    	<View>
    		
    		<Modal
    			visible={this.state.modalVisible}
    			onRequestClose={() =>{alert("Modal has been closed.")}}
    			transparent={true}
    		>
    			<TouchableOpacity onPress={()=> this.openOption()}>
    				<View style={{
    					width: ScreenWidth,
    					height: ScreenHeight,
    					backgroundColor: 'rgba(0,0,0,0.8)',
    					alignItems: 'center',
                        justifyContent: 'center',
    				}}>
    					<View style={styles.body}>
    						<ScrollView>
    							{_.map(options, (data, k)=>{
	    							return(
	    								<TouchableOpacity key={k} onPress={()=> this.onSelected(data.name, data.value)}>
			    							<View style={styles.options,{
			    								backgroundColor: data.value === this.state.value ? '#f2f2f2' : '#ffffff',
			    							}}>
                                                {
                                                    if(data.icon){
                                                        return(
                                                            <View style={{
                                                                marginRight: 20,
                                                            }}><Icon name={data.icon} size={iconSize} color={iconColor} /></View> )
                                                    }
                                                }
			    								<Text>{data.name}</Text>
			    							</View>
		    							</TouchableOpacity>
			    					)
	    						})}
    						</ScrollView>
    					</View>
    				</View>
    			</TouchableOpacity>
    		</Modal>
    		
    		<TouchableOpacity onPress={()=>this.openOption()}>
				<View style={styles.main}>
					<Text>{this.state.title}</Text>
				</View>
			</TouchableOpacity>
		</View>
    );
  }
}


export default Selection;