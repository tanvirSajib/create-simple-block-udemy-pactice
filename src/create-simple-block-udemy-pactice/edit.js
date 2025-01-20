import { __ } from '@wordpress/i18n';

import {
	BlockControls,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton, ToolbarDropdownMenu } from '@wordpress/components';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { text } = attributes;
	return (
		<>
			<BlockControls group='inline'>
				<p>Inline Blcils</p>
			</BlockControls>
			{ text && (
			<BlockControls
				group='other'
				controls={ [
					{
						title: 'Button 1',
						icon: 'admin-generic',
						isActive: true,
						onClick: () => console.log( 'Button 1 clicked' ),
					},
					{
						title: 'Button 2',
						icon: 'admin-collapse',
						onClick: () => console.log( 'Button 2 clicked' ),
					},
				] }
			>
				<ToolbarGroup>
					<ToolbarButton
						title="Align left"
						icon="editor-alignleft"
						onClick={ (  ) => console.log( 'align left' ) }
					/>

					<ToolbarButton
						title="Align center"
						icon="editor-aligncenter"
						onClick={ (  ) => console.log( 'align cneter' ) }
					/>

					<ToolbarButton
						title="Align Right"
						icon="editor-alignright"
						onClick={ (  ) => console.log( 'align right' ) }
					/>

					<ToolbarDropdownMenu 
						icon="arrow-down-alt2"
						label="lebel"
						controls={[
							{
								title: 'align wide',
								icon: 'align-wide'
							},
							{
								title: 'align full',
								icon: 'align-full-width'
							}
						]}
					/>
				</ToolbarGroup>

				<ToolbarGroup>
						<p>isfusdfus</p>
				</ToolbarGroup>
			</BlockControls>
			)}
			
			<BlockControls group='block'>
				<p>Blocks</p>
			</BlockControls>

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
