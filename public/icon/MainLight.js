import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { View } from 'native-base';

import ReactNativeSvgParser from '@target-corp/react-native-svg-parser';

const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 219.92 220"><title>자산 16</title><g id="레이어_2" data-name="레이어 2"><g id="레이어_1-2" data-name="레이어 1"><path class="cls-1" d="M215.62,143.52h-7.11a52.4,52.4,0,0,0-4.45-10.79l5-5a4.3,4.3,0,0,0,0-6.08L194.52,107a4.29,4.29,0,0,0-6.07,0l-5,5a52,52,0,0,0-10.79-4.49v-7a4.29,4.29,0,0,0-4.29-4.3h-17.2a69.32,69.32,0,0,0,2.63-19.32A76.92,76.92,0,0,0,76.86,0h0A77,77,0,0,0,0,76.93c0,19.43,7.13,35.84,21.2,48.78a78.42,78.42,0,0,1,25.11,48.85v34.27A11.18,11.18,0,0,0,57.5,220H96.6a11.17,11.17,0,0,0,11.17-11.17V195l14.16,14.12a4.31,4.31,0,0,0,6.09,0l5-5a52.72,52.72,0,0,0,10.8,4.45v7.11a4.3,4.3,0,0,0,4.3,4.3h20.2a4.29,4.29,0,0,0,4.29-4.3v-7.08a52.34,52.34,0,0,0,10.75-4.46l5,5.05a4.29,4.29,0,0,0,6.07,0l14.56-14.58a4.3,4.3,0,0,0,0-6.08l-5-5.06a52.16,52.16,0,0,0,4.45-10.76h7.13a4.3,4.3,0,0,0,4.3-4.29V147.81A4.3,4.3,0,0,0,215.62,143.52ZM26.92,119.38C14.69,108.14,8.5,93.86,8.5,76.93A68.41,68.41,0,0,1,76.81,8.59h0a68.35,68.35,0,0,1,68.34,68.34c0,16.93-6.2,31.21-18.43,42.45a87.29,87.29,0,0,0-27.37,50.78H91.44v-8.89a4.39,4.39,0,0,0-3.66-4.39,4.3,4.3,0,0,0-4.93,4.25v9h-12V116.73a4.42,4.42,0,0,0-.16-1.14l-9.35-34L62.64,83a4.29,4.29,0,0,0,6.07,0l7-7,7,7a4.3,4.3,0,0,0,6.08,0l4.41-4.41-10.2,37a4.41,4.41,0,0,0-.15,1.14V130a4.4,4.4,0,0,0,3.66,4.39,4.3,4.3,0,0,0,4.93-4.26V117.31l9.87-35.83L102.78,83a4.3,4.3,0,0,0,6.49-.47,4.37,4.37,0,0,0-.5-5.69l-10-10a4.29,4.29,0,0,0-6.07,0l-7,7-7-7a4.3,4.3,0,0,0-6.08,0l-7,7-7-7a4.3,4.3,0,0,0-6.08,0l-9.94,9.94a4.39,4.39,0,0,0-.51,5.69,4.29,4.29,0,0,0,6.49.48l3.23-3.23,10.35,37.58v52.85H54.29A87.23,87.23,0,0,0,26.92,119.38Zm28,59.37H98.75v12H54.92Zm41.25,32.66H57.5a2.58,2.58,0,0,1-2.58-2.58v-9.45H98.75v9.45A2.59,2.59,0,0,1,96.17,211.41Zm11.6-23.34V174.69l0-.14c0-.48.11-1,.18-1.46a51.73,51.73,0,0,0,4.36,10.42Zm103.55-23.93h-6.07a4.32,4.32,0,0,0-4.21,3.38,43.35,43.35,0,0,1-5.94,14.31,4.28,4.28,0,0,0,.57,5.36l4.39,4.37-8.51,8.49-4.38-4.37a4.33,4.33,0,0,0-5.38-.58A43.49,43.49,0,0,1,167.45,201a4.3,4.3,0,0,0-3.39,4.2v6.18H152v-6.14a4.32,4.32,0,0,0-3.43-4.21,43.77,43.77,0,0,1-14.34-5.92,4.31,4.31,0,0,0-5.37.58l-4.36,4.35L116,191.58l4.35-4.34a4.28,4.28,0,0,0,.58-5.37,43.11,43.11,0,0,1-6-14.35,4.31,4.31,0,0,0-4.21-3.38h-1.5a79.11,79.11,0,0,1,23.24-38.43,70.46,70.46,0,0,0,7.15-7.58l.08,0a43.75,43.75,0,0,1,8.89-2.95A4.31,4.31,0,0,0,152,111v-6.11h12v6a4.3,4.3,0,0,0,3.38,4.2,43.57,43.57,0,0,1,14.34,6,4.3,4.3,0,0,0,5.37-.57l4.33-4.35,8.49,8.51L195.62,129a4.31,4.31,0,0,0-.58,5.37A43.62,43.62,0,0,1,201,148.72a4.3,4.3,0,0,0,4.2,3.39h6.16Z"/><path class="cls-1" d="M158.21,126.33a31.8,31.8,0,1,0,31.8,31.8A31.83,31.83,0,0,0,158.21,126.33Zm0,55a23.21,23.21,0,1,1,23.21-23.2A23.23,23.23,0,0,1,158.21,181.33Z"/><path class="cls-1" d="M158.21,141.8a16.33,16.33,0,1,0,16.33,16.33A16.35,16.35,0,0,0,158.21,141.8Zm0,24.06a7.74,7.74,0,1,1,7.74-7.73A7.74,7.74,0,0,1,158.21,165.86Z"/><path class="cls-1" d="M87.33,141.94a4.3,4.3,0,1,0,3,1.26A4.33,4.33,0,0,0,87.33,141.94Z"/></g></g></svg>
`
const cssString = `.cls-1{fill:#fff;}`;



class MainLight extends Component {

	constructor(props) {
		super(props);

		this.svgNode = ReactNativeSvgParser(svgString, cssString, {width:70, height:70, resizeMode: 'contain'});
	}

	render() {
		return (
			<View>
				{ this.svgNode }
			</View>
		);
	}
}

export default MainLight