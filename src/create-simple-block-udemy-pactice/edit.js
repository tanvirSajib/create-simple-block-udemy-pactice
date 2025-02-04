import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
} from '@wordpress/block-editor';
import './editor.scss';
import { BoxControl } from '@wordpress/components';






export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { text, alignment } = attributes;

	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { alignment: newAlignment } );
	};
	const onChangeText = ( newText ) => {
		setAttributes( { text: newText } );
	};

	

	return (
		<>
		<div { ...useBlockProps( {
					className: `text-box-align-${ alignment }`,
				} ) }
				>
			
		
			<BlockControls>
				<AlignmentToolbar
					value={ alignment }
					onChange={ onChangeAlignment }
				/>
			</BlockControls>
			<RichText
				className="text-box-title"				
				onChange={ onChangeText }
				value={ text }
				placeholder={ __( 'Your Text', 'text-box' ) }
				tagName="h4"
				allowedFormats={ [] }
			/>

		</div>
		</>
	);
}