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
    "compress" = 0x03,
}

declare const enum packet_name_6 {
    "login_start" = 0x00,
    "encryption_begin" = 0x01,
}

declare const enum packet_player_info_action {
    "add_player" = 0,
    "update_game_mode" = 1,
    "update_latency" = 2,
    "update_display_name" = 3,
    "remove_player" = 4,
}

declare const enum packet_name_7 {
    "spawn_entity" = 0x00,
    "spawn_entity_experience_orb" = 0x01,
    "spawn_entity_weather" = 0x02,
    "spawn_entity_living" = 0x03,
    "spawn_entity_painting" = 0x04,
    "named_entity_spawn" = 0x05,
    "animation" = 0x06,
    "statistics" = 0x07,
    "block_break_animation" = 0x08,
    "tile_entity_data" = 0x09,
    "block_action" = 0x0a,
    "block_change" = 0x0b,
    "boss_bar" = 0x0c,
    "difficulty" = 0x0d,
    "tab_complete" = 0x0e,
    "chat" = 0x0f,
    "multi_block_change" = 0x10,
    "transaction" = 0x11,
    "close_window" = 0x12,
    "open_window" = 0x13,
    "window_items" = 0x14,
    "craft_progress_bar" = 0x15,
    "set_slot" = 0x16,
    "set_cooldown" = 0x17,
    "custom_payload" = 0x18,
    "kick_disconnect" = 0x19,
    "entity_status" = 0x1a,
    "explosion" = 0x1b,
    "unload_chunk" = 0x1c,
    "set_compression" = 0x1d,
    "game_state_change" = 0x1e,
    "keep_alive" = 0x1f,
    "map_chunk" = 0x20,
    "world_event" = 0x21,
    "world_particles" = 0x22,
    "named_sound_effect" = 0x23,
    "login" = 0x24,
    "map" = 0x25,
    "rel_entity_move" = 0x26,
    "entity_move_look" = 0x27,
    "entity_look" = 0x28,
    "entity" = 0x29,
    "open_sign_entity" = 0x2a,
    "abilities" = 0x2b,
    "combat_event" = 0x2c,
    "player_info" = 0x2d,
    "position" = 0x2e,
    "bed" = 0x2f,
    "entity_destroy" = 0x30,
    "remove_entity_effect" = 0x31,
    "resource_pack_send" = 0x32,
    "respawn" = 0x33,
    "entity_head_rotation" = 0x34,
    "world_border" = 0x35,
    "camera" = 0x36,
    "held_item_slot" = 0x37,
    "scoreboard_display_objective" = 0x38,
    "entity_metadata" = 0x39,
    "attach_entity" = 0x3a,
    "entity_velocity" = 0x3b,
    "entity_equipment" = 0x3c,
    "experience" = 0x3d,
    "update_health" = 0x3e,
    "scoreboard_objective" = 0x3f,
    "scoreboard_team" = 0x40,
    "scoreboard_score" = 0x41,
    "spawn_position" = 0x42,
    "update_time" = 0x43,
    "title" = 0x44,
    "update_sign" = 0x45,
    "playerlist_header" = 0x46,
    "collect" = 0x47,
    "entity_teleport" = 0x48,
    "update_attributes" = 0x49,
    "entity_effect" = 0x4a,
}

declare const enum packet_name_8 {
    "tab_complete" = 0x00,
    "chat" = 0x01,
    "client_command" = 0x02,
    "settings" = 0x03,
    "transaction" = 0x04,
    "enchant_item" = 0x05,
    "window_click" = 0x06,
    "close_window" = 0x07,
    "custom_payload" = 0x08,
    "use_entity" = 0x09,
    "keep_alive" = 0x0a,
    "position" = 0x0b,
    "position_look" = 0x0c,
    "look" = 0x0d,
    "flying" = 0x0e,
    "abilities" = 0x0f,
    "block_dig" = 0x10,
    "entity_action" = 0x11,
    "steer_vehicle" = 0x12,
    "resource_pack_receive" = 0x13,
    "held_item_slot" = 0x14,
    "set_creative_slot" = 0x15,
    "update_sign" = 0x16,
    "arm_animation" = 0x17,
    "spectate" = 0x18,
    "block_place" = 0x19,
    "use_item" = 0x1a,
}

