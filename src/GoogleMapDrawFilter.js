import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cache from './ApiComponents/ScriptCache';
import GoogleApi from './ApiComponents/GoogleApi';
import GoogleApiComponent from './ApiComponents/GoogleApiComponent';
import Map from './Map';



class GoogleMapDrawFilter extends Component {


	render () {

		return (
			<div >
				<Map
					google={this.props.google}
					heatMap={this.props.heatMap}
					drawMode={this.props.drawMode}
					markers={this.props.markers}
					mapConfig={this.props.mapConfig}
					mapStyle={this.props.mapStyle}
					polygonOptions={this.props.polygonOptions}
					handleReturnedMarkers={this.props.handleReturnedMarkers}
					onMarkerClick={this.props.onMarkerClick}
					insertMarker={this.props.insertMarker}
					apiKey={this.props.apiKey}
				/>

			</div>
		);
	}
}



GoogleMapDrawFilter.propTypes={
	apiKey:PropTypes.string.isRequired,
	drawMode:PropTypes.bool,
	heatMap:PropTypes.bool,
	markers:PropTypes.array,
	mapConfig:PropTypes.object,
	polygonOptions:PropTypes.object,
	google:PropTypes.object, //is provided by wrapper
	mapStyle:PropTypes.object,
	handleReturnedMarkers:PropTypes.func,
	onMarkerClick:PropTypes.func,
	insertMarker:PropTypes.bool
};

GoogleMapDrawFilter.defaultProps={
	drawMode:true,
	insertMarker:false,
	mapConfig:{
		zoom:14,
		lat:41.384279176844764,
		lng:2.1526336669921875,

	},
	mapStyle:{
		height:'600px',
		width: '600px',
	},
	polygonOptions:{
		fillColor: '#455A64',
		fillOpacity: 0.3,
		strokeColor:'#455A64',
		strokeWeight:3,
		clickable: true,
		editable: true,
		zIndex: 1
	},
	markers:[],
};



export default GoogleApiComponent(GoogleMapDrawFilter);
