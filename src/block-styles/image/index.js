import { __ } from '@wordpress/i18n';
import { registerBlockStyle } from '@wordpress/blocks';

registerBlockStyle( 'core/image', {
    name: 'black-and-white-hover-color',
    label: __( 'Black and White - Hover is Color' ),
    isDefault: false,
});
