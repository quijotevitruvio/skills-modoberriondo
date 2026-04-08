<div class="wp-image-hotspot-admin-wrapper">
    <!-- Hidden input to store JSON data of all pins -->
    <input type="hidden" id="wp_image_hotspot_pins_data_input" name="wp_image_hotspot_pins_data_input"
        value="<?php echo esc_attr($pins_data); ?>">

    <div class="wp-image-hotspot-main-image-wrap">
        <h3>
            <?php _e('1. Select Main Image', 'wp-image-hotspot'); ?>
        </h3>
        <p>
            <input type="hidden" id="wp_image_hotspot_main_image" name="wp_image_hotspot_main_image"
                value="<?php echo esc_attr($main_image_url); ?>">
            <button type="button" class="button" id="wp_image_hotspot_upload_btn">
                <?php _e('Select/Upload Image', 'wp-image-hotspot'); ?>
            </button>
            <button type="button" class="button button-link-delete" id="wp_image_hotspot_remove_btn"
                style="<?php echo empty($main_image_url) ? 'display:none;' : ''; ?>">
                <?php _e('Remove Image', 'wp-image-hotspot'); ?>
            </button>
        </p>
    </div>

    <div class="wp-image-hotspot-editor-grid" style="<?php echo empty($main_image_url) ? 'display:none;' : ''; ?>">
        
        <div class="wp-image-hotspot-workspace">
            <h3>
                <?php _e('2. Add and Position Pins', 'wp-image-hotspot'); ?>
                <button type="button" class="button button-small" id="wp_image_hotspot_clear_btn" style="float: right;">
                    <?php _e('Clear All Pins', 'wp-image-hotspot'); ?>
                </button>
            </h3>
            <p class="description">
                <?php _e('Click anywhere on the image below to add a new pin. Drag pins to reposition them.', 'wp-image-hotspot'); ?>
            </p>

            <div class="wp-image-hotspot-preview-container" id="wp_image_hotspot_preview_container">
                <div class="wp-image-hotspot-empty-state">
                    <p style="margin:0; font-weight:600;"><i class="dashicons dashicons-location"></i> <?php _e('Click on the image to add your first pin', 'wp-image-hotspot'); ?></p>
                </div>
                
                <?php if (!empty($main_image_url)): ?>
                    <img src="<?php echo esc_url($main_image_url); ?>" alt="Main Hotspot Image"
                        id="wp_image_hotspot_preview_image">
                <?php endif; ?>
                <!-- Pins will be rendered here by JS -->
                <div id="wp_image_hotspot_pins_layer"></div>
            </div>
        </div>

        <div class="wp-image-hotspot-pins-editor-wrap">
            <h3>
                <?php _e('3. Edit Pin Details', 'wp-image-hotspot'); ?>
            </h3>
            <p class="description">
                <?php _e('Configure the content and style for each pin. Drag the ⠿ handle to reorder pins.', 'wp-image-hotspot'); ?>
            </p>

            <div id="wp_image_hotspot_pins_accordion">
                <!-- Pin editor items will be appended here by JS -->
            </div>

            <div class="ih-data-tools" style="margin-top: 15px; padding: 10px; background: #f6f7f7; border: 1px solid #ddd; border-radius: 4px;">
                <strong><?php _e('Data Tools', 'wp-image-hotspot'); ?></strong>
                <div style="margin-top: 8px; display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
                    <button type="button" class="button" id="wp_image_hotspot_export_btn">
                        <span class="dashicons dashicons-download" style="vertical-align:middle;"></span>
                        <?php _e('Export Pins (JSON)', 'wp-image-hotspot'); ?>
                    </button>
                    <label class="button" style="cursor:pointer; margin:0;">
                        <span class="dashicons dashicons-upload" style="vertical-align:middle;"></span>
                        <?php _e('Import Pins (JSON)', 'wp-image-hotspot'); ?>
                        <input type="file" id="wp_image_hotspot_import_file" accept=".json" style="display:none;">
                    </label>
                </div>
            </div>
        </div>
        
    </div>
</div>