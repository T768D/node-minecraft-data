// Because enums cannot be nested within other types, they must all be hoisted

declare const enum packet_name {
    "player_identification" = 0x00,
    "set_block" = 0x05,
    "position" = 0x08,
    "message" = 0x0d,
}

declare const enum packet_name_2 {
    "server_identification" = 0x00,
    "ping" = 0x01,
    "level_initialize" = 0x02,
    "level_data_chunk" = 0x03,
    "level_finalize" = 0x04,
    "set_block" = 0x06,
    "spawn_player" = 0x07,
    "player_teleport" = 0x08,
    "position_and_orientation_update" = 0x09,
    "position_update" = 0x0a,
    "orientation_update" = 0x0b,
    "despawn_player" = 0x0c,
    "message" = 0x0d,
    "disconnect_player" = 0x0e,
    "update_user_type" = 0x0f,
}

