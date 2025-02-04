import { registerBlockType, createBlock } from '@wordpress/blocks';

import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import { __ } from '@wordpress/i18n';

registerBlockType( metadata.name, {
	icon: {
		src: (
			<svg
				version="1.1"
				viewBox="0 0 500 500"
				preserveAspectRatio="xMinYMin meet"
			>
				<circle cx="250" cy="250" r="200" />
			</svg>
		),
		background: '#f03',
		foreground: '#fff',
	},
	variations: [
		{
			name: 'blocks-course/gradient-text-box',
			title: __( 'Gradient Text Box' ),
			icon: 'wordpress',
			attributes: {
				gradient: 'red-to-blue',
			},
		},
	],
	transforms:{
		from:[
			{
				type: 'block',
				blocks: [ 'core/paragraph' ],
				transform: ({content, align}) => {
					return createBlock( 'blocks-course/text-box',{
						text: content,
						alignment:align
					} )
				}
			},
			{
				type: 'enter',
				regExp: /textbox/i,
				transform: () => {
					return createBlock( 'blocks-course/text-box', {
						shadow: true,
						gradient: 'red-to-blue'
					} )
				}
			},
			{
				type: 'prefix',
				prefix: 'textbox',
				transform: () => {
					return createBlock( 'blocks-course/text-box' );
				},
			},
		],
		to: [
			{
				type: 'block',
				blocks: [ 'core/paragraph' ],
				isMatch: ( { text } ) => {
					return text ? true : false;
				},
				transform: ( { text, alignment } ) => {
					return createBlock( 'core/paragraph', {
						content: text,
						align: alignment,
					} );
				},
			},
		],
	},
	edit: Edit,
	save,
} );
