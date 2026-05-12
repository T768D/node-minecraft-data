// Because enums cannot be nested within other types, they must all be hoisted

declare const enum packet_name {
}

declare const enum packet_name_2 {
    "set_protocol" = 0x00,
    "legacy_server_list_ping" = 0xfe,
}

declare const enum packet_name_3 {
    "server_info" = 0x00,
    "ping" = 0x01,
}

declare const enum packet_name_4 {
    "ping_start" = 0x00,
    "ping" = 0x01,
}

declare const enum packet_name_5 {
    "disconnect" = 0x00,
    "encryption_begin" = 0x01,
    "success" = 0x02,
}

declare const enum packet_name_6 {
    "login_start" = 0x00,
    "encryption_begin" = 0x01,
}

declare const enum packet_name_7 {
    "keep_alive" = 0x00,
    "login" = 0x01,
    "chat" = 0x02,
    "update_time" = 0x03,
    "entity_equipment" = 0x04,
    "spawn_position" = 0x05,
    "update_health" = 0x06,
    "respawn" = 0x07,
    "position" = 0x08,
    "held_item_slot" = 0x09,
    "bed" = 0x0a,
    "animation" = 0x0b,
    "named_entity_spawn" = 0x0c,
    "collect" = 0x0d,
    "spawn_entity" = 0x0e,
    "spawn_entity_living" = 0x0f,
    "spawn_entity_painting" = 0x10,
    "spawn_entity_experience_orb" = 0x11,
    "entity_velocity" = 0x12,
    "entity_destroy" = 0x13,
    "entity" = 0x14,
    "rel_entity_move" = 0x15,
    "entity_look" = 0x16,
    "entity_move_look" = 0x17,
    "entity_teleport" = 0x18,
    "entity_head_rotation" = 0x19,
    "entity_status" = 0x1a,
    "attach_entity" = 0x1b,
    "entity_metadata" = 0x1c,
    "entity_effect" = 0x1d,
    "remove_entity_effect" = 0x1e,
    "experience" = 0x1f,
    "update_attributes" = 0x20,
    "map_chunk" = 0x21,
    "multi_block_change" = 0x22,
    "block_change" = 0x23,
    "block_action" = 0x24,
    "block_break_animation" = 0x25,
    "map_chunk_bulk" = 0x26,
    "explosion" = 0x27,
    "world_event" = 0x28,
    "named_sound_effect" = 0x29,
    "world_particles" = 0x2a,
    "game_state_change" = 0x2b,
    "spawn_entity_weather" = 0x2c,
    "open_window" = 0x2d,
    "close_window" = 0x2e,
    "set_slot" = 0x2f,
    "window_items" = 0x30,
    "craft_progress_bar" = 0x31,
    "transaction" = 0x32,
    "update_sign" = 0x33,
    "map" = 0x34,
    "tile_entity_data" = 0x35,
    "open_sign_entity" = 0x36,
    "statistics" = 0x37,
    "player_info" = 0x38,
    "abilities" = 0x39,
    "tab_complete" = 0x3a,
    "scoreboard_objective" = 0x3b,
    "scoreboard_score" = 0x3c,
    "scoreboard_display_objective" = 0x3d,
    "scoreboard_team" = 0x3e,
    "custom_payload" = 0x3f,
    "kick_disconnect" = 0x40,
}

declare const enum packet_name_8 {
    "keep_alive" = 0x00,
    "chat" = 0x01,
    "use_entity" = 0x02,
    "flying" = 0x03,
    "position" = 0x04,
    "look" = 0x05,
    "position_look" = 0x06,
    "block_dig" = 0x07,
    "block_place" = 0x08,
    "held_item_slot" = 0x09,
    "arm_animation" = 0x0a,
    "entity_action" = 0x0b,
    "steer_vehicle" = 0x0c,
    "close_window" = 0x0d,
    "window_click" = 0x0e,
    "transaction" = 0x0f,
    "set_creative_slot" = 0x10,
    "enchant_item" = 0x11,
    "update_sign" = 0x12,
    "abilities" = 0x13,
    "tab_complete" = 0x14,
    "settings" = 0x15,
    "client_command" = 0x16,
    "custom_payload" = 0x17,
}

