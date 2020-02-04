<?php
namespace Beans\Block\Image\Style\BW;

/**
 * Private function that returns a unique prefix for this plugin.
 *
 * @return string
 */
function _get_enqueue_prefix(){
    return 'beans-block-image-style-bw';
}

add_action('enqueue_block_editor_assets', __NAMESPACE__.'\enqueue_block_editor_assets');
/**
 * Enqueue block scripts and styles in the admin editor only.
 */
function enqueue_block_editor_assets(){
    $build_url = _get_plugin_url() . 'build/';
    $asset_file = include(_get_plugin_directory() . 'build/index.asset.php');
    wp_enqueue_script(
        _get_enqueue_prefix(). 'script',
        $build_url . 'index.js',
        $asset_file['dependencies'],
        $asset_file['version']
    );

    wp_enqueue_style(
        _get_enqueue_prefix() .'style',
        $build_url . 'style.css',
        '',
        filemtime(_get_plugin_directory() . 'build/style.css')
    );
}

add_action( 'wp_enqueue_scripts', __NAMESPACE__.'\enqueue_scripts' );
/**
 * Enqueue frontend only.
 */
function enqueue_scripts(){
    $build_url = _get_plugin_url() . 'build/';
    wp_enqueue_style(
        _get_enqueue_prefix().'style',
        $build_url . 'style.css',
        '',
        filemtime(_get_plugin_directory() . 'build/style.css')
    );
}
