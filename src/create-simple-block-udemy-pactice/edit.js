import { __ } from '@wordpress/i18n';

import {
	BlockControls,
	RichText,
	useBlockProps,
	AlignmentToolbar,
} from '@wordpress/block-editor';


import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {

	const { text, alignment } = attributes;

	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { alignment: newAlignment } );
	};
	const onChangeText = ( newText ) => {
		setAttributes( { text: newText } );
	};

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={ alignment }
					onChange={ onChangeAlignment }
				/>
			</BlockControls>

			<RichText
				{ ...useBlockProps() }
				onChange={ ( value ) => setAttributes( { text: value } ) }
				value={ text }
				placeholder={ __( 'Your Text', 'text-box' ) }
				tagName="h4"
				allowedFormats={ [ 'core/bold' ] }
				style={{textAlign: alignment}}
			/>
		</>
	);
}
