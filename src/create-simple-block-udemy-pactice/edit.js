import { __ } from '@wordpress/i18n';

import { BlockControls, RichText, useBlockProps } from '@wordpress/block-editor';


import './editor.scss';


export default function Edit( { attributes, setAttributes } ) {
	const { text } = attributes;
	return (
		<>
		<BlockControls controls={[
			{
				title: 'Button 1',
				icon: 'admin-generic',
				isActive: true,
				onClick: () => console.log('Button 1 clicked')
			},
			{
				title: 'Button 2',
				icon: 'admin-collapse',				
				onClick: () => console.log('Button 2 clicked')
			}
		]}
		/>
		
			
		
		
		<RichText
		{ ...useBlockProps() }
		onChange={ ( value ) => setAttributes( { text: value } ) }
		value={ text }
		placeholder={ __( 'Your Text', 'text-box' ) }
		tagName="h4"
		allowedFormats={ [ 'core/bold' ] }
	/>

	</>
		
	);
}
