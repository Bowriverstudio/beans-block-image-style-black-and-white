/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import icon from './icon';

/**
 * Register block
 */
export default registerBlockType(
    'brs/static',
    {
        title: __( 'Example - Static Block' ),
        description: __( 'Demonstration of how to make a static call to action block.' ),
        category: 'common',
        icon: {
            background: 'rgba(254, 243, 224, 0.52)',
            src: icon,
        },
        keywords: [
            __( 'Banner' ),
            __( 'CTA' ),
            __( 'Shout Out' ),
        ],
        edit: props => {
            const { className, isSelected } = props;
            return (
                <div className={ className }>
                    <h2>{ __( 'Static Call to Action' ) }</h2>
                    <p>{ __( 'This is really important!' ) }</p>
                    {
                        isSelected && (
                            <p className="sorry warning">{ __( '✋ Sorry! You cannot edit this block ✋', 'jsforwpblocks' ) }</p>
                        )
                    }
                </div>
            );
        },
        save: props => {
            return (
                <div>
                    <h2>{ __( 'Call to Action', 'jsforwpblocks' ) }</h2>
                    <p>{ __( 'This is really important!', 'jsforwpblocks' ) }</p>
                </div>
            );
        },
    },
);